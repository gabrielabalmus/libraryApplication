import { getImage } from "~/server/media.server";
import {
  BookLibrariesResponse,
  BookLibrariesState,
  BookResponse,
  BookState,
  PaginatedBooks,
} from "~/types/Books.type";

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

export const fromSingleBookResponse = async (
  book: BookResponse
): Promise<BookState> => {
  const image = await getImage(book.data.image);

  return {
    data: {
      ...book.data,
      pagesNumber: book.data.pagesNumber.toString(),
      releaseYear: book.data.releaseYear.toString(),
      category: book.data.category.name,
      image,
      publishHouse: book.data.publishHouse.name,
      language: book.data.language.name,
    },
    count: book.count,
    bookLibraries: fromBookLibraries(book.bookLibraries),
  };
};

export const fromBookLibraries = (
  bookLibraries: BookLibrariesResponse[]
): BookLibrariesState[] =>
  bookLibraries.map((item) => ({
    id: item.id,
    library: item.library.name,
    libraryId: item.library.id,
    sku: item.SKU,
    place: item.place,
  }));
