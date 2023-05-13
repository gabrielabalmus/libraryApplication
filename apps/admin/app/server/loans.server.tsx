import {
  BorrowedLoanSubject,
  ErrorCreate,
  ErrorDelete,
  ErrorGetPaginated,
  ErrorGetSingle,
  ErrorUpdate,
  ReservedLoanSubject,
  CancelledLoanSubject,
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
import { isEmpty } from "lodash";
import { LoanFilteredStatuses } from "~/components/Loans/Loans.helper";
import { sendEmail } from "./mail.server";
import { ReservedLoanEmail } from "@/templates/ReservedLoan.email";
import { BorrowedLoanEmail } from "@/templates/BorrowedLoan.email";
import { CancelledLoanEmail } from "@/templates/CancelledLoan.email";
import { addDateDays, formatShortDate } from "@/utils/common";

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

const forEachLoanBook = async ({ loanBooks, loanId }: EachLoanBook) => {
  await prisma.loanBooks.deleteMany({
    where: {
      loanId,
      bookLibraryId: { notIn: loanBooks.map((item) => item.id) },
    },
  });

  const loanedBooks = await prisma.loans.findFirst({
    where: {
      id: loanId,
    },
    select: {
      books: {
        select: {
          bookLibraryId: true,
        },
      },
    },
  });

  const alreadyLoaned = new Set(
    loanedBooks?.books.map((item) => item.bookLibraryId)
  );

  const newBooks = loanBooks
    .filter((item) => !alreadyLoaned.has(item.id))
    .map((item) => ({
      bookLibraryId: item.id,
      loanId,
    }));

  let libraryId =
    loanedBooks?.books && !isEmpty(loanedBooks.books)
      ? loanedBooks.books[0].bookLibraryId
      : "";

  let error = false;

  for (const item of newBooks) {
    const alreadyLoaned = await prisma.loanBooks.findFirst({
      where: {
        bookLibraryId: item.bookLibraryId,
        loan: { status: { in: [Status.BORROWED, Status.RESERVED] } },
      },
      select: {
        id: true,
      },
    });

    if (alreadyLoaned) {
      error = true;
      continue;
    }

    const libraryBook = await prisma.bookLibraries.findFirst({
      where: {
        id: item.bookLibraryId,
        deleted: false,
      },
      select: {
        libraryId: true,
      },
    });

    if (!libraryBook) {
      error = true;
      continue;
    }

    if (!libraryId) {
      libraryId = libraryBook.libraryId;
    } else if (libraryId !== libraryBook.libraryId) {
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
    const statusesOrder = LoanFilteredStatuses();

    if (!statusesOrder.some((item) => item.value === status))
      throw new Error(ErrorCreate);

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
        borrowedAt: status === Status.BORROWED ? new Date() : undefined,
      },
    });

    if (!loan) throw new Error(ErrorCreate);

    await forEachLoanBook({ loanBooks: books, loanId: loan.id });

    if (status === Status.RESERVED) {
      const byDate = addDateDays(2);

      await sendEmail({
        to: (reader as ReaderState).email,
        subject: ReservedLoanSubject,
        template: ReservedLoanEmail,
        data: {
          reader: (reader as ReaderState).name,
          byDate: formatShortDate(byDate),
          number: loan.number,
        },
      });
    }

    if (status === Status.BORROWED) {
      const byDate = addDateDays(30);

      await sendEmail({
        to: (reader as ReaderState).email,
        subject: BorrowedLoanSubject,
        template: BorrowedLoanEmail,
        data: {
          reader: (reader as ReaderState).name,
          byDate: formatShortDate(byDate),
          number: loan.number,
        },
      });
    }

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
    const currentLoan = await prisma.loans.findFirst({
      where: {
        id: loanId,
      },
      select: {
        status: true,
        penalty: true,
      },
    });

    if (!currentLoan) throw new Error(ErrorUpdate);

    const statuses = new Set([
      Status.RETURNED,
      Status.CANCELLED,
    ]) as Set<Status>;

    if (statuses.has(currentLoan.status)) throw new Error(ErrorUpdate);

    const statusesOrder = LoanFilteredStatuses(currentLoan.status);

    if (!statusesOrder.some((item) => item.value === status))
      throw new Error(ErrorUpdate);

    const penalty =
      currentLoan.penalty && status === Status.RETURNED
        ? { ...currentLoan.penalty, paid: true }
        : undefined;

    const loan = await prisma.loans.update({
      where: {
        id: loanId,
      },
      data: {
        status,
        readerId: (reader as ReaderState).id,
        borrowedAt:
          status === Status.BORROWED && status !== currentLoan.status
            ? new Date()
            : undefined,
        returnedAt:
          status === Status.RETURNED && status !== currentLoan.status
            ? new Date()
            : undefined,
        penalty,
      },
    });

    if (!loan) throw new Error(ErrorUpdate);

    await forEachLoanBook({ loanBooks: books, loanId });

    if (status === Status.BORROWED && status !== currentLoan.status) {
      const byDate = addDateDays(30);

      await sendEmail({
        to: (reader as ReaderState).email,
        subject: BorrowedLoanSubject,
        template: BorrowedLoanEmail,
        data: {
          reader: (reader as ReaderState).name,
          byDate: formatShortDate(byDate),
          number: loan.number,
        },
      });
    }

    if (status === Status.CANCELLED && status !== currentLoan.status) {
      await sendEmail({
        to: (reader as ReaderState).email,
        subject: CancelledLoanSubject,
        template: CancelledLoanEmail,
        data: {
          reader: (reader as ReaderState).name,
          number: loan.number,
        },
      });
    }

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
