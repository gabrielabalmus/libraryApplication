import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { Status as PrismaStatus } from "@prisma/client";
import { LoanState } from "~/types/Loans.type";

export const Loans = "Loans";
export const NewLoan = "New loan";
export const CreateLoanTitle = "Create loan";
export const UpdateLoanTitle = "Update loan";

export const Reader = "Reader";
export const Books = "Books";
export const Penalty = "Penalty";
export const Details = "Details";
export const DaysNumber = "Days number";
export const Amount = "Amount";
export const Paid = "Paid";
export const ReservedAt = "Reserved at";
export const BorrowedAt = "Borrowed at";
export const ReturnedAt = "Returned at";

export const Add = "Add";
export const Libraries = "Libraries";
export const Status = "Status";

export const ReaderPlaceholder = "Reader email";
export const ErrorCreate = "There was a problem in creating the loan";
export const SuccessCreate = "Loan created successfully";

export const ErrorGetPaginated = "There was a problem in receiving loans";
export const ErrorGetSingle = "There was a problem in receiving loan";

export const ErrorDelete = "There was a problem in deleting the loan";
export const SuccessDelete = "Loan deleted successfuly";

export const ErrorUpdate = "There was a problem in updating the loan";
export const SuccessUpdate = "Loan updated successfully";

export const SearchPlaceholder = "Search for number, email or book sku";
export const MandatoryReaderEmail = "You have to insert reader email";
export const DeletedReader = "This reader no longer exists";
export const NoReader = "We didn't find any reader with this email";
export const DuplicatedReader = "You already have this reader in the loan";

export const BookPlaceholder = "Book sku";
export const MandatoryBookSku = "You have to insert book sku";
export const DuplicatedBook = "You already have this book in the loan";
export const DeletedBook = "This book no longer exists";
export const NoBook = "We didn't find any available book with this sku";
export const SameLibrary = "Books must belong to the same library";

export const BooksDescription = "Books must belong to a single library";
export const PenaltyDescription =
  "Penalties are calculated according to the number of delayed days multiplied by 0.1 EUR";

export const readerColumns = [
  { name: "name", value: "Name" },
  { name: "email", value: "Email" },
  { name: "phone", value: "Phone" },
  { name: "city", value: "City" },
];

export const bookColumns = [
  { name: "name", value: "Name" },
  { name: "sku", value: "Sku" },
  { name: "library", value: "Library" },
  { name: "city", value: "City" },
  { name: "place", value: "Place" },
];

export const initialLoan: LoanState = {
  status: PrismaStatus.BORROWED,
  reader: null,
  books: [],
};

export const loansColumns = [
  { name: "number", value: "Number" },
  { name: "email", value: "Email" },
  { name: "status", value: "Status" },
  { name: "createdAt", value: "Created" },
];

export const LoanStatuses: AutocompleteOptions[] = Object.keys(
  PrismaStatus
).map((item) => ({ id: item, name: item }));
