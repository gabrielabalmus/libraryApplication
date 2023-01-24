import { Dayjs } from "dayjs";

export interface TimeProps {
  label: string;
  value: string;
  onChange: (value: Dayjs | null) => void;
  errorMessage?: string;
}
