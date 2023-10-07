import {
  ReaderResponse,
  ReaderState,
  LoansResponse,
  PaginatedLoans,
} from "~/types/Readers.type";
import { formatLoangDate } from "@/utils/common";
import { round } from "lodash";

export const fromSingleReaderResponse = (
  reader: ReaderResponse
): ReaderState => ({ ...reader, city: reader.city.id });

export const fromPaginatedLoansResponse = (
  loans: LoansResponse[]
): PaginatedLoans[] =>
  loans.map((loan) => {
    const books = loan.books.map((book) => ({
      sku: book.bookLibrary.SKU,
      name: book.bookLibrary.book.name,
      author: book.bookLibrary.book.author,
      category: book.bookLibrary.book.category.name,
    }));

    const transformedLoan: PaginatedLoans = {
      id: loan.id,
      number: loan.number,
      status: loan.status,
      books,
      library: loan.library.name,
      createdAt: formatLoangDate(loan.createdAt),
    };

    if (loan.penalty) {
      const amount = round(loan.penalty.amount, 2);

      transformedLoan.penalty = { ...loan.penalty, amount };
    }

    if (loan.borrowedAt)
      transformedLoan.borrowedAt = formatLoangDate(loan.borrowedAt);

    if (loan.returnedAt)
      transformedLoan.returnedAt = formatLoangDate(loan.returnedAt);

    return transformedLoan;
  });
