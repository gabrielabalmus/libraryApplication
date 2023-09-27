import LayoutTitle from "~/components/LayoutTitle";
import LoansOverview from "~/components/Loans/Overview";
import {
  ErrorDelete,
  Loans,
  NewLoan,
  SuccessDelete,
  LoanStatuses,
} from "~/components/Loans/Loans.const";
import Button from "@/components/Button";
import { ButtonVariant } from "@/components/Button/Button.type";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useSubmit,
} from "@remix-run/react";
import { getPaginatedLoans, deleteLoan } from "~/server/loans.server";
import { badRequest, goodRequest } from "~/server/request.server";
import { ErrorMessage } from "~/const";
import { useCallback, useState } from "react";
import { debounce, isString } from "lodash";
import {
  ActionArgs,
  ActionFunction,
  LoaderArgs,
  redirect,
} from "@remix-run/node";
import { checkIfNumber } from "@/utils/common";
import { useSearchParams, URLSearchParamsInit } from "react-router-dom";
import ErrorInterface from "~/components/ErrorInterface";
import { getUserId } from "~/server/users.server";
import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { FilterState } from "~/types/Loans.type";
import { getLibraries } from "~/server/libraries.server";
import Container from "@mui/material/Container";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");
    const search = url.searchParams.get("search") || "";
    const library = url.searchParams.get("library") || "";
    const status = url.searchParams.get("status") || "";

    let pageNumber = 1;
    if (page && checkIfNumber(page)) pageNumber = parseInt(page);

    const [loans, libraries] = await Promise.all([
      getPaginatedLoans({
        page: pageNumber,
        search,
        library,
        status,
      }),
      getLibraries(),
    ]);

    return goodRequest({ loans, libraries });
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

    if (intent === "delete") {
      const loanId = formData.get("loanId");

      if (!isString(loanId)) {
        return badRequest({
          message: ErrorDelete,
          success: false,
        });
      }

      await deleteLoan({ loanId });

      return goodRequest({
        message: SuccessDelete,
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

const PaginatedLoans: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = useLoaderData();
  const submit = useSubmit();

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");
  const search = searchParams.get("search") || "";
  const library = searchParams.get("library") || "";
  const status = searchParams.get("status") || "";

  let pageNumber = 1;
  if (page && checkIfNumber(page)) pageNumber = parseInt(page);

  const loans = data.loans;
  const libraries = data.libraries;

  const filterLibraries = libraries.find(
    (item: AutocompleteOptions) => item.name === library
  );

  const filterStatus = LoanStatuses.find(
    (item: AutocompleteOptions) => item.name === status
  );

  const [filter, setFilter] = useState<FilterState>({
    search,
    library: filterLibraries?.id || "",
    status: filterStatus?.id || "",
  });

  const handleCreateLoan = () => {
    navigate(`${location.pathname}/create`);
  };

  const handleChangePage = (pageNumber: number) => {
    let params: URLSearchParamsInit = {};

    if (search) params = { ...params, search };
    if (library) params = { ...params, library };
    if (status) params = { ...params, status };

    setSearchParams({ ...params, page: pageNumber.toString() });
  };

  const debounceSearchChange = useCallback(
    debounce((value: string) => {
      let params: URLSearchParamsInit = {};

      if (value) params = { ...params, search: value };
      if (library) params = { ...params, library };
      if (status) params = { ...params, status };

      setSearchParams(params);
    }, 500),
    [library, status]
  );

  const handleSearchChange = (value: string) => {
    setFilter((oldValue: FilterState) => ({ ...oldValue, search: value }));
    debounceSearchChange(value);
  };

  const handleLibraryChange = (value: AutocompleteOptions | null) => {
    setFilter((oldValue: FilterState) => ({
      ...oldValue,
      library: value?.id || "",
    }));

    let params: URLSearchParamsInit = {};

    if (search) params = { ...params, search };
    if (status) params = { ...params, status };
    if (value) params = { ...params, library: value.name };

    setSearchParams(params);
  };

  const handleStatusChange = (value: AutocompleteOptions | null) => {
    setFilter((oldValue: FilterState) => ({
      ...oldValue,
      status: value?.id || "",
    }));

    let params: URLSearchParamsInit = {};

    if (search) params = { ...params, search };
    if (library) params = { ...params, library };
    if (value) params = { ...params, status: value.name };

    setSearchParams(params);
  };

  const handleDelete = (id: string) => {
    submit(
      {
        loanId: id,
        intent: "delete",
      },
      {
        method: "delete",
        action: `/loans${location.search}`,
      }
    );
  };

  return (
    <Container>
      <LayoutTitle title={Loans}>
        <Button
          title={NewLoan}
          variant={ButtonVariant.contained}
          onClick={handleCreateLoan}
        />
      </LayoutTitle>

      <LoansOverview
        loans={loans}
        page={pageNumber}
        onPageChange={handleChangePage}
        filter={filter}
        onSearchChange={handleSearchChange}
        onLibraryChange={handleLibraryChange}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
        libraries={libraries}
      />
    </Container>
  );
};

export default PaginatedLoans;
