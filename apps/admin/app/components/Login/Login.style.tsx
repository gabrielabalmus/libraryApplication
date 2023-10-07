import Paper, { PaperProps } from "@mui/material/Paper";
import { styled as MuiStyled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";
import colorPalette from "@/theme/colorPalette";
import Alert, { AlertProps } from "@mui/material/Alert";

export const StyledPaper = MuiStyled(Paper)<PaperProps>(({ theme }) =>
  theme.unstable_sx({
    width: { sm: "260px" },
    border: `10px solid ${colorPalette.primary.lighter}`,
    padding: { xs: 4, sm: 6 },
    flexDirection: "column",
    textAlign: "center",
    borderRadius: { xs: 0, sm: 5 },
    margin: "0 auto",
    marginTop: { xs: "50px", md: "100px" },
    marginBottom: { xs: "50px", md: "100px" },
    backgroundColor: colorPalette.white,
    boxShadow: "none",
  })
);

export const StyledParagraph = MuiStyled(Typography)<TypographyProps>(
  ({ theme }) =>
    theme.unstable_sx({
      color: colorPalette.grey.darker,
    })
);

export const StyledAlert = MuiStyled(Alert)<AlertProps>(({ theme }) =>
  theme.unstable_sx({
    padding: "3px 10px",
  })
);
