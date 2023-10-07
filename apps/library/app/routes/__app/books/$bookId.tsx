import { useLoaderData } from "@remix-run/react";
import { goodRequest } from "~/server/request.server";
import { ErrorMessage } from "~/const";
import { useState } from "react";
import { LoaderArgs } from "@remix-run/node";
import { checkIfNumber } from "@/utils/common";
import { useSearchParams, URLSearchParamsInit } from "react-router-dom";
import ErrorInterface from "~/components/ErrorInterface";
import { getLibraries } from "~/server/libraries.server";
import { getCities } from "~/server/cities.server";
import { BookFilterState } from "~/types/Books.type";
import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import Container from "@mui/material/Container";
import { isString } from "lodash";
import { getSingleBook } from "~/server/books.server";
import { ErrorGetSingle } from "~/components/Books/Books.const";
import BooksDetails from "~/components/Books/Details";

export const loader = async ({ request }: LoaderArgs) => {
  try {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");
    const city = url.searchParams.get("city") || "";
    const library = url.searchParams.get("library") || "";

    const bookId = url.pathname.split("/").pop();

    if (!isString(bookId)) {
      throw new Error(ErrorGetSingle);
    }

    let pageNumber = 1;
    if (page && checkIfNumber(page)) pageNumber = parseInt(page);

    const [book, libraries, cities] = await Promise.all([
      getSingleBook({
        bookId,
        page: pageNumber,
        library,
        city,
      }),
      getLibraries(city),
      getCities(),
    ]);

    return goodRequest({
      book,
      libraries,
      cities,
    });
  } catch (error: any) {
    throw new Error(error.message || ErrorMessage);
  }
};

export const ErrorBoundary = () => {
  return <ErrorInterface />;
};

const Book: React.FC = () => {
  const data = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");
  const library = searchParams.get("library") || "";
  const city = searchParams.get("city") || "";

  let pageNumber = 1;
  if (page && checkIfNumber(page)) pageNumber = parseInt(page);

  const book = data.book;
  const libraries = data.libraries;
  const cities = data.cities;

  const filterLibrary = libraries.find(
    (item: AutocompleteOptions) => item.name === library
  );

  const filterCity = cities.find(
    (item: AutocompleteOptions) => item.name === city
  );

  const [filter, setFilter] = useState<BookFilterState>({
    library: filterLibrary?.id || "",
    city: filterCity?.id || "",
  });

  const handleChangePage = (pageNumber: number) => {
    let params: URLSearchParamsInit = {};

    if (library) params = { ...params, library };
    if (city) params = { ...params, city };

    setSearchParams({ ...params, page: pageNumber.toString() });
  };

  const handleCityChange = (value: AutocompleteOptions | null) => {
    setFilter((oldValue: BookFilterState) => ({
      ...oldValue,
      city: value?.id || "",
      library: "",
    }));

    let params: URLSearchParamsInit = {};

    if (value) params = { ...params, city: value.name };

    setSearchParams(params);
  };

  const handleLibraryChange = (value: AutocompleteOptions | null) => {
    setFilter((oldValue: BookFilterState) => ({
      ...oldValue,
      library: value?.id || "",
    }));

    let params: URLSearchParamsInit = {};

    if (city) params = { ...params, city };
    if (value) params = { ...params, library: value.name };

    setSearchParams(params);
  };

  return (
    <Container>
      <BooksDetails
        book={book}
        page={pageNumber}
        onPageChange={handleChangePage}
        filter={filter}
        onLibraryChange={handleLibraryChange}
        onCityChange={handleCityChange}
        libraries={libraries}
        cities={cities}
      />
    </Container>
  );
};

export default Book;
