import {
  BookLibrariesResponse,
  BookLibrariesState,
  BookResponse,
  BooksResponse,
  BookState,
  PaginatedBooks,
} from "~/types/Books.type";

export const fromPaginatedBooksResponse = (
  books: BooksResponse[]
): PaginatedBooks[] =>
  books.map((item) => ({
    ...item,
    category: item.category.name,
  }));

export const fromBookLibraries = (
  bookLibraries: BookLibrariesResponse[]
): BookLibrariesState[] =>
  bookLibraries.map((item) => ({
    id: item.id,
    library: item.libraryId,
    sku: item.SKU,
    place: item.place,
  }));

export const fromSingleBookResponse = (book: BookResponse): BookState => ({
  ...book,
  pagesNumber: book.pagesNumber.toString(),
  releaseYear: book.releaseYear.toString(),
  category: book.category.id,
  publishHouse: book.publishHouse.id,
  bookLibraries: fromBookLibraries(book.bookLibraries),
});
