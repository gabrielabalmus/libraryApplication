import {
  ErrorCreate,
  ErrorDelete,
  ErrorGetPaginated,
  ErrorGetSingle,
  ErrorUpdate,
} from "~/components/Loans/Loans.const";
import {
  PaginatedLoansProps,
  LoanState,
  LoanIdProps,
  EachLoanBook,
  ReaderState,
} from "~/types/Loans.type";
import { ErrorMessage } from "~/const";
import {
  fromPaginatedLoansResponse,
  fromSingleLoanResponse,
} from "~/transformers/loans.transformer";
import { prisma } from "./prisma.server";
import { Status } from "@prisma/client";

export const getPaginatedLoans = async ({
  page,
  search,
  library,
  status,
}: PaginatedLoansProps) => {
  try {
    const skip = (page && page > 1 && (page - 1) * 5) || undefined;

    const loans = await prisma.$transaction(async (db) => {
      const count = await db.loans.count({
        where: {
          OR: [
            {
              number: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              reader: {
                email: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            },
            {
              books: {
                some: {
                  bookLibrary: {
                    SKU: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                },
              },
            },
          ],
          books:
            (library && {
              some: {
                bookLibrary: {
                  library: {
                    name: library,
                  },
                },
              },
            }) ||
            undefined,
          status: (status && Status[status as Status]) || undefined,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const data = await db.loans.findMany({
        skip,
        take: 5,
        where: {
          OR: [
            {
              number: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              reader: {
                email: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            },
            {
              books: {
                some: {
                  bookLibrary: {
                    SKU: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                },
              },
            },
          ],
          books:
            (library && {
              some: {
                bookLibrary: {
                  library: {
                    name: library,
                  },
                },
              },
            }) ||
            undefined,
          status: (status && Status[status as Status]) || undefined,
        },
        select: {
          id: true,
          number: true,
          reader: {
            select: {
              email: true,
            },
          },
          status: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      if (!data) throw new Error(ErrorGetPaginated);

      return { count, data: fromPaginatedLoansResponse(data) };
    });

    return loans;
  } catch (err) {
    throw new Error(ErrorGetPaginated);
  }
};

export const getSingleLoan = async ({ loanId }: LoanIdProps) => {
  try {
    const loan = await prisma.loans.findFirst({
      where: {
        id: loanId,
      },
      select: {
        number: true,
        reader: {
          select: {
            id: true,
            name: true,
            phone: true,
            email: true,
            city: { select: { name: true } },
            deleted: true,
          },
        },
        books: {
          select: {
            bookLibrary: {
              select: {
                id: true,
                book: {
                  select: {
                    name: true,
                  },
                },
                library: {
                  select: {
                    name: true,
                    city: { select: { name: true } },
                  },
                },
                SKU: true,
                place: true,
                deleted: true,
              },
            },
          },
        },
        status: true,
        penalty: true,
        borrowedAt: true,
        returnedAt: true,
        createdAt: true,
      },
    });

    if (!loan) throw new Error(ErrorGetSingle);

    return fromSingleLoanResponse(loan);
  } catch (err) {
    throw new Error(ErrorGetSingle);
  }
};

const EachLoanBook = async ({ loanBooks, loanId }: EachLoanBook) => {
  const loanedBooks = await prisma.loans.findFirst({
    where: {
      id: loanId,
    },
    select: {
      books: { select: { bookLibraryId: true } },
    },
  });

  const alreadyLoaned = new Set(loanedBooks?.books);

  const newBooks = loanBooks
    .filter((item) => !alreadyLoaned.has({ bookLibraryId: item.id }))
    .map((item) => ({
      bookLibraryId: item.id,
      loanId,
    }));

  let error = false;

  for (const item of newBooks) {
    const loanedBook = await prisma.loanBooks.findFirst({
      where: {
        bookLibraryId: item.bookLibraryId,
        loan: { status: { in: [Status.BORROWED, Status.RESERVED] } },
      },
      select: {
        id: true,
      },
    });

    if (loanedBook) {
      error = true;
      continue;
    }

    const createdLoanBooks = await prisma.loanBooks.create({
      data: item,
    });

    if (!createdLoanBooks) {
      error = true;
      continue;
    }
  }

  if (error) throw new Error(ErrorMessage);
};

export const createLoan = async ({ reader, books, status }: LoanState) => {
  try {
    const lastLoan = await prisma.loans.findFirst({
      take: 1,
      orderBy: {
        createdAt: "desc",
      },
      select: {
        number: true,
      },
    });

    const number =
      (lastLoan && (parseInt(lastLoan.number) + 1).toString()) || "1";

    const loan = await prisma.loans.create({
      data: {
        number,
        status,
        readerId: (reader as ReaderState).id,
      },
    });

    if (!loan) throw new Error(ErrorCreate);

    await EachLoanBook({ loanBooks: books, loanId: loan.id });

    return loan;
  } catch (err) {
    throw new Error(ErrorCreate);
  }
};

export const updateLoan = async ({
  loanId,
  reader,
  books,
  status,
}: LoanState & { loanId: string }) => {
  try {
    const loan = await prisma.loans.update({
      where: {
        id: loanId,
      },
      data: {
        status,
        readerId: (reader as ReaderState).id,
      },
    });

    if (!loan) throw new Error(ErrorUpdate);

    await EachLoanBook({ loanBooks: books, loanId });

    return loan;
  } catch (err) {
    throw new Error(ErrorUpdate);
  }
};

export const deleteLoan = async ({ loanId }: LoanIdProps) => {
  try {
    const loanBooks = await prisma.loanBooks.deleteMany({
      where: {
        loanId,
      },
    });

    if (!loanBooks) throw new Error(ErrorDelete);

    const loan = await prisma.loans.deleteMany({
      where: {
        id: loanId,
      },
    });

    if (!loan) throw new Error(ErrorDelete);

    return loan;
  } catch (err) {
    throw new Error(ErrorDelete);
  }
};
