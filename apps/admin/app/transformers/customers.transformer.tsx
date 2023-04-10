import {
  CustomersResponse,
  CustomerResponse,
  CustomerState,
  PaginatedCustomers,
} from "~/types/Customers.type";

export const fromPaginatedCustomersResponse = (
  customers: CustomersResponse[]
): PaginatedCustomers[] =>
  customers.map((item) => ({
    ...item,
    city: item.city.name,
  }));

export const fromSingleCustomerResponse = (
  customer: CustomerResponse
): CustomerState => ({ ...customer, city: customer.city.id });
