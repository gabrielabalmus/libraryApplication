import { ErrorDelete, ErrorGetPaginated } from "~/components/Books/Books.const";
import {
  PaginatedBooksProps,
  BookIdProps,
} from "~/components/Books/Books.type";
import { fromPaginatedBooksResponse } from "~/transformers/books.transformer";
import { prisma } from "./prisma.server";

export const getPaginatedBooks = async ({
  page,
  search,
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
      },
    });

    if (!book) throw new Error(ErrorDelete);

    return book;
  } catch (err) {
    throw new Error(ErrorDelete);
  }
};
