import {
  ActionArgs,
  ActionFunction,
  LoaderArgs,
  redirect,
} from "@remix-run/node";
import { handleLoginErrors } from "~/components/Login/Login.helper";
import LoginForm from "~/components/Login/Form";
import { ErrorMessage } from "~/const";
import { badRequest } from "~/server/request.server";
import { createUserSession } from "~/server/session.server";
import { getUserId, login } from "~/server/users.server";
import { isString } from "lodash";
import { useActionData, useSubmit } from "@remix-run/react";
import { LoginState, LoginSubmitProps } from "~/types/Login.type";
import { useEffect, useState } from "react";
import { ErrorSubmit, initialLogin } from "~/components/Login/Login.const";
import ErrorInterface from "~/components/ErrorInterface";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (userId) {
    return redirect("/");
  }

  return {};
};

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  try {
    const formData = await request.formData();

    const intent = formData.get("intent");

    if (intent === "login") {
      const email = formData.get("email");
      const password = formData.get("password");

      if (!isString(email) || !isString(password)) {
        return badRequest({
          message: ErrorSubmit,
          success: false,
        });
      }

      const fields = { email, password };

      const fieldErrors = handleLoginErrors(fields);

      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({
          message: ErrorSubmit,
          success: false,
        });
      }

      const user = await login(fields);

      return createUserSession({ request, userId: user.id, redirectTo: "/" });
    }

    return badRequest({
      message: ErrorMessage,
      success: false,
    });
  } catch (error: any) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: false,
    });
  }
};

export const ErrorBoundary = () => {
  return <ErrorInterface />;
};

const Login: React.FC = () => {
  const submit = useSubmit();
  const actionData = useActionData();

  const [data, setData] = useState<LoginState>(initialLogin);
  const [generalError, setGeneralError] = useState<string>("");

  useEffect(() => {
    if (actionData && actionData.message && actionData.success === false)
      setGeneralError(actionData.message);
  }, [actionData]);

  const handleOnSubmit = ({ callback }: LoginSubmitProps) => {
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

  return (
    <LoginForm
      onSubmit={handleOnSubmit}
      data={data}
      setData={setData}
      generalError={generalError}
      setGeneralError={setGeneralError}
    />
  );
};

export default Login;
