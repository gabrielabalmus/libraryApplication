import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { createContext } from "react";

interface ReservedBooksState {
  bookLibraryId: string;
  name: string;
  library: string;
  libraryId: string;
  author: string;
  sku: string;
}

interface initialState {
  reservedBooks: ReservedBooksState[];
  openReservedBooks: boolean;
  modalError: string;
  addReservedBook: (value: ReservedBooksState) => void;
  removeReservedBook: (id: string) => void;
  setOpenReservedBooks: Dispatch<SetStateAction<boolean>>;
  setModalError: Dispatch<SetStateAction<string>>;
}

const ReservedBooksContext = createContext<initialState>({
  reservedBooks: [],
  openReservedBooks: false,
  modalError: "",
  addReservedBook: () => {},
  removeReservedBook: () => {},
  setOpenReservedBooks: () => {},
  setModalError: () => {},
});

const ReservedBooksProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [reservedBooks, setReservedBooks] = useState<ReservedBooksState[]>([]);
  const [openReservedBooks, setOpenReservedBooks] = useState<boolean>(false);
  const [modalError, setModalError] = useState<string>("");

  const addReservedBook = (book: ReservedBooksState) => {
    const duplicated = reservedBooks.find(
      (item) => item.bookLibraryId === book.bookLibraryId
    );

    if (duplicated) {
      setModalError("You can not add duplicated books");
      return;
    }

    const differentLibrary = reservedBooks.find(
      (item) => item.libraryId !== book.libraryId
    );

    if (differentLibrary) {
      setModalError(
        `Books must belong to a single library. Please be sure you add books from ${reservedBooks[0].library}.`
      );
      return;
    }

    setReservedBooks([...reservedBooks, book]);
    setOpenReservedBooks(true);
  };

  const removeReservedBook = (bookLibraryId: string) => {
    const filterBooks = reservedBooks.filter(
      (item) => item.bookLibraryId !== bookLibraryId
    );

    setReservedBooks(filterBooks);
  };

  const value = useMemo(
    () => ({
      reservedBooks,
      openReservedBooks,
      modalError,
      addReservedBook,
      removeReservedBook,
      setOpenReservedBooks,
      setModalError,
    }),
    [reservedBooks, openReservedBooks, modalError]
  );

  return (
    <ReservedBooksContext.Provider value={value}>
      {children}
    </ReservedBooksContext.Provider>
  );
};

export default ReservedBooksProvider;
export const useReservedBooksContext = () => useContext(ReservedBooksContext);
