import prisma from "prisma";
import { ErrorGetLibraries } from "~/components/Contact/Contact.const";
import { ErrorMessage } from "~/const";
import { fromLibrariesResponse } from "~/transformers/libraries.transformer";

export const getAllLibraries = async ({ page }: { page: number }) => {
  try {
    const skip = (page && page > 1 && (page - 1) * 6) || undefined;

    const libraries = await prisma.$transaction(async (db) => {
      const count = await db.libraries.count({
        where: {
          deleted: false,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const data = await prisma.libraries.findMany({
        skip,
        take: 6,
        where: {
          deleted: false,
        },
        select: {
          name: true,
          city: {
            select: {
              name: true,
            },
          },
          address: true,
          phone: true,
          schedule: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return { count, data: fromLibrariesResponse(data) };
    });

    return libraries;
  } catch (err) {
    throw new Error(ErrorGetLibraries);
  }
};

export const getLibraries = async (city: string) => {
  try {
    const libraries = await prisma.libraries.findMany({
      select: {
        id: true,
        name: true,
      },
      where: {
        city:
          (city && {
            name: city,
          }) ||
          undefined,
        deleted: false,
      },
    });

    return libraries;
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};
