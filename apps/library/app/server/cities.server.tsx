import { ErrorMessage } from "~/const";
import prisma from "prisma";

export const getCities = async () => {
  try {
    const cities = await prisma.cities.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return cities;
  } catch (err) {
    throw new Error(ErrorMessage);
  }
};
