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
