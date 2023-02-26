import { isEmpty } from "lodash";
import { InvalidField, RequiredField } from "~/const";
import { checkIfNumber } from "../Libraries/Libraries.helper";
import { ErrorState, BookState } from "./Books.type";

export const handleBookErrors = (formData: BookState) => {
  let errors: ErrorState = {};
  const {
    name,
    author,
    pagesNumber,
    category,
    publishHouse,
    releaseYear,
    language,
  } = formData;

  if (isEmpty(name)) errors.name = RequiredField;

  if (isEmpty(author)) errors.author = RequiredField;

  if (isEmpty(pagesNumber)) {
    errors.pagesNumber = RequiredField;
  } else if (!checkIfNumber(pagesNumber)) {
    errors.pagesNumber = InvalidField;
  }

  if (isEmpty(category)) errors.category = RequiredField;

  if (isEmpty(publishHouse)) errors.publishHouse = RequiredField;

  if (isEmpty(releaseYear)) {
    errors.releaseYear = RequiredField;
  } else if (!checkIfNumber(releaseYear)) {
    errors.releaseYear = InvalidField;
  }

  if (isEmpty(language)) errors.language = RequiredField;

  return errors;
};
