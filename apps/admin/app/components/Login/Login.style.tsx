import Grid, { GridProps } from "@mui/material/Grid";
import { styled as MuiStyled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";
import collorPalette from "@/theme/colorPalette";

export const StyledGrid = MuiStyled(Grid)<GridProps>(({ theme }) =>
  theme.unstable_sx({
    width: { xs: "100%", sm: "380px" },
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
  })
);

export const StyledTitle = MuiStyled(Typography)<TypographyProps>(({ theme }) =>
  theme.unstable_sx({
    marginBottom: 1,
  })
);

export const StyledParagraph = MuiStyled(Typography)<TypographyProps>(
  ({ theme }) =>
    theme.unstable_sx({
      marginBottom: 3,
      color: collorPalette.grey.darker,
    })
);
