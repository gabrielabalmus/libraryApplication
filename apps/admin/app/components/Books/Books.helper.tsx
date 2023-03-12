import { isEmpty } from "lodash";
import { InvalidField, RequiredField } from "~/const";
import { checkIfNumber } from "~/components/Libraries/Libraries.helper";
import { ErrorState, BookState, BookLibrariesError } from "~/types/Books.type";

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
    bookLibraries,
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

  if (!isEmpty(bookLibraries))
    bookLibraries.map((item, index) => {
      let bookLibrariesErrors: BookLibrariesError = {};

      if (isEmpty(item.library))
        bookLibrariesErrors = {
          ...bookLibrariesErrors,
          library: RequiredField,
        };

      if (isEmpty(item.sku))
        bookLibrariesErrors = {
          ...bookLibrariesErrors,
          sku: RequiredField,
        };

      if (isEmpty(item.place))
        bookLibrariesErrors = {
          ...bookLibrariesErrors,
          place: RequiredField,
        };

      if (!isEmpty(bookLibrariesErrors))
        errors = {
          ...errors,
          bookLibraries: {
            ...errors.bookLibraries,
            [index]: bookLibrariesErrors,
          },
        };
    });
  return errors;
};
