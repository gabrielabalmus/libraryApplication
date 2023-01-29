import { isEmpty } from "lodash";
import { requiredField } from "~/const";
import { ErrorState, LoginState } from "./Login.type";

export const handleLoginErrors = (formData: LoginState) => {
  const errors: ErrorState = {};
  const { email, password } = formData;

  if (isEmpty(email)) errors.email = requiredField;

  if (isEmpty(password)) errors.password = requiredField;

  return errors;
};
