import { ColumnFlex } from "@/components/Flex";
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
import { getCities } from "~/server/cities.server";
import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { FilterState } from "~/types/Loans.type";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");
    const search = url.searchParams.get("search") || "";
    const city = url.searchParams.get("city") || "";
    const status = url.searchParams.get("status") || "";

    let pageNumber = 1;
    if (page && checkIfNumber(page)) pageNumber = parseInt(page);

    const [loans, cities] = await Promise.all([
      getPaginatedLoans({
        page: pageNumber,
        search,
        city,
        status,
      }),
      getCities(),
    ]);

    return goodRequest({ loans, cities });
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
  const city = searchParams.get("city") || "";
  const status = searchParams.get("status") || "";

  let pageNumber = 1;
  if (page && checkIfNumber(page)) pageNumber = parseInt(page);

  const loans = data.loans;
  const cities = data.cities;

  const filterCities = cities.find(
    (item: AutocompleteOptions) => item.name === city
  );

  const filterStatus = LoanStatuses.find(
    (item: AutocompleteOptions) => item.name === status
  );

  const [filter, setFilter] = useState<FilterState>({
    search,
    city: filterCities?.id || "",
    status: filterStatus?.id || "",
  });

  const handleCreateLoan = () => {
    navigate(`${location.pathname}/create`);
  };

  const handleChangePage = (pageNumber: number) => {
    setSearchParams((oldSearchParams: URLSearchParams) => ({
      ...oldSearchParams,
      page: pageNumber.toString(),
    }));
  };

  const debounceSearchChange = useCallback(
    debounce((value: string) => {
      let params: URLSearchParamsInit = {};

      if (value) params = { ...params, search: value };
      if (city) params = { ...params, city };
      if (status) params = { ...params, status };

      setSearchParams(params);
    }, 500),
    [city, status]
  );

  const handleSearchChange = (value: string) => {
    setFilter((oldValue: FilterState) => ({ ...oldValue, search: value }));
    debounceSearchChange(value);
  };

  const handleCityChange = (value: AutocompleteOptions | null) => {
    setFilter((oldValue: FilterState) => ({
      ...oldValue,
      city: value?.id || "",
    }));

    let params: URLSearchParamsInit = {};

    if (search) params = { ...params, search };
    if (status) params = { ...params, status };
    if (value) params = { ...params, city: value?.name || "" };

    setSearchParams(params);
  };

  const handleStatusChange = (value: AutocompleteOptions | null) => {
    setFilter((oldValue: FilterState) => ({
      ...oldValue,
      status: value?.id || "",
    }));

    let params: URLSearchParamsInit = {};

    if (search) params = { ...params, search };
    if (city) params = { ...params, city };
    if (value) params = { ...params, status: value?.name || "" };

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
    <ColumnFlex>
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
        onCityChange={handleCityChange}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
        cities={cities}
      />
    </ColumnFlex>
  );
};

export default PaginatedLoans;
