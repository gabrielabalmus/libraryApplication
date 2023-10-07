import { ActionArgs, ActionFunction, json, redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { useEffect } from "react";
import MainOverview from "~/components/Main";
import { ErrorMessage } from "~/const";
import { useReservedBooksContext } from "~/context/reservedBooks.context";
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

const Main: React.FC = () => {
  const actionData = useActionData();
  const { setModalError } = useReservedBooksContext();

  useEffect(() => {
    if (actionData && actionData.message && actionData.success === false)
      setModalError(actionData.message);
  }, [actionData]);

  return <MainOverview />;
};

export default Main;
