import { ColumnFlex } from "@/components/Flex";
import { ActionArgs, ActionFunction } from "@remix-run/node";
import { useActionData, useNavigate, useSubmit } from "@remix-run/react";
import { isString } from "lodash";
import { useEffect } from "react";
import LayoutTitle from "~/components/LayoutTitle";
import LibrariesForm from "~/components/Libraries/Form/LibrariesForm";
import {
  createNewLibrary,
  errorCreate,
  successCreate,
} from "~/components/Libraries/Libraries.const";
import { handleLibraryErrors } from "~/components/Libraries/Libraries.helper";
import { LibrariesSubmitProps } from "~/components/Libraries/Libraries.type";
import { errorMessage } from "~/const";
import { createLibrary } from "~/server/libraries.server";
import { badRequest, goodRequest } from "~/server/request.server";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  try {
    const formData = await request.formData();

    const intent = formData.get("intent");
    const name = formData.get("name");
    const city = formData.get("city");
    const address = formData.get("address");
    const phone = formData.get("phone");
    const schedule = formData.get("schedule");

    if (intent === "create") {
      if (
        !isString(name) ||
        !isString(city) ||
        !isString(address) ||
        !isString(phone) ||
        !isString(schedule)
      ) {
        return badRequest({
          message: errorCreate,
          success: false,
        });
      }

      const objectSchedule = JSON.parse(schedule);

      const fields = { name, city, address, phone, schedule: objectSchedule };

      const fieldErrors = handleLibraryErrors(fields);

      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({
          message: errorCreate,
          success: false,
        });
      }

      await createLibrary(fields);

      return goodRequest({
        message: successCreate,
        success: true,
      });
    }

    return badRequest({
      message: errorMessage,
      success: false,
    });
  } catch (error: any) {
    return badRequest({
      message: error.message || errorMessage,
      success: false,
    });
  }
};

const CreateLibrary: React.FC = () => {
  const submit = useSubmit();
  const actionData = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData && actionData.success === true) navigate("/libraries");
  }, [actionData]);

  const handleOnSubmit = ({ data, callback }: LibrariesSubmitProps) => {
    const fieldErrors = handleLibraryErrors(data);

    if (Object.values(fieldErrors).some(Boolean)) {
      callback(fieldErrors);
      return;
    }

    const stringSchedule = JSON.stringify(data.schedule);

    submit(
      {
        ...data,
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
      <LayoutTitle title={createNewLibrary} backUrl={"/libraries"} />
      <LibrariesForm onSubmit={handleOnSubmit} />
    </ColumnFlex>
  );
};

export default CreateLibrary;
