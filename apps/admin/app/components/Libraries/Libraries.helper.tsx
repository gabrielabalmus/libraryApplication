import dayjs, { Dayjs } from "dayjs";
import { isEmpty } from "lodash";
import { invalidField, requiredField } from "~/const";
import { ErrorState, LibraryState } from "./Libraries.type";

export const handleLibraryErrors = (formData: LibraryState) => {
  let errors: ErrorState = {};
  const {
    name,
    city,
    address,
    phone,
    schedule: {
      mondayFriday: { from: mondayFridayFrom, to: mondayFridayTo },
      saturday: { from: saturdayFrom, to: saturdayTo },
    },
  } = formData;

  if (isEmpty(name)) errors.name = requiredField;

  if (isEmpty(city)) errors.city = requiredField;

  if (isEmpty(address)) errors.address = requiredField;

  if (isEmpty(phone)) {
    errors.phone = requiredField;
  } else if (!checkIfNumber(phone) || phone.length !== 10) {
    errors.phone = invalidField;
  }

  if (isEmpty(mondayFridayFrom))
    errors = {
      ...errors,
      schedule: {
        ...errors.schedule,
        mondayFriday: {
          ...errors.schedule?.mondayFriday,
          from: requiredField,
        },
      },
    };

  if (isEmpty(mondayFridayTo))
    errors = {
      ...errors,
      schedule: {
        ...errors.schedule,
        mondayFriday: {
          ...errors.schedule?.mondayFriday,
          to: requiredField,
        },
      },
    };

  if (isEmpty(saturdayFrom))
    errors = {
      ...errors,
      schedule: {
        ...errors.schedule,
        saturday: {
          ...errors.schedule?.saturday,
          from: requiredField,
        },
      },
    };

  if (isEmpty(saturdayTo))
    errors = {
      ...errors,
      schedule: {
        ...errors.schedule,
        saturday: {
          ...errors.schedule?.saturday,
          to: requiredField,
        },
      },
    };

  return errors;
};

export const checkIfValidDate = (value: Dayjs | null) => {
  return value && dayjs(value).isValid()
    ? dayjs(value).locale("ro").format()
    : "";
};

export const checkIfNumber = (value: any) => {
  return /^\d+$/.test(value);
};
