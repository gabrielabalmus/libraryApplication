import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { styled as MuiStyled } from "@mui/material/styles";

export const StyledSpinner = MuiStyled(CircularProgress)<CircularProgressProps>(
  ({ theme }) =>
    theme.unstable_sx({
      position: "fixed",
    })
);
