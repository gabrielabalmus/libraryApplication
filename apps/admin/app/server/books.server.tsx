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
  EachBookLibrary,
} from "~/types/Books.type";
import {
  fromPaginatedBooksResponse,
  fromSingleBookResponse,
} from "~/transformers/books.transformer";
import { prisma } from "./prisma.server";
import { ErrorMessage } from "~/const";
import { isEmpty } from "lodash";
import { toFindDuplicates } from "@/utils/common";

export const getPaginatedBooks = async ({
  page = 1,
  search = "",
  category = "",
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
            {
              bookLibraries: {
                some: { SKU: { contains: search, mode: "insensitive" } },
              },
            },
          ],
          category: {
            name: category || undefined,
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
            {
              bookLibraries: {
                some: { SKU: { contains: search, mode: "insensitive" } },
              },
            },
          ],
          category: {
            name: category || undefined,
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
    const book = await prisma.books.update({
      where: {
        id: bookId,
      },
      data: {
        deleted: true,
        bookLibraries: {
          updateMany: {
            where: {
              deleted: false,
            },
            data: { deleted: true },
          },
        },
      },
    });

    if (!book) throw new Error(ErrorDelete);

    return book;
  } catch (err) {
    throw new Error(ErrorDelete);
  }
};

const forEachBookLibrary = async ({
  bookLibraries,
  bookId,
}: EachBookLibrary) => {
  const idList: string[] = [];
  const skuList: string[] = [];

  bookLibraries.forEach((item) => {
    if (item.id) idList.push(item.id);

    if (item.sku) skuList.push(item.sku);
  });

  const skuDuplicates = toFindDuplicates(skuList);

  const deleteBookLibraries = await prisma.bookLibraries.updateMany({
    where: {
      id: {
        notIn: idList,
      },
      bookId,
      deleted: false,
    },
    data: {
      deleted: true,
    },
  });

  if (!deleteBookLibraries) throw new Error(ErrorMessage);

  for (const item of bookLibraries) {
    if (item.id) {
      const bookBySKU = await prisma.bookLibraries.findFirst({
        where: {
          SKU: item.sku,
          deleted: false,
          id: { not: item.id },
        },
        select: {
          id: true,
        },
      });

      if (bookBySKU && !isEmpty(skuDuplicates)) throw new Error(ErrorMessage);

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

      if (!updatedBookLibrary) throw new Error(ErrorMessage);

      continue;
    }

    const bookBySKU = await prisma.bookLibraries.findFirst({
      where: {
        SKU: item.sku,
        deleted: false,
      },
      select: {
        id: true,
      },
    });

    if (bookBySKU) throw new Error(ErrorUpdate);

    const createdBookLibrary = await prisma.bookLibraries.create({
      data: {
        bookId,
        libraryId: item.library,
        SKU: item.sku,
        place: item.place,
      },
    });

    if (!createdBookLibrary) throw new Error(ErrorMessage);
  }
};

export const createBook = async ({
  name,
  author,
  image,
  pagesNumber,
  category,
  publishHouse,
  releaseYear,
  language,
  bookLibraries,
}: BookState) => {
  try {
    const bookByName = await prisma.books.findFirst({
      where: {
        name,
        deleted: false,
      },
      select: {
        id: true,
      },
    });

    if (bookByName) throw new Error(ErrorCreate);

    const book = await prisma.books.create({
      data: {
        name,
        author,
        image,
        pagesNumber: parseInt(pagesNumber),
        categoryId: category,
        publishHouseId: publishHouse,
        releaseYear: parseInt(releaseYear),
        language,
      },
    });

    if (!book) throw new Error(ErrorCreate);

    await forEachBookLibrary({ bookLibraries, bookId: book.id });

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
          image: true,
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
          bookLibraries: {
            where: { deleted: false },
            select: {
              id: true,
              libraryId: true,
              SKU: true,
              place: true,
            },
          },
        },
      });

      if (!book) throw new Error(ErrorGetSingle);

      return book;
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
  image,
  pagesNumber,
  category,
  publishHouse,
  releaseYear,
  language,
  bookLibraries,
}: BookState & { bookId: string }) => {
  try {
    const bookByName = await prisma.books.findFirst({
      where: {
        name,
        deleted: false,
        id: { not: bookId },
      },
      select: {
        id: true,
      },
    });

    if (bookByName) throw new Error(ErrorUpdate);

    const book = await prisma.books.updateMany({
      where: {
        id: bookId,
        deleted: false,
      },
      data: {
        name,
        author,
        image,
        pagesNumber: parseInt(pagesNumber),
        categoryId: category,
        publishHouseId: publishHouse,
        releaseYear: parseInt(releaseYear),
        language,
      },
    });

    if (!book) throw new Error(ErrorUpdate);

    await forEachBookLibrary({ bookLibraries, bookId });

    return book;
  } catch (err) {
    throw new Error(ErrorUpdate);
  }
};
