import { ColumnFlex } from "@/components/Flex";
import { ActionArgs, ActionFunction, LoaderArgs } from "@remix-run/node";
import {
  useActionData,
  useLoaderData,
  useNavigate,
  useParams,
  useSubmit,
} from "@remix-run/react";
import { isString } from "lodash";
import { useEffect, useState } from "react";
import LayoutTitle from "~/components/LayoutTitle";
import LibrariesForm from "~/components/Libraries/Form/LibrariesForm";
import {
  UpdateLibraryTitle,
  ErrorUpdate,
  SuccessUpdate,
  ErrorGetSingle,
  initialLibrary,
} from "~/components/Libraries/Libraries.const";
import { handleLibraryErrors } from "~/components/Libraries/Libraries.helper";
import {
  LibrariesSubmitProps,
  LibraryState,
} from "~/components/Libraries/Libraries.type";
import { ErrorMessage } from "~/const";
import { getSingleLibrary, updateLibrary } from "~/server/libraries.server";
import { badRequest, goodRequest } from "~/server/request.server";

export const loader = async ({ request }: LoaderArgs) => {
  try {
    const url = new URL(request.url);
    const libraryId = url.pathname.split("/").pop();

    if (!isString(libraryId)) {
      return badRequest({
        message: ErrorGetSingle,
        success: false,
      });
    }

    const library = await getSingleLibrary({
      libraryId,
    });

    return goodRequest({ library });
  } catch (error: any) {
    return badRequest({
      message: error.message || ErrorMessage,
      success: false,
    });
  }
};

export const action: ActionFunction = async ({ request }: ActionArgs) => {
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
          message: SuccessUpdate,
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

  const initialData = (data && data.library) || initialLibrary;

  const [library, setLibrary] = useState<LibraryState>(initialData);

  useEffect(() => {
    if (actionData && actionData.success === true) navigate(-1);
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
    <ColumnFlex>
      <LayoutTitle title={UpdateLibraryTitle} backIcon={true} />
      <LibrariesForm
        onSubmit={handleOnSubmit}
        setLibrary={setLibrary}
        library={library}
      />
    </ColumnFlex>
  );
};

export default UpdateLibrary;
