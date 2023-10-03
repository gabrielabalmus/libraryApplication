import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { Dispatch, SetStateAction } from "react";

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
