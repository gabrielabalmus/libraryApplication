import Select from "@mui/material/Select";
import { styled as MuiStyled } from "@mui/material/styles";
import { SelectFieldProps } from "./Select.type";

export const StandardSelect = MuiStyled(Select)<SelectFieldProps>(
  ({ width, theme }) =>
    theme.unstable_sx({
      flex: 1,
      maxWidth: { md: width, xs: "100%" },
    })
);
