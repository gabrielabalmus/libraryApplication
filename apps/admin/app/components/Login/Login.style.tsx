import Paper, { PaperProps } from "@mui/material/Paper";
import { styled as MuiStyled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";
import collorPalette from "@/theme/colorPalette";
import Alert, { AlertProps } from "@mui/material/Alert";

export const StyledPaper = MuiStyled(Paper)<PaperProps>(({ theme }) =>
  theme.unstable_sx({
    width: { sm: "260px" },
    border: `10px solid ${collorPalette.primary.lighter}`,
    padding: { xs: 4, sm: 6 },
    flexDirection: "column",
    textAlign: "center",
    borderRadius: { xs: 0, sm: 5 },
    position: "absolute",
    top: "45%",
    transform: "translateY(-50%)",
    left: 0,
    right: 0,
    margin: "0 auto",
    backgroundColor: collorPalette.white,
  })
);

export const StyledParagraph = MuiStyled(Typography)<TypographyProps>(
  ({ theme }) =>
    theme.unstable_sx({
      color: collorPalette.grey.darker,
    })
);

export const StyledAlert = MuiStyled(Alert)<AlertProps>(({ theme }) =>
  theme.unstable_sx({
    padding: "3px 10px",
  })
);
