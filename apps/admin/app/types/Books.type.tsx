import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { Dispatch, SetStateAction } from "react";

export interface BooksResponse {
  id: string;
  name: string;
  author: string;
  category: { name: string };
}

export interface PaginatedBooks {
  id: string;
  name: string;
  author: string;
  category: string;
}

export interface PaginatedBooksProps {
  page: number;
  search: string;
  category: string;
  library: string;
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
  onDelete: (id: string) => void;
  categories: AutocompleteOptions[];
  libraries: AutocompleteOptions[];
}

export interface BookIdProps {
  bookId: string;
}

export interface FilterState {
  search: string;
  category: string;
  library: string;
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

export enum BookLibrariesValues {
  library = "library",
  sku = "sku",
  place = "place",
}

export enum BookValue {
  name = "name",
  author = "author",
  description = "description",
  pagesNumber = "pagesNumber",
  category = "category",
  publishHouse = "publishHouse",
  releaseYear = "releaseYear",
  language = "language",
}

export interface BookLibrariesError {
  library?: string;
  sku?: string;
  place?: string;
}

export interface BookLibrariesErrorObject {
  [key: number]: BookLibrariesError;
}

export interface ErrorState {
  name?: string;
  author?: string;
  description?: string;
  image?: string;
  pagesNumber?: string;
  category?: string;
  publishHouse?: string;
  releaseYear?: string;
  language?: string;
  bookLibraries?: BookLibrariesErrorObject;
}

export interface BookLibrariesState {
  id?: string;
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

export interface BooksFormProps {
  book: BookState;
  setBook: Dispatch<SetStateAction<BookState>>;
  onSubmit: ({ callback }: BooksSubmitProps) => void;
  categories: AutocompleteOptions[];
  publishHouses: AutocompleteOptions[];
  libraries: AutocompleteOptions[];
  languages: AutocompleteOptions[];
}

export interface BooksSubmitProps {
  callback: (fieldErrors: ErrorState) => void;
}

export interface BooksLibrariesProps {
  bookLibrary: BookLibrariesState;
  onChange: (value: string, field: BookLibrariesValues) => void;
  libraries: AutocompleteOptions[];
  error: BookLibrariesError;
  onRemoveClick: () => void;
}

export interface EachBookLibrary {
  bookLibraries: BookLibrariesState[];
  bookId: string;
}

export interface BookBySkuProps {
  sku: string;
}
