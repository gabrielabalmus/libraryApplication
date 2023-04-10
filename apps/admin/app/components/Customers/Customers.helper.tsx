import { isEmpty } from "lodash";
import { InvalidField, RequiredField } from "~/const";
import { ErrorState, CustomerState } from "~/types/Customers.type";
import { checkIfNumber } from "~/components/Libraries/Libraries.helper";

export const handleCustomerErrors = (formData: CustomerState) => {
  let errors: ErrorState = {};
  const { name, city, address, email, phone } = formData;

  if (isEmpty(name)) errors.name = RequiredField;

  if (isEmpty(city)) errors.city = RequiredField;

  if (isEmpty(address)) errors.address = RequiredField;

  if (isEmpty(email)) errors.email = RequiredField;

  if (isEmpty(phone)) {
    errors.phone = RequiredField;
  } else if (!checkIfNumber(phone) || phone.length !== 10) {
    errors.phone = InvalidField;
  }

  return errors;
};
