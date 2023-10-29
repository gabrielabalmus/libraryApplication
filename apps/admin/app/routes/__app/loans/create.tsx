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
import { isBoolean, isString } from "lodash";
import { Status } from "@prisma/client";
import Container from "@mui/material/Container";
import { getLibraries } from "~/server/libraries.server";
import { getCities } from "~/server/cities.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const url = new URL(request.url);
    const email = url.searchParams.get("email") || "";
    const sku = url.searchParams.get("sku") || "";
    const city = url.searchParams.get("city");

    if (email) {
      const reader = await getReaderByEmail({ email });
      return goodRequest({ reader });
    }

    if (sku) {
      const book = await getBookBySku({ sku });
      return goodRequest({ book });
    }

    if (city) {
      const libraries = await getLibraries(city);
      return goodRequest({ libraries });
    }

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
      const status = formData.get("status");
      const library = formData.get("library");
      const city = formData.get("city");
      const reader = formData.get("reader");
      const books = formData.get("books");

      if (
        !isString(status) ||
        !isString(city) ||
        !isString(library) ||
        !isString(reader) ||
        !isString(books)
      ) {
        return badRequest({
          message: ErrorCreate,
          success: false,
        });
      }

      const objectReader = JSON.parse(reader);
      const objectBooks = JSON.parse(books);

      const fields = {
        status: status as Status,
        city,
        library,
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
    if (actionData && isBoolean(actionData.success)) navigate(`/loans`);
  }, [actionData]);

  const handleOnSubmit = ({ callback }: LoansSubmitProps) => {
    const fieldErrors = handleLoanErrors(loan);

    if (Object.values(fieldErrors).some(Boolean)) {
      callback(fieldErrors);
      return;
    }

    const stringReader = JSON.stringify(
      loan.reader
        ? {
            id: loan.reader.id,
            name: loan.reader.name,
            email: loan.reader.email,
          }
        : {}
    );

    const stringBooks = JSON.stringify(loan.books.map((item) => item.id));

    const { status, library, city } = loan;

    submit(
      {
        status,
        library,
        city,
        reader: stringReader,
        books: stringBooks,
        intent: "create",
      },
      {
        method: "post",
        action: `/loans/create`,
      }
    );
  };

  return (
    <Container>
      <LayoutTitle title={CreateLoanTitle} backUrl="/loans" />
      <LoansForm onSubmit={handleOnSubmit} setLoan={setLoan} loan={loan} />
    </Container>
  );
};

export default CreateLoan;
