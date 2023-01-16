import { ActionArgs, ActionFunction } from "@remix-run/node";
import { errorMessage } from "~/const";
import { badRequest } from "~/server/request.server";
import { removeUserSession } from "~/server/session.server";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  try {
    const formData = await request.formData();
    const intent = formData.get("intent");

    if (typeof intent !== "string") {
      return badRequest({
        message: errorMessage,
        error: true,
      });
    }

    if (intent === "logout")
      return removeUserSession({ request, redirectTo: "/login" });
  } catch (error: any) {
    return badRequest({
      message: error.message || errorMessage,
      error: true,
    });
  }
};

const Dashboard: React.FC = () => {
  return <div>Dashboard</div>;
};

export default Dashboard;
