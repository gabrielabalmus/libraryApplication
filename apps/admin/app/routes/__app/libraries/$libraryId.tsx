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
import { isBoolean, isString } from "lodash";
import { useEffect, useState } from "react";
import ErrorInterface from "~/components/ErrorInterface";
import LayoutTitle from "~/components/LayoutTitle";
import LibrariesForm from "~/components/Libraries/Form";
import {
  UpdateLibraryTitle,
  ErrorUpdate,
  SuccessUpdate,
  ErrorGetSingle,
} from "~/components/Libraries/Libraries.const";
import { handleLibraryErrors } from "~/components/Libraries/Libraries.helper";
import { LibrariesSubmitProps, LibraryState } from "~/types/Libraries.type";
import { ErrorMessage } from "~/const";
import { getCities } from "~/server/cities.server";
import { getSingleLibrary, updateLibrary } from "~/server/libraries.server";
import { badRequest, goodRequest } from "~/server/request.server";
import { getUserId } from "~/server/users.server";
import Container from "@mui/material/Container";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const url = new URL(request.url);
    const libraryId = url.pathname.split("/").pop();

    if (!isString(libraryId)) {
      return badRequest({
        message: ErrorGetSingle,
        success: false,
      });
    }

    const [library, cities] = await Promise.all([
      getSingleLibrary({
        libraryId,
      }),
      getCities(),
    ]);

    return goodRequest({ library, cities });
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
      const phone = formData.get("phone");
      const schedule = formData.get("schedule");

      const url = new URL(request.url);
      const libraryId = url.pathname.split("/").pop();

      if (
        !isString(libraryId) ||
        !isString(name) ||
        !isString(city) ||
        !isString(address) ||
        !isString(phone) ||
        !isString(schedule)
      ) {
        return badRequest({
          message: ErrorUpdate,
          success: false,
        });
      }

      const objectSchedule = JSON.parse(schedule);

      const fields = { name, city, address, phone, schedule: objectSchedule };

      const fieldErrors = handleLibraryErrors(fields);

      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({
          message: ErrorUpdate,
          success: false,
        });
      }

      await updateLibrary({ ...fields, libraryId });

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

const UpdateLibrary: React.FC = () => {
  const submit = useSubmit();
  const actionData = useActionData();
  const navigate = useNavigate();
  const data = useLoaderData();
  const urlParams = useParams();

  const [library, setLibrary] = useState<LibraryState>(data.library);

  const cities = data.cities;

  useEffect(() => {
    if (actionData && isBoolean(actionData.success)) navigate("/libraries");
  }, [actionData]);

  const handleOnSubmit = ({ callback }: LibrariesSubmitProps) => {
    const fieldErrors = handleLibraryErrors(library);

    if (Object.values(fieldErrors).some(Boolean)) {
      callback(fieldErrors);
      return;
    }

    const stringSchedule = JSON.stringify(library.schedule);

    submit(
      {
        ...library,
        schedule: stringSchedule,
        intent: "update",
      },
      {
        method: "post",
        action: `/libraries/${urlParams.libraryId}`,
      }
    );
  };

  return (
    <Container>
      <LayoutTitle title={UpdateLibraryTitle} backUrl="/libraries" />
      <LibrariesForm
        onSubmit={handleOnSubmit}
        setLibrary={setLibrary}
        library={library}
        cities={cities}
      />
    </Container>
  );
};

export default UpdateLibrary;
