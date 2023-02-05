import { Dispatch, SetStateAction } from "react";

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
}

export interface LibrariesSubmitProps {
  callback: (fieldErrors: ErrorState) => void;
}

export interface PaginatedLibrariesProps {
  page: number;
  search: string;
}

export interface LibraryResponse {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  schedule: LibrarySchedule;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
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

export interface LibrariedOverviewProps {
  libraries: CountPaginatedLibraries;
  page: number;
  search: string;
  onPageChange: (page: number) => void;
  onSearchChange: (value: string) => void;
  onDelete: (id: string) => void;
}

export interface LibraryIdProps {
  libraryId: string;
}
