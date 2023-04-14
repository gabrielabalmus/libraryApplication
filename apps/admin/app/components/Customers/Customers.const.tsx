import { CustomerState } from "~/types/Customers.type";

export const Customers = "Customers";
export const NewCustomer = "New customer";
export const CreateCustomerTitle = "Create customer";
export const UpdateCustomerTitle = "Update customer";

export const ErrorCreate = "There was a problem in creating the customer";
export const SuccessCreate = "Customer created successfully";

export const ErrorGetPaginated = "There was a problem in receiving customers";
export const ErrorGetSingle = "There was a problem in receiving customer";

export const ErrorDelete = "There was a problem in deleting the customer";
export const SuccessDelete = "Customer deleted successfuly";

export const ErrorUpdate = "There was a problem in updating the customer";
export const SuccessUpdate = "Customer updated successfully";

export const ErrorImageUpload = "Error on upload. Try again!";

export const SearchPlaceholder = "Search for name, email or phone";

export const Details = "Details";
export const Cities = "Cities";
export const NewCustomerSubject = "New customer account";

export const initialCustomer: CustomerState = {
  name: "",
  city: "",
  phone: "",
  address: "",
  email: "",
};

export const customersColumns = [
  { name: "name", value: "Name" },
  { name: "email", value: "Email" },
  { name: "city", value: "City" },
  { name: "phone", value: "Phone" },
];
