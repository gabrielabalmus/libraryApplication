import { PaginatedLibraries, LibrariesResponse } from "~/types/Contact.type";

export const fromLibrariesResponse = (
  libraries: LibrariesResponse[]
): PaginatedLibraries[] =>
  libraries.map((item) => ({
    ...item,
    city: item.city.name,
  }));
