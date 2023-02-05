import { isEmpty } from "lodash";
import { RequiredField } from "~/const";
import { ErrorState, LoginState } from "./Login.type";

export const handleLoginErrors = (formData: LoginState) => {
  const errors: ErrorState = {};
  const { email, password } = formData;

  if (isEmpty(email)) errors.email = RequiredField;

  if (isEmpty(password)) errors.password = RequiredField;

  return errors;
};
