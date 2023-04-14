import {
  CustomersResponse,
  CustomerResponse,
  CustomerState,
  PaginatedCustomers,
  CustomerByEmailResponse,
} from "~/types/Customers.type";
import {
  CustomerState as CustomerByEmailState
} from "~/types/Orders.type";

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

export const fromCustomerByEmail = (
  customer: CustomerByEmailResponse
): CustomerByEmailState => ({ ...customer, city: customer.city.name });
