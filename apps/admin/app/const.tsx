import collorPalette from "@/theme/colorPalette";
import { createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

export const requiredField = "This field is required!";
export const errorSubmit = "There was a problem in submitting your form.";
export const wrongLoginData = "Email or password is wrong.";

const breakpoints = createBreakpoints({});

export const theme = createTheme({
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: "0 10px",
        },
        message: ({ theme }) =>
          theme.unstable_sx({
            textAlign: "left",
            lineHeight: "20px",
            fontSize: { xs: 12, sm: 13 },
          }),
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
  },
  typography: {
    fontFamily: ["Georama"].join(","),
    h1: {
      color: collorPalette.black,
      [breakpoints.up("xs")]: {
        fontSize: 15,
      },
      [breakpoints.up("sm")]: {
        fontSize: 17,
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
