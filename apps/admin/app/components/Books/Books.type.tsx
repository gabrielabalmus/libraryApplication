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
  search: string;
  onPageChange: (page: number) => void;
  onSearchChange: (value: string) => void;
  onDelete: (id: string) => void;
}

export interface BookIdProps {
  bookId: string;
}
