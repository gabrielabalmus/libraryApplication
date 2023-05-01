import collorPalette from "@/theme/colorPalette";
import { createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

export const RequiredField = "This field is required";
export const InvalidField = "Invalid field value";
export const ErrorSubmit = "There was a problem in submitting your form";
export const ErrorMessage = "An error occured";
export const WrongLoginData = "Email or password is wrong";

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
            color: collorPalette.black,
          }),
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
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            "-webkit-box-shadow": "0 0 0 100px #fff inset",
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
      color: collorPalette.black,
      [breakpoints.up("xs")]: {
        fontSize: 13,
      },
      [breakpoints.up("sm")]: {
        fontSize: 14,
      },
    },
    h2: {
      color: collorPalette.black,
      [breakpoints.up("xs")]: {
        fontSize: 15,
      },
      [breakpoints.up("sm")]: {
        fontSize: 16,
      },
    },
    h5: {
      color: collorPalette.black,
      fontWeight: 600,
      [breakpoints.up("xs")]: {
        fontSize: 22,
      },
      [breakpoints.up("sm")]: {
        fontSize: 25,
      },
    },
    h4: {
      color: collorPalette.black,
      fontWeight: 600,
      [breakpoints.up("xs")]: {
        fontSize: 20,
      },
      [breakpoints.up("sm")]: {
        fontSize: 22,
      },
    },
    h3: {
      color: collorPalette.black,
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
      main: collorPalette.primary.base,
    },
    secondary: {
      main: collorPalette.primary.lighter,
    },
  },
});
