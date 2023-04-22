import {
  LoansResponse,
  LoanResponse,
  LoanState,
  PaginatedLoans,
} from "~/types/Loans.type";
import moment from "moment";

export const fromPaginatedLoansResponse = (
  loans: LoansResponse[]
): PaginatedLoans[] =>
  loans.map((item) => ({
    ...item,
    email: item.reader.email,
    createdAt: moment(item.createdAt).format("DD MMM YYYY, HH:mm"),
  }));

export const fromSingleLoanResponse = (loan: LoanResponse): LoanState => {
  const reader = {
    ...loan.reader,
    city: loan.reader.city.name,
  };

  const books = loan.books.map((book) => ({
    ...book.bookLibrary,
    name: book.bookLibrary.book.name,
    sku: book.bookLibrary.SKU,
    library: book.bookLibrary.library.name,
    city: book.bookLibrary.library.city.name,
  }));

  const transformedLoan: LoanState = {
    number: loan.number,
    status: loan.status,
    reader,
    books,
    createdAt: moment(loan.createdAt).format("DD MMM YYYY, HH:mm"),
  };

  if (loan.penalty) transformedLoan.penalty = loan.penalty;

  if (loan.borrowedAt)
    transformedLoan.borrowedAt = moment(loan.borrowedAt).format(
      "DD MMM YYYY, HH:mm"
    );

  if (loan.returnedAt)
    transformedLoan.returnedAt = moment(loan.returnedAt).format(
      "DD MMM YYYY, HH:mm"
    );

  return transformedLoan;
};
