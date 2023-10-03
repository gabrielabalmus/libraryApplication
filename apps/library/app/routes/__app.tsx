import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import { LoaderArgs } from "@remix-run/node";
import Spinner from "@/components/Spinner";
import AppBar from "@/components/AppBar";
import { getReaderId } from "~/server/readers.server";
import { goodRequest } from "~/server/request.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getReaderId(request);

  return goodRequest({
    isAuthenticated: !!userId,
  });
};

const AppLayout: React.FC = () => {
  const navigation = useNavigation();
  const submit = useSubmit();
  const loaderData = useLoaderData();

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
    <AppBar
      onLogoutClick={handleLogout}
      isAuthenticated={loaderData?.isAuthenticated || false}
    >
      <Outlet />

      {(navigation.state === "submitting" ||
        navigation.state === "loading") && <Spinner />}
    </AppBar>
  );
};

export default AppLayout;
