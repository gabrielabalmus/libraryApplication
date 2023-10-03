import { ReaderState } from "~/types/Readers.type";

export const Readers = "Readers";
export const NewReader = "New reader";
export const CreateReaderTitle = "Create reader";
export const UpdateReaderTitle = "Update reader";

export const ErrorCreate = "There was a problem in creating the reader";
export const SuccessCreate = "Reader created successfully";

export const ErrorGetPaginated = "There was a problem in receiving readers";
export const ErrorGetSingle = "There was a problem in receiving reader";

export const ErrorDelete = "There was a problem in deleting the reader";
export const SuccessDelete = "Reader deleted successfuly";

export const ErrorUpdate = "There was a problem in updating the reader";
export const SuccessUpdate = "Reader updated successfully";

export const SearchPlaceholder = "Search for name, email or phone";

export const Details = "Details";
export const Cities = "Cities";
export const NewReaderSubject = "New reader account";

export const initialReader: ReaderState = {
  name: "",
  city: "",
  phone: "",
  address: "",
  email: "",
  birthdate: "",
};

export const readersColumns = [
  { name: "name", value: "Name" },
  { name: "email", value: "Email" },
  { name: "city", value: "City" },
  { name: "phone", value: "Phone" },
];
