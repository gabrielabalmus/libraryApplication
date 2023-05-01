import { ErrorMessage } from "~/const";
import { prisma } from "./prisma.server";

export const getLanguages = async () => {
  try {
    const languages = await prisma.languages.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    if (!languages) throw new Error(ErrorMessage);

    return languages;
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};
