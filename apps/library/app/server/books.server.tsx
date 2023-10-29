import {
  ErrorGetPaginated,
  ErrorGetSingle,
  ErrorReserveBooks,
  ReservedLoanSubject,
} from "~/components/Books/Books.const";
import {
  LoanState,
  PaginatedBooksProps,
  SingleBookProps,
} from "~/types/Books.type";
import prisma from "prisma";
import {
  fromPaginatedBooksResponse,
  fromSingleBookResponse,
} from "~/transformers/books.transformer";
import { Status } from "@prisma/client";
import {
  addDateDays,
  checkArraysAreEqual,
  formatShortDate,
} from "@/utils/common";
import { sendEmail } from "./mail.server";
import { ReservedLoanEmail } from "@/templates/ReservedLoan.email";

export const getPaginatedBooks = async ({
  page,
  search,
  category,
  library,
  city,
  publishHouse,
  language,
}: PaginatedBooksProps) => {
  try {
    const skip = (page > 1 && (page - 1) * 6) || undefined;

    const books = await prisma.$transaction(async (db) => {
      const count = await db.books.count({
        where: {
          deleted: false,
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            { author: { contains: search, mode: "insensitive" } },
          ],
          category:
            (category && {
              name: category,
            }) ||
            undefined,
          publishHouse:
            (publishHouse && {
              name: publishHouse,
            }) ||
            undefined,
          language:
            (language && {
              name: language,
            }) ||
            undefined,
          bookLibraries:
            ((library || city) && {
              some: {
                deleted: false,
                library: {
                  OR: [{ name: library }, { city: { name: city } }],
                },
              },
            }) ||
            undefined,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const data = await db.books.findMany({
        skip,
        take: 6,
        where: {
          deleted: false,
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            { author: { contains: search, mode: "insensitive" } },
          ],
          category:
            (category && {
              name: category,
            }) ||
            undefined,
          publishHouse:
            (publishHouse && {
              name: publishHouse,
            }) ||
            undefined,
          language:
            (language && {
              name: language,
            }) ||
            undefined,
          bookLibraries:
            ((library || city) && {
              some: {
                deleted: false,
                library: {
                  OR: [{ name: library }, { city: { name: city } }],
                },
              },
            }) ||
            undefined,
        },
        select: {
          id: true,
          name: true,
          author: true,
          image: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return { count, data: await fromPaginatedBooksResponse(data) };
    });

    return books;
  } catch (err) {
    throw new Error(ErrorGetPaginated);
  }
};

export const getSingleBook = async ({
  bookId,
  page,
  library,
  city,
}: SingleBookProps) => {
  try {
    const skip = (page > 1 && (page - 1) * 5) || undefined;

    const book = await prisma.$transaction(async (db) => {
      const book = await db.books.findFirst({
        where: {
          id: bookId,
          deleted: false,
        },
        select: {
          name: true,
          author: true,
          description: true,
          image: true,
          category: {
            select: {
              name: true,
            },
          },
          publishHouse: {
            select: {
              name: true,
            },
          },
          releaseYear: true,
          pagesNumber: true,
          language: {
            select: {
              name: true,
            },
          },
        },
      });

      if (!book) throw new Error(ErrorGetSingle);

      const bookLibrariesCount = await db.bookLibraries.count({
        where: {
          deleted: false,
          bookId,
          library:
            ((library || city) && {
              OR: [{ name: library }, { city: { name: city } }],
            }) ||
            undefined,
        },
      });

      const bookLibraries = await db.bookLibraries.findMany({
        skip,
        take: 5,
        where: {
          deleted: false,
          bookId,
          library:
            ((library || city) && {
              OR: [{ name: library }, { city: { name: city } }],
            }) ||
            undefined,
        },
        select: {
          id: true,
          library: {
            select: {
              name: true,
              id: true,
              city: { select: { name: true, id: true } },
            },
          },
          loanBooks: {
            where: {
              loan: { status: { in: [Status.RESERVED, Status.BORROWED] } },
            },
            select: {
              loan: {
                select: {
                  id: true,
                },
              },
            },
          },
          SKU: true,
          place: true,
        },
      });

      return { data: book, count: bookLibrariesCount, bookLibraries };
    });

    return fromSingleBookResponse(book);
  } catch (err) {
    throw new Error(ErrorGetSingle);
  }
};

export const reserveBooks = async ({
  reader,
  city,
  library,
  books,
}: LoanState) => {
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
        status: Status.RESERVED,
        cityId: city,
        libraryId: library,
        readerId: reader.id,
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
      await prisma.loanBooks.deleteMany({
        where: {
          loanId: loan.id,
        },
      });

      throw new Error(ErrorReserveBooks);
    }

    const newLoanBooks = bookLibraries.map((item) => ({
      bookLibraryId: item.id,
      loanId: loan.id,
    }));

    await prisma.loanBooks.createMany({
      data: newLoanBooks,
    });

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

    return loan;
  } catch (err) {
    throw new Error(ErrorReserveBooks);
  }
};
