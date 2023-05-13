import {
  LoansResponse,
  LoanResponse,
  LoanState,
  PaginatedLoans,
} from "~/types/Loans.type";
import { formatLoangDate } from "@/utils/common";

export const fromPaginatedLoansResponse = (
  loans: LoansResponse[]
): PaginatedLoans[] =>
  loans.map((item) => ({
    ...item,
    email: item.reader.email,
    createdAt: formatLoangDate(item.createdAt),
  }));

export const fromSingleLoanResponse = (loan: LoanResponse): LoanState => {
  const reader = {
    ...loan.reader,
    city: loan.reader.city.name,
  };

  const books = loan.books.map((loandBook) => {
    const { id, book, library, SKU, place, deleted } = loandBook.bookLibrary;

    return {
      id,
      name: book.name,
      library: library.name,
      city: library.city.name,
      sku: SKU,
      place,
      deleted,
    };
  });

  const transformedLoan: LoanState = {
    number: loan.number,
    status: loan.status,
    reader,
    books,
    createdAt: formatLoangDate(loan.createdAt),
  };

  if (loan.penalty) transformedLoan.penalty = loan.penalty;

  if (loan.borrowedAt)
    transformedLoan.borrowedAt = formatLoangDate(loan.borrowedAt);

  if (loan.returnedAt)
    transformedLoan.returnedAt = formatLoangDate(loan.returnedAt);

  return transformedLoan;
};
