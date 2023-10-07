import Button, { ButtonProps } from "@mui/material/Button";
import { styled as MuiStyled } from "@mui/material/styles";
import colorPalette from "@/theme/colorPalette";

const commonStyle = {
  height: "38px",
  padding: "6px 20px",
  letterSpacing: "0.5px",
  fontSize: "15px",
};

export const ContainedButton = MuiStyled(Button)<ButtonProps>(({ theme }) =>
  theme.unstable_sx({
    ...commonStyle,

    backgroundColor: colorPalette.primary.base,
    color: colorPalette.white,
    border: `2px solid ${colorPalette.primary.base}`,
    "&:hover": {
      backgroundColor: colorPalette.primary.base,
    },
    "&:disabled": {
      backgroundColor: colorPalette.grey.lighter,
      color: colorPalette.grey.base,
      border: `2px solid ${colorPalette.grey.lighter}`,
    },
  })
) as typeof Button;

export const OutlinedButton = MuiStyled(Button)<ButtonProps>(
  ({ theme }) =>
    theme.unstable_sx({
      ...commonStyle,
      backgroundColor: colorPalette.white,
      color: colorPalette.black,
      border: `2px solid ${colorPalette.primary.base}`,
      "&:hover": {
        backgroundColor: colorPalette.white,
      },
      "&:disabled": {
        backgroundColor: colorPalette.grey.lighter,
        color: colorPalette.grey.base,
        border: `2px solid ${colorPalette.grey.lighter}`,
      },
    })
) as typeof Button;
