export interface ButtonProps {
  variant: ButtonVariant;
  title: string;
  handleClick: () => void;
}

export enum ButtonVariant {
  contained,
  outlined,
}
