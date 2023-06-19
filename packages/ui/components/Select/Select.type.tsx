import { SelectProps } from "@mui/material/Select";

export interface SelectFieldProps extends SelectProps<string> {
  width?: string;
}

export interface SelectContainerProps {
  label?: string;
  onChange: (value: string) => void;
  value: string;
  options: SelectOptions[];
  errorMessage?: string;
  width?: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface SelectOptions {
  value: string;
  name: string;
}
