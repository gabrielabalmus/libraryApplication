import { ColumnFlex } from "@/components/Flex";
import {
  ActionArgs,
  ActionFunction,
  LoaderArgs,
  redirect,
} from "@remix-run/node";
import { useActionData, useNavigate, useSubmit } from "@remix-run/react";
import { useEffect, useState } from "react";
import ErrorInterface from "~/components/ErrorInterface";
import LayoutTitle from "~/components/LayoutTitle";
import { ErrorMessage } from "~/const";
import { badRequest, goodRequest } from "~/server/request.server";
import { getUserId } from "~/server/users.server";
import LoansForm from "~/components/Loans/Forms";
import { getReaderByEmail } from "~/server/readers.server";
import { LoanState, LoansSubmitProps } from "~/types/Loans.type";
import { CreateLoanTitle, initialLoan } from "~/components/Loans/Loans.const";
import { getBookBySku } from "~/server/books.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const url = new URL(request.url);
    const email = url.searchParams.get("email") || "";
    const sku = url.searchParams.get("sku") || "";

    if (email) {
      const reader = await getReaderByEmail({ email });
      return goodRequest({ reader });
    }

    if (sku) {
      const book = await getBookBySku({ sku });
      return goodRequest({ book });
    }

    return {};
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

const CreateLoan: React.FC = () => {
  const submit = useSubmit();

  const actionData = useActionData();
  const navigate = useNavigate();

  const [loan, setLoan] = useState<LoanState>(initialLoan);

  useEffect(() => {
    if (actionData && actionData.success === true) navigate(`/loans`);
  }, [actionData]);

  const handleOnSubmit = ({ callback }: LoansSubmitProps) => {};

  return (
    <ColumnFlex>
      <LayoutTitle title={CreateLoanTitle} backUrl="/loans" />
      <LoansForm onSubmit={handleOnSubmit} setLoan={setLoan} loan={loan} />
    </ColumnFlex>
  );
};

export default CreateLoan;
