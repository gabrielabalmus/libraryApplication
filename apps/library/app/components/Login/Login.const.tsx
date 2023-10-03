import { LoginState } from "~/types/Login.type";

export const LoginDescription = "Please enter your login data.";
export const ErrorSubmit = "There was a problem in submitting your form";
export const WrongLoginData = "Wrong email or password";

export const initialLogin: LoginState = {
  email: "",
  password: "",
};
