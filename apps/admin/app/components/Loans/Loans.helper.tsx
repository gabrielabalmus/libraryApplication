import { Status } from "@prisma/client";
import { ErrorState, FilteredStatuses, LoanState } from "~/types/Loans.type";
import { isEmpty } from "lodash";
import { RequiredField } from "~/const";

export const handleLoanErrors = (formData: LoanState) => {
  let errors: ErrorState = {};
  const { reader, books, status } = formData;

  if (isEmpty(reader)) errors.reader = RequiredField;

  if (isEmpty(books)) errors.books = RequiredField;

  if (isEmpty(status)) errors.status = RequiredField;

  return errors;
};

export const LoanFilteredStatuses = (
  currentStatus: Status
): FilteredStatuses[] => {
  const statuses = Object.keys(Status).map((item) => ({
    value: item,
    name: item,
  })) as FilteredStatuses[];

  switch (currentStatus) {
    case Status.RESERVED:
      return statuses.filter((item) => {
        const newStatuses = new Set([
          Status.RESERVED,
          Status.BORROWED,
          Status.CANCELLED,
        ]) as Set<Status>;

        return newStatuses.has(item.value);
      });
    case Status.BORROWED:
      return statuses.filter((item) => {
        const newStatuses = new Set([
          Status.BORROWED,
          Status.RETURNED,
        ]) as Set<Status>;

        return newStatuses.has(item.value);
      });
    case Status.RETURNED:
      return statuses.filter((item) => {
        const newStatuses = new Set([Status.RETURNED]) as Set<Status>;

        return newStatuses.has(item.value);
      });
    case Status.CANCELLED:
      return statuses.filter((item) => {
        const newStatuses = new Set([Status.CANCELLED]) as Set<Status>;

        return newStatuses.has(item.value);
      });
    default:
      return [];
  }
};
