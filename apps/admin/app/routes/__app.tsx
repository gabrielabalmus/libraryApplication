import {
  Outlet,
  useActionData,
  useSubmit,
  useTransition,
} from "@remix-run/react";
import Menu from "@/components/Menu";
import { json, LoaderArgs, redirect } from "@remix-run/node";
import { getUserId } from "~/server/user.server";
import Spinner from "@/components/Spinner";
import { useCallback, useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { AlertDataState } from "~/types/Session.type";
import isBoolean from "lodash/isBoolean";
import { appTheme, theme } from "~/const";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  return json({});
};

const AppLayout: React.FC = () => {
  const transition = useTransition();
  const submit = useSubmit();
  const actionData = useActionData();

  const [alertData, setAlertData] = useState<AlertDataState>({});

  useEffect(() => {
    if (actionData && actionData.message && isBoolean(actionData.success))
      setAlertData(actionData);
  }, [actionData]);

  const handleLogout = useCallback(() => {
    submit(
      { intent: "logout" },
      {
        method: "post",
        action: "/?index",
      }
    );
  }, []);

  const handleAlertClose = useCallback(() => {
    setAlertData({});
  }, [alertData]);

  return (
    <MuiThemeProvider theme={theme}>
      <Menu onLogoutClick={handleLogout}>
        <MuiThemeProvider theme={appTheme}>
          <Outlet />
        </MuiThemeProvider>

        {(transition.state === "submitting" ||
          transition.state === "loading") && <Spinner />}

        <Snackbar
          open={Object.keys(alertData).length > 0}
          autoHideDuration={5000}
          onClose={handleAlertClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleAlertClose}
            severity={alertData.success ? "success" : "error"}
          >
            {alertData.message}
          </Alert>
        </Snackbar>
      </Menu>
    </MuiThemeProvider>
  );
};

export default AppLayout;
