import {
  Outlet,
  useActionData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import Spinner from "@/components/Spinner";
import AppBar from "@/components/AppBar";
import { useEffect, useState } from "react";
import { isBoolean } from "lodash";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { AlertDataState } from "~/types/Session.type";

const AppLayout: React.FC = () => {
  const navigation = useNavigation();
  const submit = useSubmit();
  const actionData = useActionData();

  const [alertData, setAlertData] = useState<AlertDataState>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (actionData && actionData.message && isBoolean(actionData.success)) {
      setAlertData(actionData);
      setIsOpen(true);
    }
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
    setIsOpen(false);
  };

  return (
    <AppBar onLogoutClick={handleLogout}>
      <Outlet />

      {(navigation.state === "submitting" ||
        navigation.state === "loading") && <Spinner />}

      <Snackbar
        open={isOpen}
        autoHideDuration={3000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleAlertClose}
          severity={alertData?.success ? "success" : "error"}
        >
          {alertData?.message}
        </Alert>
      </Snackbar>
    </AppBar>
  );
};

export default AppLayout;
