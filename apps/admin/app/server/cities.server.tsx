import { ErrorMessage } from "~/const";
import { prisma } from "./prisma.server";

export const getCities = async () => {
  try {
    const cities = await prisma.cities.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    if (!cities) throw new Error(ErrorMessage);

    return cities;
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};
