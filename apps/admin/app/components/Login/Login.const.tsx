import { LoginState } from "~/types/Login.type";

export const LoginDescription = "Please enter your login data.";

export const initialLogin: LoginState = {
  email: "",
  password: "",
};
