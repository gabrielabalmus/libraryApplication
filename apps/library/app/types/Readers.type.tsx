import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { Dispatch, SetStateAction } from "react";
import { Status, Penalty } from "@prisma/client";

export interface ReaderIdProps {
  readerId: string;
}

export interface ReaderResponse {
  name: string;
  city: { id: string };
  phone: string;
  address: string;
  email: string;
  birthdate: string;
}

export enum PasswordValue {
  oldPassword = "oldPassword",
  newPassword = "newPassword",
}

export enum ReaderValue {
  name = "name",
  city = "city",
  phone = "phone",
  address = "address",
  email = "email",
  birthdate = "birthdate",
  password = "password",
}

export interface ErrorState {
  name?: string;
  city?: string;
  phone?: string;
  address?: string;
  email?: string;
  birthdate?: string;
  password?: string;
}

export interface PasswordState {
  oldPassword: string;
  newPassword: string;
}

export interface PasswordErrorState {
  oldPassword?: string;
  newPassword?: string;
}

export interface ReaderState {
  name: string;
  city: string;
  phone: string;
  address: string;
  email: string;
  birthdate: string;
  password?: string;
}

export interface ReadersFormProps {
  reader: ReaderState;
  setReader: Dispatch<SetStateAction<ReaderState>>;
  onSubmit: ({ callback }: ReadersSubmitProps) => void;
  cities: AutocompleteOptions[];
  messageData?: AlertDataState;
  readerId?: string;
}

export interface PasswordFormProps {
  data: PasswordState;
  setData: Dispatch<SetStateAction<PasswordState>>;
  onSubmit: ({ callback }: PasswordSubmitProps) => void;
  messageData?: AlertDataState;
}

export interface ReadersSubmitProps {
  callback: (fieldErrors: ErrorState) => void;
}

export interface PasswordSubmitProps {
  callback: (fieldErrors: PasswordErrorState) => void;
}

export interface SendEmailProps {
  to: string;
  subject: string;
  template: string;
}

export interface AlertDataState {
  message: string;
  success: boolean;
}

export interface PaginatedLoansProps {
  readerId: string;
  page: number;
}

export interface BookLibraryResponse {
  SKU: string;
  book: { name: string; author: string; category: { name: string } };
}

export interface LoansResponse {
  id: string;
  number: string;
  books: { bookLibrary: BookLibraryResponse }[];
  status: Status;
  library: { name: string };
  createdAt: Date;
  borrowedAt: Date | null;
  returnedAt: Date | null;
  penalty: Penalty | null;
}

export interface LoanBooks {
  sku: string;
  name: string;
  author: string;
  category: string;
}

export interface PaginatedLoans {
  id: string;
  number: string;
  books: LoanBooks[];
  status: Status;
  library: string;
  createdAt: string;
  borrowedAt?: string;
  returnedAt?: string;
  penalty?: Penalty;
}

export interface LoansProps {
  loans: { count: number; data: PaginatedLoans[] };
  page: number;
  onPageChange: (page: number) => void;
  onCancelLoan: (loanId: string) => void;
}

export interface CancelLoanProps {
  readerId: string;
  loanId: string;
}
