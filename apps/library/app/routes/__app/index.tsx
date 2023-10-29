import { ActionArgs, ActionFunction, json, redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { useEffect } from "react";
import ErrorInterface from "~/components/ErrorInterface";
import MainOverview from "~/components/Main";
import { ErrorMessage } from "~/const";
import { useBooksToReserveContext } from "~/context/booksToReserve.context";
import { getReaderId } from "~/server/readers.server";
import { badRequest } from "~/server/request.server";
import { removeReaderSession } from "~/server/session.server";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const readerId = await getReaderId(request);

  if (!readerId) {
    return redirect("/login");
  }

  try {
    const formData = await request.formData();
    const intent = formData.get("intent");

    if (intent === "logout") {
      return removeReaderSession(request);
    }

    return badRequest({
      message: ErrorMessage,
      success: false,
    });
  } catch (error: any) {
    return json({
      message: error.message || ErrorMessage,
      success: false,
    });
  }
};

export const ErrorBoundary = () => {
  return <ErrorInterface />;
};

const Main: React.FC = () => {
  const actionData = useActionData();
  const { setModalContent } = useBooksToReserveContext();

  useEffect(() => {
    if (actionData && actionData.message && actionData.success === false)
      setModalContent(actionData.message);
  }, [actionData]);

  return <MainOverview />;
};

export default Main;
