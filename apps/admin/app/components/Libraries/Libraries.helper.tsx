import dayjs, { Dayjs } from "dayjs";
import { isEmpty } from "lodash";
import { requiredField } from "~/const";
import { ErrorState, LibraryState } from "./Libraries.type";

export const handleLibraryErrors = (formData: LibraryState) => {
  let errors: ErrorState = {};

  if (isEmpty(formData.name)) errors.name = requiredField;

  if (isEmpty(formData.city)) errors.city = requiredField;

  if (isEmpty(formData.address)) errors.address = requiredField;

  if (isEmpty(formData.phone)) errors.phone = requiredField;

  if (isEmpty(formData.schedule.modayFriday.from))
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

  if (isEmpty(formData.schedule.modayFriday.to))
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

  if (isEmpty(formData.schedule.saturday.from))
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

  if (isEmpty(formData.schedule.saturday.to))
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

export const checkIdValidDate = (value: Dayjs | null) => {
  return value && dayjs(value).isValid()
    ? dayjs(value).locale("ro").format()
    : "";
};
