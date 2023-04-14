import { LibraryState } from "~/types/Libraries.type";

export const Libraries = "Libraries";
export const NewLibrary = "New library";
export const CreateLibraryTitle = "Create library";
export const UpdateLibraryTitle = "Update library";
export const ScheduleTitle = "Opening hours";
export const Details = "Address details";
export const Cities = "Cities";

export const ErrorCreate = "There was a problem in creating the library";
export const SuccessCreate = "Library created successfully";

export const ErrorGetPaginated = "There was a problem in receiving libraries";
export const ErrorGetSingle = "There was a problem in receiving library";

export const ErrorDelete = "There was a problem in deleting the library";
export const SuccessDelete = "Library deleted successfuly";

export const ErrorUpdate = "There was a problem in updating the library";
export const SuccessUpdate = "Library updated successfully";

export const SearchPlaceholder = "Search for name or phone";

export const initialLibrary: LibraryState = {
  name: "",
  city: "",
  address: "",
  phone: "",
  schedule: {
    mondayFriday: { from: "", to: "" },
    saturday: { from: "", to: "" },
  },
};

export const librariesColumns = [
  { name: "name", value: "Name" },
  { name: "city", value: "City" },
  { name: "phone", value: "Phone" },
];
