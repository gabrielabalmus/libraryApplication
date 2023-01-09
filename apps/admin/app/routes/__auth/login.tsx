import { ActionArgs, ActionFunction } from "@remix-run/node";
import { handleLoginErrors } from "~/components/Login/Login.helper";
import LoginForm from "~/components/Login/LoginForm";
import { errorSubmit } from "~/const";
import { badRequest } from "~/server/request.server";
import { createUserSession } from "~/server/session.server";
import { login } from "~/server/auth.server";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return badRequest({
      message: errorSubmit,
      error: true,
    });
  }

  const fields = { email, password };

  const fieldErrors = handleLoginErrors(fields);

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({
      message: errorSubmit,
      error: true,
    });
  }

  const user = await login(fields);

  if (user instanceof Error) {
    return badRequest({
      message: user.message,
      error: true,
    });
  }

  return createUserSession(user.id, "/");
};

const Login: React.FC = () => {
  return <LoginForm />;
};

export default Login;
