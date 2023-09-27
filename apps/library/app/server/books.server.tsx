import { ErrorGetPaginated } from "~/components/Books/Books.const";
import { PaginatedBooksProps } from "~/types/Books.type";
import prisma from "prisma";
import { fromPaginatedBooksResponse } from "~/transformers/books.transformer";

export const getPaginatedBooks = async ({
  page,
  search,
  category,
  library,
  publishHouse,
  language,
}: PaginatedBooksProps) => {
  try {
    const skip = (page > 1 && (page - 1) * 12) || undefined;

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
            (library && {
              some: {
                deleted: false,
                library: {
                  name: library,
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
        take: 12,
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
            (library && {
              some: {
                deleted: false,
                library: {
                  name: library,
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

      if (!data) throw new Error(ErrorGetPaginated);

      return { count, data: await fromPaginatedBooksResponse(data) };
    });

    return books;
  } catch (err) {
    throw new Error(ErrorGetPaginated);
  }
};
