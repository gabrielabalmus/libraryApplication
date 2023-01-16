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

  const [alertMessage, setAlertMessage] = useState<string>("");

  useEffect(() => {
    if (actionData?.message) setAlertMessage(actionData.message);
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
    setAlertMessage("");
  }, [alertMessage]);

  return (
    <Menu onLogoutClick={handleLogout}>
      <Outlet />

      {(transition.state === "submitting" ||
        transition.state === "loading") && <Spinner />}

      <Snackbar
        open={!!alertMessage}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleAlertClose} severity="error">
          {alertMessage}
        </Alert>
      </Snackbar>
    </Menu>
  );
};

export default AppLayout;
