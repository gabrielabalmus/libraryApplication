import {
  ActionArgs,
  ActionFunction,
  LoaderArgs,
  redirect,
} from "@remix-run/node";
import { useActionData, useLoaderData, useSubmit } from "@remix-run/react";
import { isBoolean, isString } from "lodash";
import { useEffect, useState } from "react";
import ErrorInterface from "~/components/ErrorInterface";
import ReadersForm from "~/components/Readers/Form";
import { ErrorUpdate, SuccessUpdate } from "~/components/Readers/Readers.const";
import { handleReaderErrors } from "~/components/Readers/Readers.helper";
import {
  AlertDataState,
  ReadersSubmitProps,
  ReaderState,
} from "~/types/Readers.type";
import { ErrorMessage } from "~/const";
import { getCities } from "~/server/cities.server";
import {
  updateReader,
  getReaderId,
  getSingleReader,
} from "~/server/readers.server";
import { badRequest, goodRequest } from "~/server/request.server";
import Container from "@mui/material/Container";

export const loader = async ({ request }: LoaderArgs) => {
  const readerId = await getReaderId(request);

  if (!readerId) {
    return redirect("/login");
  }

  try {
    const [reader, cities] = await Promise.all([
      getSingleReader({
        readerId,
      }),
      getCities(),
    ]);

    return goodRequest({ reader, cities, readerId });
  } catch (error: any) {
    throw new Error(error.message || ErrorMessage);
  }
};

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const readerId = await getReaderId(request);

  if (!readerId) {
    return redirect("/login");
  }

  try {
    const formData = await request.formData();

    const intent = formData.get("intent");

    if (intent === "update") {
      const name = formData.get("name");
      const city = formData.get("city");
      const address = formData.get("address");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const birthdate = formData.get("birthdate");

      if (
        !isString(name) ||
        !isString(city) ||
        !isString(address) ||
        !isString(email) ||
        !isString(phone) ||
        !isString(birthdate)
      ) {
        return badRequest({
          message: ErrorUpdate,
          success: false,
        });
      }

      const fields = { name, city, address, email, phone, birthdate };

      const fieldErrors = handleReaderErrors(fields);

      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({
          message: ErrorUpdate,
          success: false,
        });
      }

      await updateReader({ ...fields, readerId });

      return goodRequest({
        message: SuccessUpdate,
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

const Account: React.FC = () => {
  const submit = useSubmit();
  const actionData = useActionData();
  const data = useLoaderData();

  const [reader, setReader] = useState<ReaderState>(data.reader);
  const [messageData, setMessageData] = useState<AlertDataState>();

  const cities = data.cities;

  useEffect(() => {
    if (actionData && actionData.message && isBoolean(actionData.success))
      setMessageData(actionData);
  }, [actionData]);

  const handleOnSubmit = ({ callback }: ReadersSubmitProps) => {
    const fieldErrors = handleReaderErrors(reader);

    if (Object.values(fieldErrors).some(Boolean)) {
      callback(fieldErrors);
      return;
    }

    submit(
      {
        ...reader,
        intent: "update",
      },
      {
        method: "put",
        action: "/account",
      }
    );
  };

  return (
    <Container>
      <ReadersForm
        onSubmit={handleOnSubmit}
        setReader={setReader}
        reader={reader}
        cities={cities}
        messageData={messageData}
        readerId={data.readerId}
      />
    </Container>
  );
};

export default Account;
