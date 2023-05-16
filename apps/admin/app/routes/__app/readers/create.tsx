import { ColumnFlex } from "@/components/Flex";
import {
  ActionArgs,
  ActionFunction,
  LoaderArgs,
  redirect,
} from "@remix-run/node";
import {
  useActionData,
  useLoaderData,
  useNavigate,
  useSubmit,
} from "@remix-run/react";
import { isBoolean, isString } from "lodash";
import { useEffect, useState } from "react";
import ErrorInterface from "~/components/ErrorInterface";
import LayoutTitle from "~/components/LayoutTitle";
import ReadersForm from "~/components/Readers/Form/ReadersForm";
import {
  CreateReaderTitle,
  ErrorCreate,
  initialReader,
  SuccessCreate,
} from "~/components/Readers/Readers.const";
import { handleReaderErrors } from "~/components/Readers/Readers.helper";
import { ReadersSubmitProps, ReaderState } from "~/types/Readers.type";
import { ErrorMessage } from "~/const";
import { getCities } from "~/server/cities.server";
import { createReader } from "~/server/readers.server";
import { badRequest, goodRequest } from "~/server/request.server";
import { getUserId } from "~/server/users.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const cities = await getCities();

    return goodRequest({ cities });
  } catch (error: any) {
    throw new Error(error.message || ErrorMessage);
  }
};

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const formData = await request.formData();

    const intent = formData.get("intent");

    if (intent === "create") {
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
          message: ErrorCreate,
          success: false,
        });
      }

      const fields = { name, city, address, email, phone, birthdate };

      const fieldErrors = handleReaderErrors(fields);

      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({
          message: ErrorCreate,
          success: false,
        });
      }

      await createReader(fields);

      return goodRequest({
        message: SuccessCreate,
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

const CreateReader: React.FC = () => {
  const submit = useSubmit();
  const actionData = useActionData();
  const navigate = useNavigate();
  const data = useLoaderData();

  const [reader, setReader] = useState<ReaderState>(initialReader);

  const cities = data.cities;

  useEffect(() => {
    if (actionData && isBoolean(actionData.success)) navigate("/readers");
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
        intent: "create",
      },
      {
        method: "post",
        action: "/readers/create",
      }
    );
  };

  return (
    <ColumnFlex>
      <LayoutTitle title={CreateReaderTitle} backUrl="/readers" />
      <ReadersForm
        onSubmit={handleOnSubmit}
        setReader={setReader}
        reader={reader}
        cities={cities}
      />
    </ColumnFlex>
  );
};

export default CreateReader;
