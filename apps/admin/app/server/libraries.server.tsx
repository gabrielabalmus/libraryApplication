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
  fromPaginatedLibraries,
  fromSingleLibrary,
} from "~/transformers/libraries.transformers";
import { prisma } from "./prisma.server";

export const getPaginatedLibraries = async ({
  page,
  search,
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
            { city: { contains: search, mode: "insensitive" } },
            { phone: { contains: search } },
          ],
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
            { city: { contains: search, mode: "insensitive" } },
            { phone: { contains: search } },
          ],
        },
      });

      if (!data) throw new Error(ErrorGetPaginated);

      return { count, data: fromPaginatedLibraries(data) };
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
    });

    if (!library) throw new Error(ErrorGetSingle);

    return fromSingleLibrary(library);
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
        city,
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
        city,
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
    const library = await prisma.libraries.update({
      where: {
        id: libraryId,
      },
      data: {
        deleted: true,
      },
    });

    if (!library) throw new Error(ErrorDelete);

    return library;
  } catch (err) {
    throw new Error(ErrorDelete);
  }
};
