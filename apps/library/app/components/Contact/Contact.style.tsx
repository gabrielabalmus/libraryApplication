import colorPalette from "@/theme/colorPalette";
import Box, { BoxProps } from "@mui/material/Box";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled as MuiStyled } from "@mui/material/styles";

export const StyledBox = MuiStyled(Box)<BoxProps>(({ theme }) =>
  theme.unstable_sx({
    padding: "10px",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    backgroundColor: colorPalette.grey.lighter,
  })
);

export const StyledMainTitle = MuiStyled(Typography)<TypographyProps>(
  ({ theme }) =>
    theme.unstable_sx({
      color: colorPalette.black,
      fontWeight: 600,
      padding: "15px 20px",
      backgroundColor: colorPalette.primary.lightest,
      textAlign: "center",
    })
);

export const StyledTitle = MuiStyled(Typography)<TypographyProps>(({ theme }) =>
  theme.unstable_sx({
    padding: "10px",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    backgroundColor: colorPalette.primary.lightest,
  })
);
