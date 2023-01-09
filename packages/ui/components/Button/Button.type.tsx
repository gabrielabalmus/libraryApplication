export interface ButtonProps {
  variant: ButtonVariant;
  title: string;
  onClick?: () => void;
  type?: ButtonType;
}

export enum ButtonVariant {
  contained = "contained",
  outlined = "outlined",
}

export enum ButtonType {
  submit = "submit",
  button = "button",
  reset = "reset",
}
