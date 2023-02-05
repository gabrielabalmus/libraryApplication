import dayjs, { Dayjs } from "dayjs";
import { isEmpty } from "lodash";
import { InvalidField, RequiredField } from "~/const";
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

  if (isEmpty(name)) errors.name = RequiredField;

  if (isEmpty(city)) errors.city = RequiredField;

  if (isEmpty(address)) errors.address = RequiredField;

  if (isEmpty(phone)) {
    errors.phone = RequiredField;
  } else if (!checkIfNumber(phone) || phone.length !== 10) {
    errors.phone = InvalidField;
  }

  if (isEmpty(mondayFridayFrom))
    errors = {
      ...errors,
      schedule: {
        ...errors.schedule,
        mondayFriday: {
          ...errors.schedule?.mondayFriday,
          from: RequiredField,
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
          to: RequiredField,
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
          from: RequiredField,
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
          to: RequiredField,
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

export const librariesColumns = [
  { name: "name", value: "Name" },
  { name: "city", value: "City" },
  { name: "phone", value: "Phone" },
];
