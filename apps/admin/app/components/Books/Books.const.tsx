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

export const SearchPlaceholder = "Search for name or author";

export const Categories = "Categories";
export const Details = "Book details";
export const Units = "Book units";

export const initialBook = {
  name: "",
  author: "",
  pagesNumber: "",
  category: "",
  publishHouse: "",
  releaseYear: "",
  language: "",
  bookLibraries: [],
};

export const initialBookLibrary = {
  library: "",
  sku: "",
  place: "",
};

export const booksColumns = [
  { name: "name", value: "Name" },
  { name: "category", value: "Category" },
  { name: "author", value: "Author" },
];
