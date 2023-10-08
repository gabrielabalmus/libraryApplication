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
  city: string;
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
  onCityChange: (value: AutocompleteOptions | null) => void;
  onBookSelect: (bookId: string) => void;
  categories: AutocompleteOptions[];
  libraries: AutocompleteOptions[];
  publishHouses: AutocompleteOptions[];
  languages: AutocompleteOptions[];
  cities: AutocompleteOptions[];
}

export interface BooksFilterProps {
  filter: FilterState;
  onCategoryChange: (value: AutocompleteOptions | null) => void;
  onLibraryChange: (value: AutocompleteOptions | null) => void;
  onLanguageChange: (value: AutocompleteOptions | null) => void;
  onPublishHouseChange: (value: AutocompleteOptions | null) => void;
  onCityChange: (value: AutocompleteOptions | null) => void;
  categories: AutocompleteOptions[];
  libraries: AutocompleteOptions[];
  publishHouses: AutocompleteOptions[];
  languages: AutocompleteOptions[];
  cities: AutocompleteOptions[];
}

export interface FilterState {
  search: string;
  category: string;
  library: string;
  publishHouse: string;
  language: string;
  city: string;
}

export interface LoanBooksResponse {
  loan: { id: string };
}

export interface BookLibrariesResponse {
  id: string;
  library: { name: string; id: string; city: { name: string } };
  loanBooks: LoanBooksResponse[];
  SKU: string;
  place: string;
}

export interface BookLibrariesState {
  id: string;
  library: string;
  city: string;
  libraryId: string;
  available: "YES" | "NO";
  sku: string;
  place: string;
}

export interface BooksListProps {
  books: CountPaginatedBooks;
  onSearchChange: (value: string) => void;
  onPageChange: (page: number) => void;
  onBookSelect: (bookId: string) => void;
  page: number;
  filter: FilterState;
}

export interface BookFilterState {
  library: string;
  city: string;
}

export interface SingleBookProps {
  bookId: string;
  page: number;
  city: string;
  library: string;
}

export interface SingleBookResponse {
  name: string;
  author: string;
  description: string;
  image: string;
  pagesNumber: number;
  category: { name: string };
  publishHouse: { name: string };
  releaseYear: number;
  language: { name: string };
}

export interface BookResponse {
  data: SingleBookResponse;
  count: number;
  bookLibraries: BookLibrariesResponse[];
}

export interface SingleBookState {
  name: string;
  author: string;
  description: string;
  image: string;
  pagesNumber: string;
  category: string;
  publishHouse: string;
  releaseYear: string;
  language: string;
}

export interface BookState {
  data: SingleBookState;
  count: number;
  bookLibraries: BookLibrariesState[];
}

export interface BookDetailsProps {
  book: BookState;
  onPageChange: (page: number) => void;
  onLibraryChange: (value: AutocompleteOptions | null) => void;
  onCityChange: (value: AutocompleteOptions | null) => void;
  libraries: AutocompleteOptions[];
  cities: AutocompleteOptions[];
  page: number;
  filter: BookFilterState;
}
