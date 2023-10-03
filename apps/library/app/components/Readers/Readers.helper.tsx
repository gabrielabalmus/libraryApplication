import { isEmpty, isString } from "lodash";
import { InvalidField, RequiredField } from "~/const";
import {
  ErrorState,
  PasswordErrorState,
  PasswordState,
  ReaderState,
} from "~/types/Readers.type";
import { checkIfEmail, checkIfNumber, checkIfValidDate } from "@/utils/common";

export const handleReaderErrors = (formData: ReaderState) => {
  let errors: ErrorState = {};
  const { name, city, address, email, phone, password, birthdate } = formData;

  if (isEmpty(name)) errors.name = RequiredField;

  if (isEmpty(city)) errors.city = RequiredField;

  if (isEmpty(address)) errors.address = RequiredField;

  if (isString(password) && isEmpty(password)) errors.password = RequiredField;

  if (isEmpty(email)) {
    errors.email = RequiredField;
  } else if (!checkIfEmail(email)) {
    errors.email = InvalidField;
  }

  if (isEmpty(phone)) {
    errors.phone = RequiredField;
  } else if (!checkIfNumber(phone) || phone.length !== 10) {
    errors.phone = InvalidField;
  }

  if (isEmpty(birthdate) || !checkIfValidDate(birthdate))
    errors.birthdate = RequiredField;

  return errors;
};

export const handlePasswordErrors = (formData: PasswordState) => {
  let errors: PasswordErrorState = {};
  const { oldPassword, newPassword } = formData;

  if (isEmpty(oldPassword)) errors.oldPassword = RequiredField;

  if (isEmpty(newPassword)) {
    errors.newPassword = RequiredField;
  } else if (newPassword === oldPassword) {
    errors.newPassword = "New password should be different";
  }

  return errors;
};
