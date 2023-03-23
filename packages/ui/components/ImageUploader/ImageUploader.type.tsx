import { ChangeEvent } from "react";

export interface ImageUploaderContainerProps {
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  image?: string;
}
