import TextField, { TextFieldProps } from "@mui/material/TextField";
import { styled as MuiStyled } from "@mui/material/styles";

export const StandardTextField = MuiStyled(TextField)<TextFieldProps>(
  ({ theme }) =>
    theme.unstable_sx({
      marginBottom: "12px",
    })
);
