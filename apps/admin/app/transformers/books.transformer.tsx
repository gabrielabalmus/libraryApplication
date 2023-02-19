import { BooksResponse, PaginatedBooks } from "~/components/Books/Books.type";

export const fromPaginatedBooksResponse = (
  books: BooksResponse[]
): PaginatedBooks[] =>
  books.map((item) => ({
    ...item,
    category: item.category.name,
  }));
