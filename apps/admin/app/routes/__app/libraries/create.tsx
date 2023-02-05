import { ColumnFlex } from "@/components/Flex";
import { ActionArgs, ActionFunction } from "@remix-run/node";
import { useActionData, useNavigate, useSubmit } from "@remix-run/react";
import { isString } from "lodash";
import { useEffect, useState } from "react";
import LayoutTitle from "~/components/LayoutTitle";
import LibrariesForm from "~/components/Libraries/Form/LibrariesForm";
import {
  CreateLibraryTitle,
  ErrorCreate,
  initialLibrary,
  SuccessCreate,
} from "~/components/Libraries/Libraries.const";
import { handleLibraryErrors } from "~/components/Libraries/Libraries.helper";
import {
  LibrariesSubmitProps,
  LibraryState,
} from "~/components/Libraries/Libraries.type";
import { ErrorMessage } from "~/const";
import { createLibrary } from "~/server/libraries.server";
import { badRequest, goodRequest } from "~/server/request.server";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  try {
    const formData = await request.formData();

    const intent = formData.get("intent");

    if (intent === "create") {
      const name = formData.get("name");
      const city = formData.get("city");
      const address = formData.get("address");
      const phone = formData.get("phone");
      const schedule = formData.get("schedule");

      if (
        !isString(name) ||
        !isString(city) ||
        !isString(address) ||
        !isString(phone) ||
        !isString(schedule)
      ) {
        return badRequest({
          message: ErrorCreate,
          success: false,
        });
      }

      const objectSchedule = JSON.parse(schedule);

      const fields = { name, city, address, phone, schedule: objectSchedule };

      const fieldErrors = handleLibraryErrors(fields);

      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({
          message: ErrorCreate,
          success: false,
        });
      }

      await createLibrary(fields);

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

const CreateLibrary: React.FC = () => {
  const submit = useSubmit();
  const actionData = useActionData();
  const navigate = useNavigate();

  const [library, setLibrary] = useState<LibraryState>(initialLibrary);

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
        intent: "create",
      },
      {
        method: "post",
        action: "/libraries/create",
      }
    );
  };

  return (
    <ColumnFlex>
      <LayoutTitle title={CreateLibraryTitle} backIcon={true} />
      <LibrariesForm
        onSubmit={handleOnSubmit}
        setLibrary={setLibrary}
        library={library}
      />
    </ColumnFlex>
  );
};

export default CreateLibrary;
