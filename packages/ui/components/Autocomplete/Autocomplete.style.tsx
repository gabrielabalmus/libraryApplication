import Autocomplete from "@mui/material/Autocomplete";
import { styled as MuiStyled } from "@mui/material/styles";
import { AutocompleteFieldProps } from "./Autocomplete.type";

export const StandardAutocomplete = MuiStyled(
  Autocomplete
)<AutocompleteFieldProps>(({ width, theme }) =>
  theme.unstable_sx({
    flexGrow: 1,
    maxWidth: { md: width, xs: "100%" },
  })
);
