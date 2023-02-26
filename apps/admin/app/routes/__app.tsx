import {
  Outlet,
  useActionData,
  useSubmit,
  useTransition,
} from "@remix-run/react";
import Menu from "@/components/Menu";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { AlertDataState } from "~/types/Session.type";
import isBoolean from "lodash/isBoolean";

const AppLayout: React.FC = () => {
  const transition = useTransition();
  const submit = useSubmit();
  const actionData = useActionData();

  const [alertData, setAlertData] = useState<AlertDataState>({});

  useEffect(() => {
    if (actionData && actionData.message && isBoolean(actionData.success))
      setAlertData(actionData);
  }, [actionData]);

  const handleLogout = () => {
    submit(
      { intent: "logout" },
      {
        method: "post",
        action: "/?index",
      }
    );
  };

  const handleAlertClose = () => {
    setAlertData({});
  };

  return (
    <Menu onLogoutClick={handleLogout}>
      <Outlet />

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
  );
};

export default AppLayout;
