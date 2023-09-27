import { Libraries, LibrariesResponse } from "~/types/Contact.type";

export const fromLibrariesResponse = (
  libraries: LibrariesResponse[]
): Libraries[] =>
  libraries.map((item) => ({
    ...item,
    city: item.city.name,
  }));
