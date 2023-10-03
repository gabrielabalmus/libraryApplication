import { Dispatch, SetStateAction } from "react";

export interface LoginState {
  email: string;
  password: string;
}

export interface ErrorState {
  email?: string;
  password?: string;
}

export enum LoginValue {
  email = "email",
  password = "password",
}

export interface LoginFormProps {
  data: LoginState;
  setData: Dispatch<SetStateAction<LoginState>>;
  generalError: string;
  setGeneralError: Dispatch<SetStateAction<string>>;
  onSubmit: ({ callback }: LoginSubmitProps) => void;
}

export interface LoginSubmitProps {
  callback: (fieldErrors: ErrorState) => void;
}
