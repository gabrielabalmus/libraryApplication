import { CalendarPickerView } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { KeyboardEvent } from "react";

export interface DatePickerProps {
  label: string;
  value: string;
  onChange: (value: Dayjs | null) => void;
  errorMessage?: string;
  views?: CalendarPickerView[];
  onKeyDown?: (e: KeyboardEvent<HTMLElement>) => void;
}
