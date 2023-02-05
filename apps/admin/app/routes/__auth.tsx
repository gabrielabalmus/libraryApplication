import { json, LoaderArgs, redirect } from "@remix-run/node";
import { Outlet, useTransition } from "@remix-run/react";
import { getUserId } from "~/server/users.server";
import Spinner from "@/components/Spinner";

export const loader = async ({ request }: LoaderArgs) => {
  try {
    const userId = await getUserId(request);

    if (userId) {
      return redirect("/");
    }

    return json({});
  } catch (error: any) {
    return json({});
  }
};

const AuthLayout: React.FC = () => {
  const transition = useTransition();

  return (
    <>
      <Outlet />
      {(transition.state === "submitting" ||
        transition.state === "loading") && <Spinner />}
    </>
  );
};

export default AuthLayout;
