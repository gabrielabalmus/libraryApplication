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
  onSubmit: ({ data, callback }: LibrariesSubmitProps) => void;
}

export interface LibrariesSubmitProps {
  data: LibraryState;
  callback: (fieldErrors: ErrorState) => void;
}
