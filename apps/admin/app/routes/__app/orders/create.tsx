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
import { useEffect, useState } from "react";
import ErrorInterface from "~/components/ErrorInterface";
import LayoutTitle from "~/components/LayoutTitle";
import { ErrorMessage } from "~/const";
import { badRequest, goodRequest } from "~/server/request.server";
import { getUserId } from "~/server/users.server";
import OrdersForm from "~/components/Orders/Forms";
import { getCustomerByEmail } from "~/server/customers.server";
import { OrderState, OrdersSubmitProps } from "~/types/Orders.type";
import {
  CreateOrderTitle,
  initialOrder,
} from "~/components/Orders/Orders.const";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const url = new URL(request.url);
    const email = url.searchParams.get("email") || "";

    const [customer] = await Promise.all([getCustomerByEmail({ email })]);

    return goodRequest({ customer });
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

const CreateOrder: React.FC = () => {
  const submit = useSubmit();
  const actionData = useActionData();
  const navigate = useNavigate();
  const data = useLoaderData();

  const [order, setOrder] = useState<OrderState>(initialOrder);

  const customer = data.customer;

  useEffect(() => {
    if (actionData && actionData.success === true) navigate(`/orders`);
  }, [actionData]);

  const handleOnSubmit = ({ callback }: OrdersSubmitProps) => {
    // submit(
    //   {
    //     ...order,
    //     intent: "create",
    //   },
    //   {
    //     method: "post",
    //     action: "/orders/create",
    //   }
    // );
  };

  return (
    <ColumnFlex>
      <LayoutTitle title={CreateOrderTitle} backUrl="/orders" />
      <OrdersForm
        onSubmit={handleOnSubmit}
        setOrder={setOrder}
        order={order}
        customer={customer}
      />
    </ColumnFlex>
  );
};

export default CreateOrder;
