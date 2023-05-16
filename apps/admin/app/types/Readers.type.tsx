import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { Dispatch, SetStateAction } from "react";

export interface ReadersResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: { name: string };
}

export interface PaginatedReaders {
  id: string;
  name: string;
  email: string;
  city: string;
  phone: string;
}

export interface PaginatedReadersProps {
  page: number;
  search: string;
  city: string;
}

export interface CountPaginatedReaders {
  data: PaginatedReaders[];
  count: number;
}

export interface ReadersOverviewProps {
  readers: CountPaginatedReaders;
  page: number;
  filter: FilterState;
  onPageChange: (page: number) => void;
  onSearchChange: (value: string) => void;
  onCityChange: (value: AutocompleteOptions | null) => void;
  onDelete: (id: string) => void;
  cities: AutocompleteOptions[];
}

export interface ReaderIdProps {
  readerId: string;
}

export interface FilterState {
  search: string;
  city: string;
}

export interface ReaderResponse {
  name: string;
  city: { id: string };
  phone: string;
  address: string;
  email: string;
  birthdate: string;
}

export enum ReaderValue {
  name = "name",
  city = "city",
  phone = "phone",
  address = "address",
  email = "email",
  birthdate = "birthdate",
}

export interface ErrorState {
  name?: string;
  city?: string;
  phone?: string;
  address?: string;
  email?: string;
  birthdate?: string;
}

export interface ReaderState {
  name: string;
  city: string;
  phone: string;
  address: string;
  email: string;
  birthdate: string;
}

export interface ReadersFormProps {
  reader: ReaderState;
  setReader: Dispatch<SetStateAction<ReaderState>>;
  onSubmit: ({ callback }: ReadersSubmitProps) => void;
  cities: AutocompleteOptions[];
}

export interface ReadersSubmitProps {
  callback: (fieldErrors: ErrorState) => void;
}

export interface SendEmailProps {
  to: string;
  subject: string;
  template: string;
}
