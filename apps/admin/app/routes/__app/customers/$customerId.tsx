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
import CustomersForm from "~/components/Customers/Form/CustomersForm";
import {
  UpdateCustomerTitle,
  ErrorUpdate,
  SuccessUpdate,
  ErrorGetSingle,
} from "~/components/Customers/Customers.const";
import { handleCustomerErrors } from "~/components/Customers/Customers.helper";
import { CustomersSubmitProps, CustomerState } from "~/types/Customers.type";
import { ErrorMessage } from "~/const";
import { getCities } from "~/server/cities.server";
import { getSingleCustomer, updateCustomer } from "~/server/customers.server";
import { badRequest, goodRequest } from "~/server/request.server";
import { getUserId } from "~/server/users.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const url = new URL(request.url);
    const customerId = url.pathname.split("/").pop();

    if (!isString(customerId)) {
      return badRequest({
        message: ErrorGetSingle,
        success: false,
      });
    }

    const [customer, cities] = await Promise.all([
      getSingleCustomer({
        customerId,
      }),
      getCities(),
    ]);

    return goodRequest({ customer, cities });
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

      const url = new URL(request.url);
      const customerId = url.pathname.split("/").pop();

      if (
        !isString(customerId) ||
        !isString(name) ||
        !isString(city) ||
        !isString(address) ||
        !isString(email) ||
        !isString(phone)
      ) {
        return badRequest({
          message: ErrorUpdate,
          success: false,
        });
      }

      const fields = { name, city, address, email, phone };

      const fieldErrors = handleCustomerErrors(fields);

      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({
          message: ErrorUpdate,
          success: false,
        });
      }

      await updateCustomer({ ...fields, customerId });

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

const UpdateCustomer: React.FC = () => {
  const submit = useSubmit();
  const actionData = useActionData();
  const navigate = useNavigate();
  const data = useLoaderData();
  const urlParams = useParams();

  const [customer, setCustomer] = useState<CustomerState>(data.customer);

  const cities = data.cities;

  useEffect(() => {
    if (actionData && actionData.success === true) navigate("/customers");
  }, [actionData]);

  const handleOnSubmit = ({ callback }: CustomersSubmitProps) => {
    const fieldErrors = handleCustomerErrors(customer);

    if (Object.values(fieldErrors).some(Boolean)) {
      callback(fieldErrors);
      return;
    }

    submit(
      {
        ...customer,
        intent: "update",
      },
      {
        method: "post",
        action: `/customers/${urlParams.customerId}`,
      }
    );
  };

  return (
    <ColumnFlex>
      <LayoutTitle title={UpdateCustomerTitle} backUrl="/customers" />
      <CustomersForm
        onSubmit={handleOnSubmit}
        setCustomer={setCustomer}
        customer={customer}
        cities={cities}
      />
    </ColumnFlex>
  );
};

export default UpdateCustomer;
