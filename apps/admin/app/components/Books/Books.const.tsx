import { BookLibrariesState, BookState } from "~/types/Books.type";

export const Books = "Books";
export const NewBook = "New book";
export const CreateBookTitle = "Create book";
export const UpdateBookTitle = "Update book";

export const ErrorCreate = "There was a problem in creating the book";
export const SuccessCreate = "Book created successfully";

export const ErrorGetPaginated = "There was a problem in receiving books";
export const ErrorGetSingle = "There was a problem in receiving book";

export const ErrorDelete = "There was a problem in deleting the book";
export const SuccessDelete = "Book deleted successfuly";

export const ErrorUpdate = "There was a problem in updating the book";
export const SuccessUpdate = "Book updated successfully";

export const ErrorImageUpload = "Error on upload. Try again!";

export const SearchPlaceholder = "Search for name, author or sku";

export const Categories = "Categories";
export const Details = "Book details";
export const Libraries = "Libraries";
export const Units = "Book units";

export const initialBook: BookState = {
  name: "",
  author: "",
  description: "",
  image: "",
  pagesNumber: "",
  category: "",
  publishHouse: "",
  releaseYear: "",
  language: "",
  bookLibraries: [],
};

export const initialBookLibrary: BookLibrariesState = {
  library: "",
  sku: "",
  place: "",
};

export const booksColumns = [
  { name: "name", value: "Name" },
  { name: "category", value: "Category" },
  { name: "author", value: "Author" },
];
