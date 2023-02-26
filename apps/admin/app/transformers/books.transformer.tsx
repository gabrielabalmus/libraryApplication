import {
  BookResponse,
  BooksResponse,
  BookState,
  PaginatedBooks,
} from "~/components/Books/Books.type";

export const fromPaginatedBooksResponse = (
  books: BooksResponse[]
): PaginatedBooks[] =>
  books.map((item) => ({
    ...item,
    category: item.category.name,
  }));

export const fromSingleBookResponse = (book: BookResponse): BookState => ({
  ...book,
  pagesNumber: book.pagesNumber.toString(),
  releaseYear: book.releaseYear.toString(),
  category: book.category.id,
  publishHouse: book.publishHouse.id,
});
