import { ErrorMessage } from "~/const";
import { prisma } from "./prisma.server";

export const getCategories = async () => {
  try {
    const categories = await prisma.categories.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    if (!categories) throw new Error(ErrorMessage);

    return categories;
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};
