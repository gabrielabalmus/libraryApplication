import { Outlet, useTransition } from "@remix-run/react";
import Menu from "@/components/Menu";
import { json, LoaderArgs, redirect } from "@remix-run/node";
import { getUserId } from "~/server/user.server";
import Spinner from "@/components/Spinner";

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  return json({});
}

const AppLayout: React.FC = () => {
  const transition = useTransition();
  return (
    <Menu>
      <Outlet />
      {(transition.state === "submitting" ||
        transition.state === "loading") && <Spinner />}
    </Menu>
  );
};

export default AppLayout;
