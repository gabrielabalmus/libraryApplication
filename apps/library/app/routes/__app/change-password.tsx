import {
  ActionArgs,
  ActionFunction,
  LoaderArgs,
  redirect,
} from "@remix-run/node";
import { useActionData, useSubmit } from "@remix-run/react";
import { isBoolean, isString } from "lodash";
import { useEffect, useState } from "react";
import ErrorInterface from "~/components/ErrorInterface";
import ReadersChangePassword from "~/components/Readers/ChangePassword";
import {
  ErrorChangePassword,
  SuccessChangePassword,
  initialPassword,
} from "~/components/Readers/Readers.const";
import { handlePasswordErrors } from "~/components/Readers/Readers.helper";
import {
  AlertDataState,
  PasswordState,
  PasswordSubmitProps,
} from "~/types/Readers.type";
import { ErrorMessage } from "~/const";
import { changePassword, getReaderId } from "~/server/readers.server";
import { badRequest, goodRequest } from "~/server/request.server";
import Container from "@mui/material/Container";

export const loader = async ({ request }: LoaderArgs) => {
  const readerId = await getReaderId(request);

  if (!readerId) {
    return redirect("/login");
  }

  return {};
};

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const readerId = await getReaderId(request);

  if (!readerId) {
    return redirect("/login");
  }

  try {
    const formData = await request.formData();

    const intent = formData.get("intent");

    if (intent === "changePassword") {
      const oldPassword = formData.get("oldPassword");
      const newPassword = formData.get("newPassword");

      if (!isString(oldPassword) || !isString(newPassword)) {
        return badRequest({
          message: ErrorChangePassword,
          success: false,
        });
      }

      const fields = { oldPassword, newPassword };

      const fieldErrors = handlePasswordErrors(fields);

      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({
          message: ErrorChangePassword,
          success: false,
        });
      }

      await changePassword({ ...fields, readerId });

      return goodRequest({
        message: SuccessChangePassword,
        success: true,
      });
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

const ChangePassword: React.FC = () => {
  const submit = useSubmit();
  const actionData = useActionData();

  const [data, setData] = useState<PasswordState>(initialPassword);
  const [messageData, setMessageData] = useState<AlertDataState>();

  useEffect(() => {
    if (actionData && actionData.message && isBoolean(actionData.success))
      setMessageData(actionData);
  }, [actionData]);

  const handleOnSubmit = ({ callback }: PasswordSubmitProps) => {
    const fieldErrors = handlePasswordErrors(data);

    if (Object.values(fieldErrors).some(Boolean)) {
      callback(fieldErrors);
      return;
    }

    submit(
      {
        ...data,
        intent: "changePassword",
      },
      {
        method: "put",
        action: "/change-password",
      }
    );
  };

  return (
    <Container>
      <ReadersChangePassword
        onSubmit={handleOnSubmit}
        setData={setData}
        data={data}
        messageData={messageData}
      />
    </Container>
  );
};

export default ChangePassword;
