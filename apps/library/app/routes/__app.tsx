import { Outlet, useNavigation, useSubmit } from "@remix-run/react";
import Spinner from "@/components/Spinner";
import AppBar from "@/components/AppBar";

const AppLayout: React.FC = () => {
  const navigation = useNavigation();
  const submit = useSubmit();

  const handleLogout = () => {
    submit(
      { intent: "logout" },
      {
        method: "post",
        action: "/?index",
      }
    );
  };

  return (
    <AppBar onLogoutClick={handleLogout}>
      <Outlet />

      {(navigation.state === "submitting" ||
        navigation.state === "loading") && <Spinner />}
    </AppBar>
  );
};

export default AppLayout;
