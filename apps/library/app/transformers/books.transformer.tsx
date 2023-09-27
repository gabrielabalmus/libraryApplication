import { getImage } from "~/server/media.server";
import { PaginatedBooks } from "~/types/Books.type";

export const fromPaginatedBooksResponse = (
  books: PaginatedBooks[]
): Promise<PaginatedBooks[]> =>
  Promise.all(
    books.map(async (book) => {
      const image = await getImage(book.image);
      return {
        ...book,
        image,
      };
    })
  );
