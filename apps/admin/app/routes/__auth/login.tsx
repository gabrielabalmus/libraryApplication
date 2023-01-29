import { ActionArgs, ActionFunction } from "@remix-run/node";
import { handleLoginErrors } from "~/components/Login/Login.helper";
import LoginForm from "~/components/Login/LoginForm";
import { errorMessage, errorSubmit } from "~/const";
import { badRequest } from "~/server/request.server";
import { createUserSession } from "~/server/session.server";
import { login } from "~/server/auth.server";
import { isString } from "lodash";
import { useSubmit } from "@remix-run/react";
import { LoginSubmitProps } from "~/components/Login/Login.type";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  try {
    const formData = await request.formData();

    const intent = formData.get("intent");
    const email = formData.get("email");
    const password = formData.get("password");

    if (intent === "login") {
      if (!isString(email) || !isString(password)) {
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

    return badRequest({
      message: errorMessage,
      success: false,
    });
  } catch (error: any) {
    return badRequest({
      message: error.message || errorMessage,
      success: false,
    });
  }
};

const Login: React.FC = () => {
  const submit = useSubmit();

  const handleOnSubmit = ({ data, callback }: LoginSubmitProps) => {
    const fieldErrors = handleLoginErrors(data);

    if (Object.values(fieldErrors).some(Boolean)) {
      callback(fieldErrors);
      return;
    }

    submit(
      {
        ...data,
        intent: "login",
      },
      {
        method: "post",
        action: "/login",
      }
    );
  };
  return <LoginForm onSubmit={handleOnSubmit} />;
};

export default Login;
