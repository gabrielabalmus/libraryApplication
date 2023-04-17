import {
  Outlet,
  useActionData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import Menu from "@/components/Menu";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { AlertDataState } from "~/types/Session.type";
import isBoolean from "lodash/isBoolean";

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
    <Menu onLogoutClick={handleLogout}>
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
    </Menu>
  );
};

export default AppLayout;
