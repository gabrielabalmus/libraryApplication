import { ColumnFlex } from "@/components/Flex";
import LayoutTitle from "~/components/LayoutTitle";
import LibrariesOverview from "~/components/Libraries/Overview";
import {
  ErrorDelete,
  Libraries,
  NewLibrary,
  SuccessDelete,
} from "~/components/Libraries/Libraries.const";
import Button from "@/components/Button";
import { ButtonVariant } from "@/components/Button/Button.type";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useSubmit,
} from "@remix-run/react";
import {
  getPaginatedLibraries,
  deleteLibrary,
} from "~/server/libraries.server";
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
import { FilterState } from "~/types/Libraries.type";

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

    let pageNumber = 1;
    if (page && checkIfNumber(page)) pageNumber = parseInt(page);

    const [libraries, cities] = await Promise.all([
      getPaginatedLibraries({
        page: pageNumber,
        search,
        city,
      }),
      getCities(),
    ]);

    return goodRequest({ libraries, cities });
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
      const libraryId = formData.get("libraryId");

      if (!isString(libraryId)) {
        return badRequest({
          message: ErrorDelete,
          success: false,
        });
      }

      await deleteLibrary({ libraryId });

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

const PaginatedLibraries: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = useLoaderData();
  const submit = useSubmit();

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");
  const search = searchParams.get("search") || "";
  const city = searchParams.get("city") || "";

  let pageNumber = 1;
  if (page && checkIfNumber(page)) pageNumber = parseInt(page);

  const libraries = data.libraries;
  const cities = data.cities;

  const filterCities = cities.find(
    (item: AutocompleteOptions) => item.name === city
  );

  const [filter, setFilter] = useState<FilterState>({
    search,
    city: filterCities?.id || "",
  });

  const handleCreateLibrary = () => {
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

      setSearchParams(params);
    }, 500),
    [city]
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
    if (value) params = { ...params, city: value?.name || "" };

    setSearchParams(params);
  };

  const handleDelete = (id: string) => {
    submit(
      {
        libraryId: id,
        intent: "delete",
      },
      {
        method: "delete",
        action: `/libraries${location.search}`,
      }
    );
  };

  return (
    <ColumnFlex>
      <LayoutTitle title={Libraries}>
        <Button
          title={NewLibrary}
          variant={ButtonVariant.contained}
          onClick={handleCreateLibrary}
        />
      </LayoutTitle>

      <LibrariesOverview
        libraries={libraries}
        page={pageNumber}
        onPageChange={handleChangePage}
        filter={filter}
        onSearchChange={handleSearchChange}
        onCityChange={handleCityChange}
        onDelete={handleDelete}
        cities={cities}
      />
    </ColumnFlex>
  );
};

export default PaginatedLibraries;
