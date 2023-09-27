import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";

export interface PaginatedBooks {
  id: string;
  name: string;
  author: string;
  image: string;
}

export interface PaginatedBooksProps {
  page: number;
  search: string;
  category: string;
  library: string;
  publishHouse: string;
  language: string;
}

export interface CountPaginatedBooks {
  data: PaginatedBooks[];
  count: number;
}

export interface BooksOverviewProps {
  books: CountPaginatedBooks;
  page: number;
  filter: FilterState;
  onPageChange: (page: number) => void;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: AutocompleteOptions | null) => void;
  onLibraryChange: (value: AutocompleteOptions | null) => void;
  onLanguageChange: (value: AutocompleteOptions | null) => void;
  onPublishHouseChange: (value: AutocompleteOptions | null) => void;
  categories: AutocompleteOptions[];
  libraries: AutocompleteOptions[];
  publishHouses: AutocompleteOptions[];
  languages: AutocompleteOptions[];
}

export interface BooksFilterProps {
  filter: FilterState;
  onCategoryChange: (value: AutocompleteOptions | null) => void;
  onLibraryChange: (value: AutocompleteOptions | null) => void;
  onLanguageChange: (value: AutocompleteOptions | null) => void;
  onPublishHouseChange: (value: AutocompleteOptions | null) => void;
  categories: AutocompleteOptions[];
  libraries: AutocompleteOptions[];
  publishHouses: AutocompleteOptions[];
  languages: AutocompleteOptions[];
}

export interface FilterState {
  search: string;
  category: string;
  library: string;
  publishHouse: string;
  language: string;
}

export interface BookLibrariesResponse {
  id: string;
  libraryId: string;
  SKU: string;
  place: string;
}

export interface BookResponse {
  name: string;
  author: string;
  description: string;
  image: string;
  pagesNumber: number;
  category: { id: string };
  publishHouse: { id: string };
  releaseYear: number;
  language: { id: string };
  bookLibraries: BookLibrariesResponse[];
}

export interface BookLibrariesState {
  id: string;
  library: string;
  sku: string;
  place: string;
}

export interface BookState {
  name: string;
  author: string;
  description: string;
  image: string;
  pagesNumber: string;
  category: string;
  publishHouse: string;
  releaseYear: string;
  language: string;
  bookLibraries: BookLibrariesState[];
}

export interface BooksListProps {
  books: CountPaginatedBooks;
  onSearchChange: (value: string) => void;
  onPageChange: (page: number) => void;
  page: number;
  filter: FilterState;
}
