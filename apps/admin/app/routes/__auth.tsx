import { json, LoaderArgs, redirect } from "@remix-run/node";
import { Outlet, useTransition } from "@remix-run/react";
import { getUserId } from "~/server/user.server";
import Spinner from "@/components/Spinner";
import { theme } from "~/const";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (userId) {
    return redirect("/");
  }

  return json({});
};

const AuthLayout: React.FC = () => {
  const transition = useTransition();

  return (
    <MuiThemeProvider theme={theme}>
      <Outlet />
      {(transition.state === "submitting" ||
        transition.state === "loading") && <Spinner />}
    </MuiThemeProvider>
  );
};

export default AuthLayout;
