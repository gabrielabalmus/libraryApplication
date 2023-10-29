import { PasswordState, ReaderState } from "~/types/Readers.type";
import { TableColumns } from "@/components/Table/Table.type";

export const ErrorCreate = "There was a problem in creating the reader";
export const SuccessCreate = "Reader created successfully";

export const ErrorUpdate = "There was a problem in updating the reader";
export const SuccessUpdate = "Reader updated successfully";

export const ErrorChangePassword =
  "There was a problem in changing the password";
export const SuccessChangePassword = "Password changed successfully";
export const ErrorCancelLoan = "There was a problem in changing loan status";
export const SuccessCancelLoan = "Status changed successfuly";

export const ErrorGetSingle = "There was a problem in receiving reader";
export const ErrorGetPaginated = "There was a problem in receiving loans";

export const NewReaderSubject = "New reader account";

export const initialReader: ReaderState = {
  name: "",
  city: "",
  phone: "",
  address: "",
  email: "",
  password: "",
  birthdate: "",
};

export const initialPassword: PasswordState = {
  oldPassword: "",
  newPassword: "",
};

export const booksColumns: TableColumns[] = [
  { name: "name", value: "Name" },
  { name: "author", value: "Author" },
  { name: "sku", value: "Sku" },
  { name: "place", value: "Place" },
  { name: "category", value: "Category" },
];
