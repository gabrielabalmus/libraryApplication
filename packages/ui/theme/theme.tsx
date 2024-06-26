import colorPalette from "@/theme/colorPalette";
import { createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

export const theme = createTheme({
  components: {
    MuiAlert: {
      styleOverrides: {
        message: ({ theme }) =>
          theme.unstable_sx({
            textAlign: "left",
            lineHeight: "20px",
            fontSize: { xs: 12, sm: 14 },
            color: colorPalette.black,
          }),
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "50px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          position: "absolute",
          top: "45%",
          left: 0,
          right: 0,
          margin: "0 auto",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            padding: { xs: "16px", sm: "24px" },
          }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #fff inset",
          },
          "&:focus": {
            backgroundColor: "inherit",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: ["Georama"].join(","),
    h1: {
      color: colorPalette.black,
      [breakpoints.up("xs")]: {
        fontSize: 13,
      },
      [breakpoints.up("sm")]: {
        fontSize: 14,
      },
    },
    h2: {
      color: colorPalette.black,
      [breakpoints.up("xs")]: {
        fontSize: 15,
      },
      [breakpoints.up("sm")]: {
        fontSize: 16,
      },
    },
    h6: {
      color: colorPalette.black,
      fontWeight: 600,
      [breakpoints.up("xs")]: {
        fontSize: 28,
      },
      [breakpoints.up("sm")]: {
        fontSize: 40,
      },
    },
    h5: {
      color: colorPalette.black,
      fontWeight: 600,
      [breakpoints.up("xs")]: {
        fontSize: 22,
      },
      [breakpoints.up("sm")]: {
        fontSize: 25,
      },
    },
    h4: {
      color: colorPalette.black,
      fontWeight: 600,
      [breakpoints.up("xs")]: {
        fontSize: 20,
      },
      [breakpoints.up("sm")]: {
        fontSize: 22,
      },
    },
    h3: {
      color: colorPalette.black,
      fontWeight: 600,
      [breakpoints.up("xs")]: {
        fontSize: 16,
      },
      [breakpoints.up("sm")]: {
        fontSize: 18,
      },
    },
  },
  palette: {
    primary: {
      main: colorPalette.primary.base,
    },
    secondary: {
      main: colorPalette.primary.lighter,
    },
  },
});
