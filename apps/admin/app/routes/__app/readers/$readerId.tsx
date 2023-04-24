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
  useParams,
  useSubmit,
} from "@remix-run/react";
import { isString } from "lodash";
import { useEffect, useState } from "react";
import ErrorInterface from "~/components/ErrorInterface";
import LayoutTitle from "~/components/LayoutTitle";
import ReadersForm from "~/components/Readers/Form/ReadersForm";
import {
  UpdateReaderTitle,
  ErrorUpdate,
  SuccessUpdate,
  ErrorGetSingle,
} from "~/components/Readers/Readers.const";
import { handleReaderErrors } from "~/components/Readers/Readers.helper";
import { ReadersSubmitProps, ReaderState } from "~/types/Readers.type";
import { ErrorMessage } from "~/const";
import { getCities } from "~/server/cities.server";
import { getSingleReader, updateReader } from "~/server/readers.server";
import { badRequest, goodRequest } from "~/server/request.server";
import { getUserId } from "~/server/users.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const url = new URL(request.url);
    const readerId = url.pathname.split("/").pop();

    if (!isString(readerId)) {
      return badRequest({
        message: ErrorGetSingle,
        success: false,
      });
    }

    const [reader, cities] = await Promise.all([
      getSingleReader({
        readerId,
      }),
      getCities(),
    ]);

    return goodRequest({ reader, cities });
  } catch (error: any) {
    throw new Error(error.message || ErrorMessage);
  }
};

export const ErrorBoundary = () => {
  return <ErrorInterface />;
};

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
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

      const url = new URL(request.url);
      const readerId = url.pathname.split("/").pop();

      if (
        !isString(readerId) ||
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

const UpdateReader: React.FC = () => {
  const submit = useSubmit();
  const actionData = useActionData();
  const navigate = useNavigate();
  const data = useLoaderData();
  const urlParams = useParams();

  const [reader, setReader] = useState<ReaderState>(data.reader);

  const cities = data.cities;

  useEffect(() => {
    if (actionData && actionData.success === true) navigate("/readers");
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
        method: "post",
        action: `/readers/${urlParams.readerId}`,
      }
    );
  };

  return (
    <ColumnFlex>
      <LayoutTitle title={UpdateReaderTitle} backUrl="/readers" />
      <ReadersForm
        onSubmit={handleOnSubmit}
        setReader={setReader}
        reader={reader}
        cities={cities}
      />
    </ColumnFlex>
  );
};

export default UpdateReader;
