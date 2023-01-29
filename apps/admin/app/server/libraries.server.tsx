import { errorCreate } from "~/components/Libraries/Libraries.const";
import { LibraryState } from "~/components/Libraries/Libraries.type";
import { db } from "./db.server";

export const createLibrary = async ({
  name,
  city,
  address,
  phone,
  schedule,
}: LibraryState) => {
  try {
    const library = await db.libraries.create({
      data: {
        name,
        city,
        address,
        phone: parseInt(phone),
        schedule,
      },
    });

    if (!library) throw new Error(errorCreate);

    return { id: library.id };
  } catch (err) {
    throw new Error(errorCreate);
  }
};
