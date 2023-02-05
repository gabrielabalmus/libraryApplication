import { ActionArgs, ActionFunction } from "@remix-run/node";
import { ErrorMessage } from "~/const";
import { badRequest } from "~/server/request.server";
import { removeUserSession } from "~/server/session.server";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  try {
    const formData = await request.formData();
    const intent = formData.get("intent");

    if (intent === "logout") {
      return removeUserSession({ request, redirectTo: "/login" });
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

const Dashboard: React.FC = () => {
  return <div>Dashboard</div>;
};

export default Dashboard;
