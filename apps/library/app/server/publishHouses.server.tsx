import { ErrorMessage } from "~/const";
import prisma from "prisma";

export const getPublishHouses = async () => {
  try {
    const publishHouses = await prisma.publishHouses.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return publishHouses;
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};
