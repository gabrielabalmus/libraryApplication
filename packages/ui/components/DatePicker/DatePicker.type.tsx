import { Dayjs } from "dayjs";

export interface DatePickerProps {
  label: string;
  value: string;
  onChange: (value: Dayjs | null) => void;
  errorMessage?: string;
}
