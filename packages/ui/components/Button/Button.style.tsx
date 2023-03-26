import Button, { ButtonProps } from "@mui/material/Button";
import { styled as MuiStyled } from "@mui/material/styles";
import collorPalette from "@/theme/colorPalette";

const commonStyle = {
  height: "38px",
  padding: "6px 20px",
  letterSpacing: "0.5px",
  fontSize: "15px",
  minWidth: "170px",
};

export const ContainedButton = MuiStyled(Button)<ButtonProps>(({ theme }) =>
  theme.unstable_sx({
    ...commonStyle,
    backgroundColor: collorPalette.primary.base,
    color: collorPalette.white,
    border: `2px solid ${collorPalette.primary.base}`,
    "&:hover": {
      backgroundColor: collorPalette.primary.base,
    },
  })
) as typeof Button;

export const OutlinedButton = MuiStyled(Button)<ButtonProps>(({ theme }) =>
  theme.unstable_sx({
    ...commonStyle,
    backgroundColor: collorPalette.white,
    color: collorPalette.black,
    border: `2px solid ${collorPalette.primary.base}`,
    "&:hover": {
      backgroundColor: collorPalette.white,
    },
  })
) as typeof Button;
