import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { ActionArgs, ActionFunction, json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { useEffect, useState } from "react";
import MainOverview from "~/components/Main";
import { StyledBox } from "~/components/Main/Main.style";
import { ErrorMessage } from "~/const";
import { badRequest } from "~/server/request.server";
import { removeReaderSession } from "~/server/session.server";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
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

  const [modalError, setModalError] = useState<string>("");

  useEffect(() => {
    if (actionData && actionData.message && actionData.success === false)
      setModalError(actionData.message);
  }, [actionData]);

  const handleModalClose = () => {
    setModalError("");
  };

  return (
    <>
      <MainOverview />
      <Modal open={!!modalError} onClose={handleModalClose}>
        <StyledBox>
          <Typography>{modalError}</Typography>
        </StyledBox>
      </Modal>
    </>
  );
};

export default Main;
