import {
  LibrariesResponse,
  LibraryResponse,
  LibraryState,
  PaginatedLibraries,
} from "~/types/Libraries.type";

export const fromPaginatedLibrariesResponse = (
  libraries: LibrariesResponse[]
): PaginatedLibraries[] =>
  libraries.map((item) => ({
    ...item,
    city: item.city.name,
  }));

export const fromSingleLibraryResponse = (
  library: LibraryResponse
): LibraryState => ({ ...library, city: library.city.id });
