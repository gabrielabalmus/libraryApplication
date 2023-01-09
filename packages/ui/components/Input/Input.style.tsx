import TextField, { TextFieldProps } from "@mui/material/TextField";
import { styled as MuiStyled } from "@mui/material/styles";

export const StandardInput = MuiStyled(TextField)<TextFieldProps>(({ theme }) =>
  theme.unstable_sx({
    mb: 1.5,
  })
);
