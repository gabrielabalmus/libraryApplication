import { ChangeEvent } from "react";
import { FlexProps } from "@/components/Flex/Flex";

export interface ImageUploaderContainerProps {
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  image: string;
}

export interface ImagePaperProps extends FlexProps {
  error: boolean;
}
