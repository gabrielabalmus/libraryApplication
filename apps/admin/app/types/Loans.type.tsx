import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { Dispatch, SetStateAction } from "react";
import { Status, Penalty } from "@prisma/client";

export interface LoansResponse {
  id: string;
  number: string;
  reader: { email: string };
  status: Status;
  createdAt: Date;
}

export interface BookResponse {
  name: string;
  author: string;
  category: CategoryResponse;
}

export interface CategoryResponse {
  name: string;
}

export interface BookByLibraryResponse {
  id: string;
  book: BookResponse;
  SKU: string;
  libraryId: string;
  place: string;
  deleted: boolean;
}

export interface BookLibraryResponse {
  bookLibrary: BookByLibraryResponse;
}

export interface ReaderResponse {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: { name: string };
  deleted: boolean;
}

export interface LibraryInfoState {
  name: string;
  deleted: boolean;
}

export interface LoanResponse {
  number: string;
  reader: ReaderResponse;
  cityId: string;
  libraryId: string;
  library: LibraryInfoState;
  books: BookLibraryResponse[];
  status: Status;
  penalty: Penalty | null;
  borrowedAt: Date | null;
  returnedAt: Date | null;
  createdAt: Date;
}

export interface ReaderState {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  deleted: boolean;
}

export interface BookLibraryState {
  id: string;
  name: string;
  sku: string;
  author: string;
  category: string;
  library: string;
  place: string;
  deleted: boolean;
}

export interface LoanState {
  number?: string;
  reader: ReaderState | null;
  city: string;
  library: string;
  libraryInfo?: LibraryInfoState;
  books: BookLibraryState[];
  status: Status;
  penalty?: Penalty;
  borrowedAt?: string;
  returnedAt?: string;
  createdAt?: string;
}

export interface ReaderByEmailProps {
  email: string;
}

export interface ErrorState {
  reader?: string;
  books?: string;
  city?: string;
  library?: string;
  status?: string;
}

export enum LoanValue {
  reader = "reader",
  books = "books",
  status = "status",
}

export interface LoansFormProps {
  loan: LoanState;
  setLoan: Dispatch<SetStateAction<LoanState>>;
  onSubmit: ({ callback }: LoansSubmitProps) => void;
}

export interface LoansReaderProps {
  loan: LoanState;
  setLoan: Dispatch<SetStateAction<LoanState>>;
  error: ErrorState;
  setError: Dispatch<SetStateAction<ErrorState>>;
  disabled?: boolean;
}

export interface LoansDetailsProps {
  loan: LoanState;
}

export interface LoansPenaltyProps {
  penalty: Penalty;
}

export interface LoansSubmitProps {
  callback: (fieldErrors: ErrorState) => void;
}

export interface PaginatedLoansProps {
  page: number;
  search: string;
  library: string;
  status: string;
}

export interface PaginatedLoans {
  id: string;
  number: string;
  email: string;
  status: Status;
  createdAt: string;
}

export interface CountPaginatedLoans {
  data: PaginatedLoans[];
  count: number;
}

export interface LoansOverviewProps {
  loans: CountPaginatedLoans;
  page: number;
  filter: FilterState;
  onPageChange: (page: number) => void;
  onSearchChange: (value: string) => void;
  onLibraryChange: (value: AutocompleteOptions | null) => void;
  onStatusChange: (value: AutocompleteOptions | null) => void;
  onDelete: (id: string) => void;
  libraries: AutocompleteOptions[];
}

export interface LoanIdProps {
  loanId: string;
}

export interface FilterState {
  search: string;
  library: string;
  status: string;
}

export interface EachLoanBook {
  loanBooks: string[];
  loanId: string;
  libraryId: string;
}

export interface LoansBooksProps {
  loan: LoanState;
  setLoan: Dispatch<SetStateAction<LoanState>>;
  error: ErrorState;
  setError: Dispatch<SetStateAction<ErrorState>>;
  disabled?: boolean;
}

export interface FilteredStatuses {
  value: Status;
  name: Status;
}

export interface LoansRaportProps {
  year: string;
  library: string;
  status: string;
}
