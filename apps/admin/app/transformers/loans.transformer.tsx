import {
  LoansResponse,
  LoanResponse,
  LoanState,
  PaginatedLoans,
} from "~/types/Loans.type";
import { formatLoangDate } from "@/utils/common";
import { round } from "lodash";

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
    const { id, book, SKU, libraryId, place, deleted } = loandBook.bookLibrary;

    return {
      id,
      name: book.name,
      author: book.author,
      category: book.category.name,
      sku: SKU,
      library: libraryId,
      place,
      deleted,
    };
  });

  const transformedLoan: LoanState = {
    number: loan.number,
    status: loan.status,
    city: loan.cityId,
    library: loan.libraryId,
    libraryInfo: loan.library,
    reader,
    books,
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
};
