import {
  ActionArgs,
  ActionFunction,
  LoaderArgs,
  redirect,
} from "@remix-run/node";
import ErrorInterface from "~/components/ErrorInterface";
import { ErrorMessage } from "~/const";
import { URLSearchParamsInit } from "react-router-dom";
import { badRequest, goodRequest } from "~/server/request.server";
import { removeUserSession } from "~/server/session.server";
import { getUserId } from "~/server/users.server";
import { useState } from "react";
import { groupLoansRaport } from "~/server/loans.server";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getLibraries } from "~/server/libraries.server";
import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import { DataRaport, FilterState, RaportState } from "~/types/Dashboard.type";
import { Dayjs } from "dayjs";
import { Months, getCorrectYear, getYearFromDate } from "@/utils/common";
import DashboardRaport from "~/components/Dashboard/Raport/DashboardRaport";
import { LoanStatuses } from "~/components/Loans/Loans.const";
import colorPalette from "@/theme/colorPalette";
import LayoutTitle from "~/components/LayoutTitle";
import { Dashboard as DashboardTitle } from "~/components/Dashboard/Dashboard.const";
import Container from "@mui/material/Container";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const url = new URL(request.url);

    const year = url.searchParams.get("year") || "";
    const library = url.searchParams.get("library") || "";
    const status = url.searchParams.get("status") || "";

    const [loansRaport, libraries] = await Promise.all([
      groupLoansRaport({ year, library, status }),
      getLibraries(),
    ]);

    return goodRequest({
      loansRaport,
      libraries,
    });
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

    if (intent === "logout") {
      return removeUserSession(request);
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

const Dashboard: React.FC = () => {
  const data = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const year = searchParams.get("year") || "";
  const status = searchParams.get("status") || "";
  const library = searchParams.get("library") || "";

  const libraries = data.libraries;
  const loansRaport = Months.map((item) => {
    const reportByMonth = data.loansRaport.find(
      (raport: DataRaport) => raport.month === item.value
    );

    if (reportByMonth) return { month: item.name, total: reportByMonth.total };

    return { month: item.name, total: 0 };
  });

  const filterLibrary = libraries.find(
    (item: AutocompleteOptions) => item.name === library
  );

  const filterStatus = LoanStatuses.find(
    (item: AutocompleteOptions) => item.name === status
  );

  const [filter, setFilter] = useState<FilterState>({
    year: getCorrectYear(year).toString(),
    library: filterLibrary?.id || "",
    status: filterStatus?.id || "",
  });

  const raport: RaportState = {
    labels: loansRaport.map((item) => item.month),
    datasets: [
      {
        data: loansRaport.map((item) => item.total),
        backgroundColor: colorPalette.secondary.lighter,
      },
    ],
  };

  const handleYearChange = (value: Dayjs | null) => {
    const newYear = getYearFromDate(value);

    setFilter((oldValue: FilterState) => ({
      ...oldValue,
      year: newYear,
    }));

    let params: URLSearchParamsInit = {};

    if (library) params = { ...params, library };
    if (status) params = { ...params, status };
    if (newYear) params = { ...params, year: newYear };

    setSearchParams(params);
  };

  const handleLibraryChange = (value: AutocompleteOptions | null) => {
    setFilter((oldValue: FilterState) => ({
      ...oldValue,
      library: value?.id || "",
    }));

    let params: URLSearchParamsInit = {};

    if (year) params = { ...params, year };
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

    if (year) params = { ...params, year };
    if (library) params = { ...params, library };
    if (value) params = { ...params, status: value.name };

    setSearchParams(params);
  };

  return (
    <Container>
      <LayoutTitle title={DashboardTitle} />

      <DashboardRaport
        filter={filter}
        raport={raport}
        libraries={libraries}
        onYearChange={handleYearChange}
        onLibraryChange={handleLibraryChange}
        onStatusChange={handleStatusChange}
      />
    </Container>
  );
};

export default Dashboard;
