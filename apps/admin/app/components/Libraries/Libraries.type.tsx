import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { Dispatch, SetStateAction } from "react";

export interface LibrariesResponse {
  id: string;
  name: string;
  phone: string;
  city: { name: string };
}

export interface LibraryResponse {
  name: string;
  city: { id: string };
  address: string;
  phone: string;
  schedule: LibrarySchedule;
}

export interface WeekTimes {
  from: string;
  to: string;
}

export interface LibrarySchedule {
  mondayFriday: WeekTimes;
  saturday: WeekTimes;
}

export interface LibraryState {
  name: string;
  city: string;
  address: string;
  phone: string;
  schedule: LibrarySchedule;
}

export interface ErrorWeekTimes {
  from?: string;
  to?: string;
}

export interface ErrorLibrarySchedule {
  mondayFriday?: ErrorWeekTimes;
  saturday?: ErrorWeekTimes;
}

export interface ErrorState {
  name?: string;
  city?: string;
  address?: string;
  phone?: string;
  schedule?: ErrorLibrarySchedule;
}

export enum ScheduleTimeValue {
  from = "from",
  to = "to",
}

export enum LibraryValue {
  name = "name",
  city = "city",
  address = "address",
  phone = "phone",
}

export interface LibrariesFormProps {
  library: LibraryState;
  setLibrary: Dispatch<SetStateAction<LibraryState>>;
  onSubmit: ({ callback }: LibrariesSubmitProps) => void;
  cities: AutocompleteOptions[];
}

export interface LibrariesSubmitProps {
  callback: (fieldErrors: ErrorState) => void;
}

export interface PaginatedLibrariesProps {
  page: number;
  search: string;
  city: string;
}

export interface PaginatedLibraries {
  id: string;
  name: string;
  city: string;
  phone: string;
}

export interface CountPaginatedLibraries {
  data: PaginatedLibraries[];
  count: number;
}

export interface LibrariesOverviewProps {
  libraries: CountPaginatedLibraries;
  page: number;
  filter: FilterState;
  onPageChange: (page: number) => void;
  onSearchChange: (value: string) => void;
  onCityChange: (value: AutocompleteOptions | null) => void;
  onDelete: (id: string) => void;
  cities: AutocompleteOptions[];
}

export interface LibraryIdProps {
  libraryId: string;
}

export interface FilterState {
  search: string;
  city: string;
}
