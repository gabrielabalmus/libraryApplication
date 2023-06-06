import { Outlet, useTransition } from "@remix-run/react";
import Spinner from "@/components/Spinner";

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
