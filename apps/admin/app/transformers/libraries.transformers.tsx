import {
  PaginatedLibraries,
  LibraryResponse,
  LibraryState,
} from "~/components/Libraries/Libraries.type";

export const fromPaginatedLibraries = (
  libraries: LibraryResponse[]
): PaginatedLibraries[] =>
  libraries.map((item) => ({
    id: item.id,
    name: item.name,
    city: item.city,
    phone: item.phone,
  }));

export const fromSingleLibrary = (library: LibraryResponse): LibraryState => ({
  name: library.name,
  city: library.city,
  address: library.address,
  phone: library.phone,
  schedule: library.schedule,
});
