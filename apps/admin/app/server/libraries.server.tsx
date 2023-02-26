import {
  ErrorCreate,
  ErrorDelete,
  ErrorGetPaginated,
  ErrorGetSingle,
  ErrorUpdate,
} from "~/components/Libraries/Libraries.const";
import {
  PaginatedLibrariesProps,
  LibraryState,
  LibraryIdProps,
} from "~/components/Libraries/Libraries.type";
import {
  fromPaginatedLibrariesResponse,
  fromSingleLibraryResponse,
} from "~/transformers/libraries.transformer";
import { prisma } from "./prisma.server";

export const getPaginatedLibraries = async ({
  page,
  search,
  city,
}: PaginatedLibrariesProps) => {
  try {
    const skip = (page > 1 && (page - 1) * 5) || undefined;

    const libraries = await prisma.$transaction(async (db) => {
      const count = await db.libraries.count({
        where: {
          deleted: false,
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            { phone: { contains: search } },
          ],
          city: {
            name: {
              contains: city,
              mode: "insensitive",
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const data = await db.libraries.findMany({
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
            { phone: { contains: search } },
          ],
          city: {
            name: {
              contains: city,
              mode: "insensitive",
            },
          },
        },
        select: {
          id: true,
          name: true,
          city: {
            select: {
              name: true,
            },
          },
          phone: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      if (!data) throw new Error(ErrorGetPaginated);

      return { count, data: fromPaginatedLibrariesResponse(data) };
    });

    return libraries;
  } catch (err) {
    throw new Error(ErrorGetPaginated);
  }
};

export const getSingleLibrary = async ({ libraryId }: LibraryIdProps) => {
  try {
    const library = await prisma.libraries.findFirst({
      where: {
        id: libraryId,
        deleted: false,
      },
      select: {
        name: true,
        city: {
          select: {
            id: true,
          },
        },
        address: true,
        phone: true,
        schedule: true,
      },
    });

    if (!library) throw new Error(ErrorGetSingle);

    return fromSingleLibraryResponse(library);
  } catch (err) {
    throw new Error(ErrorGetSingle);
  }
};

export const createLibrary = async ({
  name,
  city,
  address,
  phone,
  schedule,
}: LibraryState) => {
  try {
    const library = await prisma.libraries.create({
      data: {
        name,
        cityId: city,
        address,
        phone,
        schedule,
        deleted: false,
      },
    });

    if (!library) throw new Error(ErrorCreate);

    return library;
  } catch (err) {
    throw new Error(ErrorCreate);
  }
};

export const updateLibrary = async ({
  libraryId,
  name,
  city,
  address,
  phone,
  schedule,
}: LibraryState & { libraryId: string }) => {
  try {
    const library = await prisma.libraries.updateMany({
      where: {
        id: libraryId,
        deleted: false,
      },
      data: {
        name,
        cityId: city,
        address,
        phone,
        schedule,
      },
    });

    if (!library) throw new Error(ErrorUpdate);

    return library;
  } catch (err) {
    throw new Error(ErrorUpdate);
  }
};

export const deleteLibrary = async ({ libraryId }: LibraryIdProps) => {
  try {
    const library = await prisma.$transaction(async (db) => {
      const libraryBook = await db.librariesBooks.updateMany({
        where: {
          libraryId,
        },
        data: {
          deleted: true,
        },
      });

      if (!libraryBook) throw new Error(ErrorGetPaginated);

      const library = await db.libraries.update({
        where: {
          id: libraryId,
        },
        data: {
          deleted: true,
        },
      });

      if (!library) throw new Error(ErrorGetPaginated);

      return library;
    });

    if (!library) throw new Error(ErrorDelete);

    return library;
  } catch (err) {
    throw new Error(ErrorDelete);
  }
};
