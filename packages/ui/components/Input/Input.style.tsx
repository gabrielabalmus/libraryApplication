import TextField from "@mui/material/TextField";
import { styled as MuiStyled } from "@mui/material/styles";
import { InputFieldProps } from "./Input.type";

export const StandardInput = MuiStyled(TextField)<InputFieldProps>(
  ({ width, theme }) =>
    theme.unstable_sx({
      flex: 1,
      maxWidth: { md: width },
      width: { xs: "100%" },
    })
);
