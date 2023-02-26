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
}

export interface PaginatedBooks {
  id: string;
  name: string;
  category: string;
  author: string;
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
  onDelete: (id: string) => void;
  categories: AutocompleteOptions[];
}

export interface BookIdProps {
  bookId: string;
}

export interface FilterState {
  search: string;
  category: string;
}

export interface BookResponse {
  name: string;
  author: string;
  pagesNumber: number;
  category: { id: string };
  publishHouse: { id: string };
  releaseYear: number;
  language: string;
}

export enum BookValue {
  name = "name",
  author = "author",
  pagesNumber = "pagesNumber",
  category = "category",
  publishHouse = "publishHouse",
  releaseYear = "releaseYear",
  language = "language",
}

export interface ErrorState {
  name?: string;
  author?: string;
  pagesNumber?: string;
  category?: string;
  publishHouse?: string;
  releaseYear?: string;
  language?: string;
}

export interface BookState {
  name: string;
  author: string;
  pagesNumber: string;
  category: string;
  publishHouse: string;
  releaseYear: string;
  language: string;
}

export interface BooksFormProps {
  book: BookState;
  setBook: Dispatch<SetStateAction<BookState>>;
  onSubmit: ({ callback }: BooksSubmitProps) => void;
  categories: AutocompleteOptions[];
  publishHouses: AutocompleteOptions[];
}

export interface BooksSubmitProps {
  callback: (fieldErrors: ErrorState) => void;
}
