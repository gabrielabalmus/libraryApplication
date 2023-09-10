import { Libraries, LibrariesResponse } from "~/types/contact.type";

export const fromLibrariesResponse = (
  libraries: LibrariesResponse[]
): Libraries[] =>
  libraries.map((item) => ({
    ...item,
    city: item.city.name,
  }));
