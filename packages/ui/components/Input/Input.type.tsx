import { StandardTextFieldProps } from "@mui/material/TextField";

export interface InputProps {
  label: string;
  onChange: (value: string) => void;
  defaultValue?: string;
  type?: InputType;
  errorMessage?: string;
  width?: string;
  multiline?: boolean;
}

export enum InputType {
  text = "text",
  number = "number",
  password = "password",
}

export interface InputFieldProps extends StandardTextFieldProps {
  width?: string;
}
