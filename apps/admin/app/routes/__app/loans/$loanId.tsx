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
import {
  ErrorGetSingle,
  ErrorUpdate,
  SuccessUpdate,
} from "~/components/Loans/Loans.const";
import { ErrorMessage } from "~/const";
import { getReaderByEmail } from "~/server/readers.server";
import { badRequest, goodRequest } from "~/server/request.server";
import { getUserId } from "~/server/users.server";
import { UpdateLoanTitle } from "~/components/Loans/Loans.const";
import LoansForm from "~/components/Loans/Forms";
import { LoanState, LoansSubmitProps } from "~/types/Loans.type";
import { getSingleLoan, updateLoan } from "~/server/loans.server";
import { getBookBySku } from "~/server/books.server";
import { handleLoanErrors } from "~/components/Loans/Loans.helper";
import { Status } from "@prisma/client";
import Container from "@mui/material/Container";
import { getCities } from "~/server/cities.server";
import { getLibraries } from "~/server/libraries.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const url = new URL(request.url);
    const loanId = url.pathname.split("/").pop();
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

    if (!isString(loanId)) {
      throw new Error(ErrorGetSingle);
    }

    const [loan, cities] = await Promise.all([
      await getSingleLoan({
        loanId,
      }),
      getCities(),
    ]);

    const libraries = await getLibraries(loan.city);

    return goodRequest({ loan, cities, libraries });
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
      const status = formData.get("status");
      const library = formData.get("library");
      const city = formData.get("city");
      const reader = formData.get("reader");
      const books = formData.get("books");

      const url = new URL(request.url);
      const loanId = url.pathname.split("/").pop();

      if (
        !isString(loanId) ||
        !isString(city) ||
        !isString(library) ||
        !isString(status) ||
        !isString(reader) ||
        !isString(books)
      ) {
        return badRequest({
          message: ErrorUpdate,
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
          message: ErrorUpdate,
          success: false,
        });
      }
      await updateLoan({ ...fields, loanId });

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

const UpdateLoan: React.FC = () => {
  const submit = useSubmit();
  const data = useLoaderData();
  const actionData = useActionData();
  const navigate = useNavigate();
  const urlParams = useParams();

  const [loan, setLoan] = useState<LoanState>(data.loan);

  useEffect(() => {
    if (actionData && isBoolean(actionData.success)) navigate(`/loans`);
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

    const { libraryInfo, ...rest } = loan;

    submit(
      {
        ...rest,
        reader: stringReader,
        books: stringBooks,
        penalty: stringPenalty,
        intent: "update",
      },
      {
        method: "post",
        action: `/loans/${urlParams.loanId}`,
      }
    );
  };

  return (
    <Container>
      <LayoutTitle title={UpdateLoanTitle} backUrl="/loans" />
      <LoansForm onSubmit={handleOnSubmit} setLoan={setLoan} loan={loan} />
    </Container>
  );
};

export default UpdateLoan;
