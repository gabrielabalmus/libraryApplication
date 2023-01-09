export interface InputProps {
  label: string;
  onChange: (value: string) => void;
  defaultValue?: string;
  type?: InputType;
  errorMessage?: string;
}
export enum InputType {
  text = "text",
  number = "number",
  password = "password",
}
