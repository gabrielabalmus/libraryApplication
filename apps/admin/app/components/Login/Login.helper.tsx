import { isEmpty } from "lodash";
import { requiredField } from "~/const";
import { ErrorState, LoginState } from "./Login.type";

export const handleLoginErrors = (formData: LoginState) => {
  const errors: ErrorState = {};

  if (isEmpty(formData.email)) errors.email = requiredField;

  if (isEmpty(formData.password)) errors.password = requiredField;

  return errors;
};
