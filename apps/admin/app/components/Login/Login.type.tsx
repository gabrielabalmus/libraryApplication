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
  onSubmit: ({ data, callback }: LoginSubmitProps) => void;
}

export interface LoginSubmitProps {
  data: LoginState;
  callback: (fieldErrors: ErrorState) => void;
}
