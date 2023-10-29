import { ErrorMessage } from "~/const";
import prisma from "prisma";

export const getCategories = async () => {
  try {
    const categories = await prisma.categories.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return categories;
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};
