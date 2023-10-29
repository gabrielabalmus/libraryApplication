import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { createContext } from "react";

interface BooksToReserveState {
  bookLibraryId: string;
  name: string;
  city: string;
  cityId: string;
  library: string;
  libraryId: string;
  place: string;
  author: string;
  category: string;
  sku: string;
}

interface initialState {
  booksToReserve: BooksToReserveState[];
  openBooksToReserve: boolean;
  modalContent: string;
  addBookToReserve: (value: BooksToReserveState) => void;
  removeBookToReserve: (id: string) => void;
  setOpenBooksToReserve: Dispatch<SetStateAction<boolean>>;
  setModalContent: Dispatch<SetStateAction<string>>;
  resetBooksToReserve: () => void;
}

const BooksToReserveContext = createContext<initialState>({
  booksToReserve: [],
  openBooksToReserve: false,
  modalContent: "",
  addBookToReserve: () => {},
  removeBookToReserve: () => {},
  setOpenBooksToReserve: () => {},
  setModalContent: () => {},
  resetBooksToReserve: () => {},
});

const BooksToReserveProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [booksToReserve, setBooksToReserve] = useState<BooksToReserveState[]>(
    []
  );
  const [openBooksToReserve, setOpenBooksToReserve] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");

  const addBookToReserve = (book: BooksToReserveState) => {
    const duplicated = booksToReserve.find(
      (item) => item.bookLibraryId === book.bookLibraryId
    );

    if (duplicated) {
      setModalContent("You can not add duplicated books");
      return;
    }

    const differentLibrary = booksToReserve.find(
      (item) => item.libraryId !== book.libraryId
    );

    if (differentLibrary) {
      setModalContent(
        `Books must belong to a single library. Please be sure you add books from ${booksToReserve[0].library}.`
      );
      return;
    }

    setBooksToReserve([...booksToReserve, book]);
    setOpenBooksToReserve(true);
  };

  const removeBookToReserve = (bookLibraryId: string) => {
    const filterBooks = booksToReserve.filter(
      (item) => item.bookLibraryId !== bookLibraryId
    );

    setBooksToReserve(filterBooks);
  };

  const resetBooksToReserve = () => {
    setBooksToReserve([]);
  };

  const value = useMemo(
    () => ({
      booksToReserve,
      openBooksToReserve,
      modalContent,
      addBookToReserve,
      removeBookToReserve,
      setOpenBooksToReserve,
      setModalContent,
      resetBooksToReserve,
    }),
    [booksToReserve, openBooksToReserve, modalContent]
  );

  return (
    <BooksToReserveContext.Provider value={value}>
      {children}
    </BooksToReserveContext.Provider>
  );
};

export default BooksToReserveProvider;
export const useBooksToReserveContext = () => useContext(BooksToReserveContext);
