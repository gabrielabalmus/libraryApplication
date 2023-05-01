import {
  BookLibrariesResponse,
  BookLibrariesState,
  BookResponse,
  BooksResponse,
  BookState,
  PaginatedBooks,
} from "~/types/Books.type";
import {
  BookLibraryState as BookBySkuState,
  BookByLibraryResponse as BookBySkuResponse,
} from "~/types/Loans.type";

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
  language: book.language.id,
  bookLibraries: fromBookLibraries(book.bookLibraries),
});

export const fromBookBySku = (bookBySku: BookBySkuResponse): BookBySkuState => {
  const { id, book, library, SKU, place, deleted } = bookBySku;

  return {
    id,
    name: book.name,
    library: library.name,
    city: library.city.name,
    sku: SKU,
    place,
    deleted,
  };
};
