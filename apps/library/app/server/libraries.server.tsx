import prisma from "prisma";
import { ErrorGetLibraries } from "~/components/Contact/Contact.const";
import { fromLibrariesResponse } from "~/transformers/libraries.transformer";

export const getLibraries = async () => {
  try {
    const libraries = await prisma.libraries.findMany({
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

    if (!libraries) throw new Error(ErrorGetLibraries);

    return fromLibrariesResponse(libraries);
  } catch (err) {
    throw new Error(ErrorGetLibraries);
  }
};
