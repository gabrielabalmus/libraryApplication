import { ErrorMessage } from "~/const";
import { prisma } from "./prisma.server";

export const getPublishHouses = async () => {
  try {
    const publishHouses = await prisma.publishHouses.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    if (!publishHouses) throw new Error(ErrorMessage);

    return publishHouses;
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};
