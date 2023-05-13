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
import {
  CreateLoanTitle,
  ErrorCreate,
  SuccessCreate,
  initialLoan,
} from "~/components/Loans/Loans.const";
import { getBookBySku } from "~/server/books.server";
import { handleLoanErrors } from "~/components/Loans/Loans.helper";
import { createLoan } from "~/server/loans.server";
import { isString } from "lodash";
import { Status } from "@prisma/client";

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
      const status = formData.get("status");
      const reader = formData.get("reader");
      const books = formData.get("books");

      if (!isString(status) || !isString(reader) || !isString(books)) {
        return badRequest({
          message: ErrorCreate,
          success: false,
        });
      }

      const objectReader = JSON.parse(reader);
      const objectBooks = JSON.parse(books);

      const fields = {
        status: status as Status,
        reader: objectReader,
        books: objectBooks,
      };

      const fieldErrors = handleLoanErrors(fields);

      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({
          message: ErrorCreate,
          success: false,
        });
      }
      await createLoan(fields);

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

const CreateLoan: React.FC = () => {
  const submit = useSubmit();

  const actionData = useActionData();
  const navigate = useNavigate();

  const [loan, setLoan] = useState<LoanState>(initialLoan);

  useEffect(() => {
    if (actionData && actionData.success === true) navigate(`/loans`);
  }, [actionData]);

  const handleOnSubmit = ({ callback }: LoansSubmitProps) => {
    const fieldErrors = handleLoanErrors(loan);

    if (Object.values(fieldErrors).some(Boolean)) {
      callback(fieldErrors);
      return;
    }

    const stringReader = JSON.stringify(loan.reader);
    const stringBooks = JSON.stringify(loan.books);
    const stringPenalty = JSON.stringify(loan.penalty);

    submit(
      {
        ...loan,
        reader: stringReader,
        books: stringBooks,
        penalty: stringPenalty,
        intent: "create",
      },
      {
        method: "post",
        action: `/loans/create`,
      }
    );
  };

  return (
    <ColumnFlex>
      <LayoutTitle title={CreateLoanTitle} backUrl="/loans" />
      <LoansForm onSubmit={handleOnSubmit} setLoan={setLoan} loan={loan} />
    </ColumnFlex>
  );
};

export default CreateLoan;
