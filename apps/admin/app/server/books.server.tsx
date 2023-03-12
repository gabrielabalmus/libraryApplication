import {
  ErrorCreate,
  ErrorDelete,
  ErrorGetPaginated,
  ErrorGetSingle,
  ErrorUpdate,
} from "~/components/Books/Books.const";
import {
  PaginatedBooksProps,
  BookIdProps,
  BookState,
  BookLibrariesState,
} from "~/types/Books.type";
import {
  fromPaginatedBooksResponse,
  fromSingleBookResponse,
} from "~/transformers/books.transformer";
import { prisma } from "./prisma.server";

export const getPaginatedBooks = async ({
  page,
  search,
  category,
}: PaginatedBooksProps) => {
  try {
    const skip = (page > 1 && (page - 1) * 5) || undefined;

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
          category: {
            name: {
              contains: category,
              mode: "insensitive",
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const data = await db.books.findMany({
        skip,
        take: 5,
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
          category: {
            name: {
              contains: category,
              mode: "insensitive",
            },
          },
        },
        select: {
          id: true,
          name: true,
          author: true,
          category: {
            select: {
              name: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      if (!data) throw new Error(ErrorGetPaginated);

      return { count, data: fromPaginatedBooksResponse(data) };
    });

    return books;
  } catch (err) {
    throw new Error(ErrorGetPaginated);
  }
};

export const deleteBook = async ({ bookId }: BookIdProps) => {
  try {
    const bookLibraries = await prisma.bookLibraries.updateMany({
      where: {
        bookId,
      },
      data: {
        deleted: true,
      },
    });

    if (!bookLibraries) throw new Error(ErrorDelete);

    const book = await prisma.books.update({
      where: {
        id: bookId,
      },
      data: {
        deleted: true,
      },
    });

    if (!book) throw new Error(ErrorDelete);

    return book;
  } catch (err) {
    throw new Error(ErrorDelete);
  }
};

export const createBook = async ({
  name,
  author,
  pagesNumber,
  category,
  publishHouse,
  releaseYear,
  language,
  bookLibraries,
}: BookState) => {
  try {
    const book = await prisma.books.create({
      data: {
        name,
        author,
        pagesNumber: parseInt(pagesNumber),
        categoryId: category,
        publishHouseId: publishHouse,
        releaseYear: parseInt(releaseYear),
        language,
        deleted: false,
      },
    });

    if (!book) throw new Error(ErrorCreate);

    bookLibraries.map((item) => {
      try {
        const librariesBook = prisma.bookLibraries.create({
          data: {
            bookId: book.id,
            libraryId: item.library,
            SKU: item.sku,
            place: item.place,
            deleted: false,
          },
        });

        if (!librariesBook) throw new Error(ErrorCreate);

        return;
      } catch (err) {
        throw new Error(ErrorCreate);
      }
    });

    return book;
  } catch (err) {
    throw new Error(ErrorCreate);
  }
};

export const getSingleBook = async ({ bookId }: BookIdProps) => {
  try {
    const book = await prisma.$transaction(async (db) => {
      const book = await db.books.findFirst({
        where: {
          id: bookId,
          deleted: false,
        },
        select: {
          name: true,
          author: true,
          category: {
            select: {
              id: true,
            },
          },
          publishHouse: {
            select: {
              id: true,
            },
          },
          releaseYear: true,
          pagesNumber: true,
          language: true,
        },
      });

      if (!book) throw new Error(ErrorGetSingle);

      const bookLibraries = await db.bookLibraries.findMany({
        where: { bookId, deleted: false },
        select: {
          id: true,
          libraryId: true,
          SKU: true,
          place: true,
        },
      });

      if (!bookLibraries) throw new Error(ErrorGetSingle);

      return { ...book, bookLibraries };
    });

    return fromSingleBookResponse(book);
  } catch (err) {
    throw new Error(ErrorGetSingle);
  }
};

export const updateBook = async ({
  bookId,
  name,
  author,
  pagesNumber,
  category,
  publishHouse,
  releaseYear,
  language,
  bookLibraries,
}: BookState & { bookId: string }) => {
  try {
    const book = await prisma.books.updateMany({
      where: {
        id: bookId,
        deleted: false,
      },
      data: {
        name,
        author,
        pagesNumber: parseInt(pagesNumber),
        categoryId: category,
        publishHouseId: publishHouse,
        releaseYear: parseInt(releaseYear),
        language,
      },
    });

    if (!book) throw new Error(ErrorUpdate);

    bookLibraries.map(async (item: BookLibrariesState) => {
      try {
        if (item.id) {
          const updatedBookLibrary = await prisma.bookLibraries.updateMany({
            where: {
              id: item.id,
              deleted: false,
            },
            data: {
              bookId,
              libraryId: item.library,
              SKU: item.sku,
              place: item.place,
            },
          });

          if (!updatedBookLibrary) throw new Error(ErrorUpdate);

          return;
        }

        const createdBookLibrary = await prisma.bookLibraries.create({
          data: {
            bookId,
            libraryId: item.library,
            SKU: item.sku,
            place: item.place,
            deleted: false,
          },
        });

        if (!createdBookLibrary) throw new Error(ErrorUpdate);
      } catch (err) {
        throw new Error(ErrorUpdate);
      }
    });

    return book;
  } catch (err) {
    throw new Error(ErrorUpdate);
  }
};
