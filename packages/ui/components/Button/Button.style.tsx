import Button, { ButtonProps } from "@mui/material/Button";
import { styled as MuiStyled } from "@mui/material/styles";
import collorPalette from "@/theme/colorPalette";

export const ContainedButton = MuiStyled(Button)<ButtonProps>(({ theme }) =>
  theme.unstable_sx({
    backgroundColor: collorPalette.primary.base,
    color: collorPalette.white,
    border: `2px solid ${collorPalette.primary.base}`,
    "&:hover": {
      backgroundColor: collorPalette.primary.base,
    },
  })
);

export const OutlinedButton = MuiStyled(Button)<ButtonProps>(({ theme }) =>
  theme.unstable_sx({
    backgroundColor: collorPalette.white,
    color: collorPalette.black,
    border: `2px solid ${collorPalette.primary.base}`,
    "&:hover": {
      backgroundColor: collorPalette.white,
    },
  })
);
