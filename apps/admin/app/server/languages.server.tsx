import { ErrorMessage } from "~/const";
import prisma from "prisma";

export const getLanguages = async () => {
  try {
    const languages = await prisma.languages.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return languages;
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};
