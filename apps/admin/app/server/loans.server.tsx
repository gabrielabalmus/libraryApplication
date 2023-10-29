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
  LoansRaportProps,
} from "~/types/Loans.type";
import { ErrorMessage } from "~/const";
import {
  fromPaginatedLoansResponse,
  fromSingleLoanResponse,
} from "~/transformers/loans.transformer";
import prisma from "prisma";
import { Status } from "@prisma/client";
import { LoanFilteredStatuses } from "~/components/Loans/Loans.helper";
import { sendEmail } from "./mail.server";
import { ReservedLoanEmail } from "@/templates/ReservedLoan.email";
import { BorrowedLoanEmail } from "@/templates/BorrowedLoan.email";
import { CancelledLoanEmail } from "@/templates/CancelledLoan.email";
import {
  addDateDays,
  checkArraysAreEqual,
  formatShortDate,
  getCorrectYear,
} from "@/utils/common";

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
        cityId: true,
        libraryId: true,
        library: {
          select: {
            name: true,
            deleted: true,
          },
        },
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
                    author: true,
                    category: {
                      select: {
                        name: true,
                      },
                    },
                  },
                },
                libraryId: true,
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

const forEachLoanBook = async ({
  loanBooks,
  loanId,
  libraryId,
}: EachLoanBook) => {
  await prisma.loanBooks.deleteMany({
    where: {
      loanId,
      bookLibraryId: { notIn: loanBooks },
    },
  });

  const alreadyBooked = await prisma.loanBooks.findMany({
    where: {
      loanId,
    },
    select: {
      bookLibraryId: true,
    },
  });

  const alreadyBookedList = alreadyBooked.map((item) => item.bookLibraryId);

  if (checkArraysAreEqual(alreadyBookedList, loanBooks)) return;

  const bookLibraries = await prisma.bookLibraries.findMany({
    where: {
      id: { in: loanBooks },
      libraryId,
      deleted: false,
      NOT: [
        {
          loanBooks: {
            some: {
              loan: { status: { in: [Status.BORROWED, Status.RESERVED] } },
            },
          },
        },
      ],
    },
    select: {
      id: true,
    },
  });

  let error = false;

  // check if new added books are same as conditioned books from query
  const bookLibrariesList = bookLibraries.map((item) => item.id);
  const newLoanBooksList = loanBooks.filter(
    (item) => !alreadyBookedList.includes(item)
  );

  if (!checkArraysAreEqual(bookLibrariesList, newLoanBooksList)) error = true;

  const newLoanBooks = bookLibraries.map((item) => ({
    bookLibraryId: item.id,
    loanId,
  }));

  await prisma.loanBooks.createMany({
    data: newLoanBooks,
  });

  if (error) throw new Error(ErrorMessage);
};

export const createLoan = async ({
  reader,
  city,
  library,
  books,
  status,
}: Omit<LoanState, "books" & "reader"> & {
  books: string[];
  reader: { id: string; name: string; email: string };
}) => {
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
        cityId: city,
        libraryId: library,
        readerId: reader.id,
        borrowedAt: status === Status.BORROWED ? new Date() : undefined,
      },
    });

    const bookLibraries = await prisma.bookLibraries.findMany({
      where: {
        id: { in: books },
        libraryId: loan.libraryId,
        deleted: false,
        NOT: [
          {
            loanBooks: {
              some: {
                loan: { status: { in: [Status.BORROWED, Status.RESERVED] } },
              },
            },
          },
        ],
      },
      select: {
        id: true,
      },
    });

    // check if new added books are same as conditioned books from query
    const bookLibrariesList = bookLibraries.map((item) => item.id);

    if (!checkArraysAreEqual(bookLibrariesList, books)) {
      await prisma.loans.deleteMany({
        where: {
          id: loan.id,
        },
      });

      throw new Error(ErrorCreate);
    }

    const newLoanBooks = bookLibraries.map((item) => ({
      bookLibraryId: item.id,
      loanId: loan.id,
    }));

    await prisma.loanBooks.createMany({
      data: newLoanBooks,
    });

    if (status === Status.RESERVED) {
      const byDate = addDateDays(2);
      const data = {
        reader: reader.name,
        byDate: formatShortDate(byDate),
        number: loan.number,
      };

      await sendEmail({
        to: reader.email,
        subject: ReservedLoanSubject,
        template: ReservedLoanEmail(data),
      });
    }

    if (status === Status.BORROWED) {
      const byDate = addDateDays(30);
      const data = {
        reader: reader.name,
        byDate: formatShortDate(byDate),
        number: loan.number,
      };

      await sendEmail({
        to: reader.email,
        subject: BorrowedLoanSubject,
        template: BorrowedLoanEmail(data),
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
  city,
  library,
  books,
  status,
}: Omit<LoanState, "books" & "reader"> & {
  loanId: string;
  books: string[];
  reader: { id: string; name: string; email: string };
}) => {
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
        id: "fgvdgfg",
      },
      data: {
        status,
        cityId: city,
        libraryId: library,
        readerId: reader.id,
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

    await forEachLoanBook({ loanBooks: books, loanId, libraryId: library });

    if (status === Status.BORROWED && status !== currentLoan.status) {
      const byDate = addDateDays(30);

      const data = {
        reader: reader.name,
        byDate: formatShortDate(byDate),
        number: loan.number,
      };

      await sendEmail({
        to: reader.email,
        subject: BorrowedLoanSubject,
        template: BorrowedLoanEmail(data),
      });
    }

    if (status === Status.CANCELLED && status !== currentLoan.status) {
      const data = {
        reader: reader.name,
        number: loan.number,
      };

      await sendEmail({
        to: reader.email,
        subject: CancelledLoanSubject,
        template: CancelledLoanEmail(data),
      });
    }

    return loan;
  } catch (err) {
    throw new Error(ErrorUpdate);
  }
};

export const deleteLoan = async ({ loanId }: LoanIdProps) => {
  try {
    await prisma.loanBooks.deleteMany({
      where: {
        loanId,
      },
    });

    const loan = await prisma.loans.deleteMany({
      where: {
        id: loanId,
      },
    });

    return loan;
  } catch (err) {
    throw new Error(ErrorDelete);
  }
};

export const groupLoansRaport = async ({
  year,
  library,
  status,
}: LoansRaportProps) => {
  try {
    const newYear = getCorrectYear(year);

    const loansRaport = await prisma.loans.aggregateRaw({
      pipeline: [
        {
          $lookup: {
            from: "LoanBooks",
            localField: "_id",
            foreignField: "loanId",
            as: "loanBook",
          },
        },
        {
          $unwind: {
            path: "$loanBook",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "BookLibraries",
            localField: "loanBook.bookLibraryId",
            foreignField: "_id",
            as: "loanBook.bookLibrary",
          },
        },
        {
          $unwind: {
            path: "$loanBook.bookLibrary",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "Libraries",
            localField: "loanBook.bookLibrary.libraryId",
            foreignField: "_id",
            as: "loanBook.bookLibrary.library",
          },
        },
        {
          $unwind: {
            path: "$loanBook.bookLibrary.library",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            library: "$loanBook.bookLibrary.library.name",
            status: "$status",
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
          },
        },
        {
          $match: {
            year: newYear,
            library: library || undefined,
            status: status || undefined,
          },
        },
        {
          $group: {
            _id: "$_id",
            name: { $first: "$library" },
            year: { $first: "$year" },
            month: { $first: "$month" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            month: "$_id",
            total: "$total",
          },
        },
      ],
    });

    return loansRaport;
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};
