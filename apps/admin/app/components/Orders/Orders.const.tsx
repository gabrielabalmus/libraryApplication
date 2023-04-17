import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { Status as PrismaStatus } from "@prisma/client";
import { OrderState } from "~/types/Orders.type";

export const Orders = "Orders";
export const NewOrder = "New order";
export const CreateOrderTitle = "Create order";
export const UpdateOrderTitle = "Update order";

export const Customer = "Customer";
export const Books = "Books";
export const Add = "Add";
export const Cities = "Cities";
export const Status = "Status";

export const CustomerPlaceholder = "Customer email";
export const ErrorCreate = "There was a problem in creating the order";
export const SuccessCreate = "Order created successfully";

export const ErrorGetPaginated = "There was a problem in receiving orders";
export const ErrorGetSingle = "There was a problem in receiving order";

export const ErrorDelete = "There was a problem in deleting the order";
export const SuccessDelete = "Order deleted successfuly";

export const ErrorUpdate = "There was a problem in updating the order";
export const SuccessUpdate = "Order updated successfully";

export const SearchPlaceholder = "Search for number, email or book sku";
export const MandatoryCustomerEmail = "You have to insert a customer email";
export const NoCustomer = "This customer no longer exists";

export const customerColumns = [
  { name: "name", value: "Name" },
  { name: "email", value: "Email" },
  { name: "phone", value: "Phone" },
  { name: "city", value: "City" },
];

export const initialOrder: OrderState = {
  status: PrismaStatus.PENDING,
  customer: null,
  books: [],
};

export const ordersColumns = [
  { name: "number", value: "Number" },
  { name: "email", value: "Email" },
  { name: "status", value: "Status" },
  { name: "createdAt", value: "Created" },
];

export const OrderStatuses: AutocompleteOptions[] = Object.keys(
  PrismaStatus
).map((item) => ({ id: item, name: item }));
