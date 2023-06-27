import { LoginState } from "~/types/Login.type";

export const LoginDescription = "Please enter your login data.";
export const ErrorSubmit = "There was a problem in submitting your form";
export const WrongLoginData = "Email or password is wrong";

export const initialLogin: LoginState = {
  email: "",
  password: "",
};
