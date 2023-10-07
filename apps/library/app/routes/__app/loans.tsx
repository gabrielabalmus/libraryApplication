import { useActionData, useLoaderData, useSubmit } from "@remix-run/react";
import { cancelLoan, getPaginatedLoans } from "~/server/readers.server";
import { badRequest, goodRequest } from "~/server/request.server";
import { ErrorMessage } from "~/const";
import {
  ActionArgs,
  ActionFunction,
  LoaderArgs,
  redirect,
} from "@remix-run/node";
import { checkIfNumber } from "@/utils/common";
import { useSearchParams } from "react-router-dom";
import ErrorInterface from "~/components/ErrorInterface";
import Container from "@mui/material/Container";
import { getReaderId } from "~/server/readers.server";
import ReadersLoans from "~/components/Readers/Loans";
import { isString } from "lodash";
import {
  ErrorCancelLoan,
  SuccessCancelLoan,
} from "~/components/Readers/Readers.const";
import { useEffect } from "react";
import { useReservedBooksContext } from "~/context/reservedBooks.context";

export const loader = async ({ request }: LoaderArgs) => {
  const readerId = await getReaderId(request);

  if (!readerId) {
    return redirect("/login");
  }

  try {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");

    let pageNumber = 1;
    if (page && checkIfNumber(page)) pageNumber = parseInt(page);

    const loans = await getPaginatedLoans({
      page: pageNumber,
      readerId,
    });

    return goodRequest({
      loans,
    });
  } catch (error: any) {
    throw new Error(error.message || ErrorMessage);
  }
};

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const readerId = await getReaderId(request);

  if (!readerId) {
    return redirect("/login");
  }

  try {
    const formData = await request.formData();

    const intent = formData.get("intent");

    if (intent === "cancel") {
      const loanId = formData.get("loanId");

      if (!isString(loanId)) {
        return badRequest({
          message: ErrorCancelLoan,
          success: false,
        });
      }

      await cancelLoan({ readerId, loanId });

      return goodRequest({
        message: SuccessCancelLoan,
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

const PaginatedLoans: React.FC = () => {
  const data = useLoaderData();
  const actionData = useActionData();
  const submit = useSubmit();

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");

  let pageNumber = 1;
  if (page && checkIfNumber(page)) pageNumber = parseInt(page);

  const loans = data.loans;

  const { setModalError } = useReservedBooksContext();

  useEffect(() => {
    if (actionData && actionData.message && actionData.success === false)
      setModalError(actionData.message);
  }, [actionData]);

  const handleChangePage = (pageNumber: number) => {
    setSearchParams({ page: pageNumber.toString() });
  };

  const handleCancelLoan = (loanId: string) => {
    submit(
      {
        loanId,
        intent: "cancel",
      },
      {
        method: "post",
        action: "/loans",
      }
    );
  };

  return (
    <Container>
      <ReadersLoans
        loans={loans}
        page={pageNumber}
        onPageChange={handleChangePage}
        onCancelLoan={handleCancelLoan}
      />
    </Container>
  );
};

export default PaginatedLoans;
