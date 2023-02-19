export const Books = "Books";
export const NewBook = "New book";
export const CreateBookTitle = "Create book";

export const ErrorCreate = "There was a problem in creating the book";
export const SuccessCreate = "Book created successfully";

export const ErrorGetPaginated = "There was a problem in receiving books";
export const ErrorGetSingle = "There was a problem in receiving book";

export const ErrorDelete = "There was a problem in deleting the book";
export const SuccessDelete = "Book deleted successfuly";

export const ErrorUpdate = "There was a problem in updating the book";
export const SuccessUpdate = "Book updated successfully";

export const SearchPlaceholder = "Search for name or author";

export const initialBooks = {
  count: 0,
  data: [],
};

export const booksColumns = [
  { name: "name", value: "Name" },
  { name: "category", value: "Category" },
  { name: "author", value: "Author" },
];
