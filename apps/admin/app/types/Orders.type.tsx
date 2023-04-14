import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { Dispatch, SetStateAction } from "react";
import { Status, Penalty } from "@prisma/client";

export interface OrdersResponse {
  id: string;
  number: string;
  customer: { email: string };
  status: Status;
  createdAt: Date;
}

export interface BookResponse {
  id: string;
  name: string;
  image: string;
  author: string;
  publishHouse: { name: string };
  deleted: boolean;
}

export interface LibraryResponse {
  id: string;
  name: string;
  phone: string;
  city: { name: string };
  deleted: boolean;
}

export interface ProductResponse {
  bookLibrary: {
    id: string;
    book: BookResponse;
    library: LibraryResponse;
    SKU: string;
    place: string;
    deleted: boolean;
  };
}

export interface CustomerResponse {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: { name: string };
  deleted: boolean;
}

export interface OrderResponse {
  number: string;
  customer: CustomerResponse;
  products: ProductResponse[];
  status: Status;
  penalty: Penalty | null;
  createdAt: Date;
}

export interface CustomerState {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  deleted: boolean;
}

export interface BookState {
  id: string;
  name: string;
  image: string;
  author: string;
  publishHouse: string;
  deleted: boolean;
}

export interface LibraryState {
  id: string;
  name: string;
  phone: string;
  city: string;
  deleted: boolean;
}

export interface ProductState {
  id: string;
  book: BookState;
  library: LibraryState;
  SKU: string;
  place: string;
  deleted: boolean;
}

export interface OrderState {
  number?: string;
  customer: CustomerState | null;
  products: ProductState[];
  status: Status;
  penalty?: Penalty;
  createdAt?: string;
}

export interface CustomerByEmailProps {
  email: string;
}

export interface ErrorState {
  customer?: string;
  products?: string;
  status?: string;
}

export enum OrderValue {
  customer = "customer",
  products = "products",
  status = "status",
}

export interface OrdersFormProps {
  order: OrderState;
  setOrder: Dispatch<SetStateAction<OrderState>>;
  onSubmit: ({ callback }: OrdersSubmitProps) => void;
  customer: CustomerState | null;
}

export interface OrdersCustomersProps {
  order: OrderState;
  setOrder: Dispatch<SetStateAction<OrderState>>;
  customer: CustomerState | null;
}

export interface OrdersSubmitProps {
  callback: (fieldErrors: ErrorState) => void;
}

export interface PaginatedOrdersProps {
  page: number;
  search: string;
  city: string;
  status: string;
}

export interface PaginatedOrders {
  id: string;
  number: string;
  email: string;
  status: Status;
  createdAt: string;
}

export interface CountPaginatedOrders {
  data: PaginatedOrders[];
  count: number;
}

export interface OrdersOverviewProps {
  orders: CountPaginatedOrders;
  page: number;
  filter: FilterState;
  onPageChange: (page: number) => void;
  onSearchChange: (value: string) => void;
  onCityChange: (value: AutocompleteOptions | null) => void;
  onStatusChange: (value: AutocompleteOptions | null) => void;
  onDelete: (id: string) => void;
  cities: AutocompleteOptions[];
}

export interface OrderIdProps {
  orderId: string;
}

export interface FilterState {
  search: string;
  city: string;
  status: string;
}

export interface EachOrderProduct {
  orderProducts: ProductState[];
  orderId: string;
}
