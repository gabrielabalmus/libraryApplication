import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { Dispatch, SetStateAction } from "react";

export interface CustomersResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: { name: string };
}

export interface PaginatedCustomers {
  id: string;
  name: string;
  email: string;
  city: string;
  phone: string;
}

export interface PaginatedCustomersProps {
  page: number;
  search: string;
  city: string;
}

export interface CountPaginatedCustomers {
  data: PaginatedCustomers[];
  count: number;
}

export interface CustomersOverviewProps {
  customers: CountPaginatedCustomers;
  page: number;
  filter: FilterState;
  onPageChange: (page: number) => void;
  onSearchChange: (value: string) => void;
  onCityChange: (value: AutocompleteOptions | null) => void;
  onDelete: (id: string) => void;
  cities: AutocompleteOptions[];
}

export interface CustomerIdProps {
  customerId: string;
}

export interface FilterState {
  search: string;
  city: string;
}

export interface CustomerResponse {
  name: string;
  city: { id: string };
  phone: string;
  address: string;
  email: string;
}

export interface CustomerByEmailResponse {
  id: string;
  name: string;
  city: { name: string };
  phone: string;
  email: string;
  deleted: boolean;
}

export enum CustomerValue {
  name = "name",
  city = "city",
  phone = "phone",
  address = "address",
  email = "email",
}

export interface ErrorState {
  name?: string;
  city?: string;
  phone?: string;
  address?: string;
  email?: string;
}

export interface CustomerState {
  name: string;
  city: string;
  phone: string;
  address: string;
  email: string;
}

export interface CustomersFormProps {
  customer: CustomerState;
  setCustomer: Dispatch<SetStateAction<CustomerState>>;
  onSubmit: ({ callback }: CustomersSubmitProps) => void;
  cities: AutocompleteOptions[];
}

export interface CustomersSubmitProps {
  callback: (fieldErrors: ErrorState) => void;
}

export interface SendMailProps {
  to: string;
  subject: string;
  template: string;
  data?: { [key: string]: string };
}
