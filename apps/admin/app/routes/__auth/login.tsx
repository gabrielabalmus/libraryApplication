import { ActionArgs, ActionFunction } from "@remix-run/node";
import { handleLoginErrors } from "~/components/Login/Login.helper";
import LoginForm from "~/components/Login/LoginForm";
import { errorMessage, errorSubmit } from "~/const";
import { badRequest } from "~/server/request.server";
import { createUserSession } from "~/server/session.server";
import { login } from "~/server/auth.server";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  try {
    const formData = await request.formData();

    const intent = formData.get("intent");
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof intent !== "string") {
      return badRequest({
        message: errorMessage,
        success: false,
      });
    }

    if (intent === "login") {
      if (typeof email !== "string" || typeof password !== "string") {
        return badRequest({
          message: errorSubmit,
          success: false,
        });
      }

      const fields = { email, password };

      const fieldErrors = handleLoginErrors(fields);

      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({
          message: errorSubmit,
          success: false,
        });
      }

      const user = await login(fields);

      return createUserSession({ request, userId: user.id, redirectTo: "/" });
    }
  } catch (error: any) {
    return badRequest({
      message: error.message || errorMessage,
      success: false,
    });
  }
};

const Login: React.FC = () => {
  return <LoginForm />;
};

export default Login;
