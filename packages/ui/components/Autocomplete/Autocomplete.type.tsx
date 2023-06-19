import { AutocompleteProps } from "@mui/material/Autocomplete";

export interface AutocompleteFieldProps
  extends AutocompleteProps<AutocompleteOptions, boolean, boolean, boolean> {
  width?: string;
}

export interface AutocompleteContainerProps {
  label?: string;
  onChange: (value: AutocompleteOptions | null) => void;
  value: string;
  options: AutocompleteOptions[];
  errorMessage?: string;
  width?: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface AutocompleteOptions {
  id: string;
  name: string;
}
