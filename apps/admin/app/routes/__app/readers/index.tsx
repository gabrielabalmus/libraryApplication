import LayoutTitle from "~/components/LayoutTitle";
import ReadersOverview from "~/components/Readers/Overview";
import {
  ErrorDelete,
  Readers,
  NewReader,
  SuccessDelete,
} from "~/components/Readers/Readers.const";
import Button from "@/components/Button";
import { ButtonVariant } from "@/components/Button/Button.type";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useSubmit,
} from "@remix-run/react";
import { getPaginatedReaders, deleteReader } from "~/server/readers.server";
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
import { FilterState } from "~/types/Readers.type";
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
    const city = url.searchParams.get("city") || "";

    let pageNumber = 1;
    if (page && checkIfNumber(page)) pageNumber = parseInt(page);

    const [readers, cities] = await Promise.all([
      getPaginatedReaders({
        page: pageNumber,
        search,
        city,
      }),
      getCities(),
    ]);

    return goodRequest({ readers, cities });
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
      const readerId = formData.get("readerId");

      if (!isString(readerId)) {
        return badRequest({
          message: ErrorDelete,
          success: false,
        });
      }

      await deleteReader({ readerId });

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

const PaginatedReaders: React.FC = () => {
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

  const readers = data.readers;
  const cities = data.cities;

  const filterCities = cities.find(
    (item: AutocompleteOptions) => item.name === city
  );

  const [filter, setFilter] = useState<FilterState>({
    search,
    city: filterCities?.id || "",
  });

  const handleCreateReader = () => {
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
        readerId: id,
        intent: "delete",
      },
      {
        method: "delete",
        action: `/readers${location.search}`,
      }
    );
  };

  return (
    <Container>
      <LayoutTitle title={Readers}>
        <Button
          title={NewReader}
          variant={ButtonVariant.contained}
          onClick={handleCreateReader}
        />
      </LayoutTitle>

      <ReadersOverview
        readers={readers}
        page={pageNumber}
        onPageChange={handleChangePage}
        filter={filter}
        onSearchChange={handleSearchChange}
        onCityChange={handleCityChange}
        onDelete={handleDelete}
        cities={cities}
      />
    </Container>
  );
};

export default PaginatedReaders;
