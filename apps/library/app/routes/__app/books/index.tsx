import BooksOverview from "~/components/Books/Overview";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { getPaginatedBooks } from "~/server/books.server";
import { goodRequest } from "~/server/request.server";
import { ErrorMessage } from "~/const";
import { useCallback, useState } from "react";
import { debounce, isEmpty } from "lodash";
import { LoaderArgs } from "@remix-run/node";
import { checkIfNumber } from "@/utils/common";
import {
  useSearchParams,
  URLSearchParamsInit,
  createSearchParams,
} from "react-router-dom";
import ErrorInterface from "~/components/ErrorInterface";
import { getCategories } from "~/server/categories.server";
import { getPublishHouses } from "~/server/publishHouses.server";
import { getLanguages } from "~/server/languages.server";
import { getLibraries } from "~/server/libraries.server";
import { getCities } from "~/server/cities.server";
import { FilterState } from "~/types/Books.type";
import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
import Container from "@mui/material/Container";

export const loader = async ({ request }: LoaderArgs) => {
  try {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");
    const search = url.searchParams.get("search") || "";
    const category = url.searchParams.get("category") || "";
    const city = url.searchParams.get("city") || "";
    const library = url.searchParams.get("library") || "";
    const publishHouse = url.searchParams.get("publishHouse") || "";
    const language = url.searchParams.get("language") || "";

    let pageNumber = 1;
    if (page && checkIfNumber(page)) pageNumber = parseInt(page);

    const [books, categories, libraries, publishHouses, languages, cities] =
      await Promise.all([
        getPaginatedBooks({
          page: pageNumber,
          search,
          category,
          library,
          city,
          publishHouse,
          language,
        }),
        getCategories(),
        getLibraries(city),
        getPublishHouses(),
        getLanguages(),
        getCities(),
      ]);

    return goodRequest({
      books,
      categories,
      libraries,
      publishHouses,
      languages,
      cities,
    });
  } catch (error: any) {
    throw new Error(error.message || ErrorMessage);
  }
};

export const ErrorBoundary = () => {
  return <ErrorInterface />;
};

const PaginatedBooks: React.FC = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const library = searchParams.get("library") || "";
  const publishHouse = searchParams.get("publishHouse") || "";
  const language = searchParams.get("language") || "";
  const city = searchParams.get("city") || "";

  let pageNumber = 1;
  if (page && checkIfNumber(page)) pageNumber = parseInt(page);

  const books = data.books;
  const categories = data.categories;
  const libraries = data.libraries;
  const publishHouses = data.publishHouses;
  const languages = data.languages;
  const cities = data.cities;

  const filterCategory = categories.find(
    (item: AutocompleteOptions) => item.name === category
  );

  const filterLibrary = libraries.find(
    (item: AutocompleteOptions) => item.name === library
  );

  const filterPublishHouse = publishHouses.find(
    (item: AutocompleteOptions) => item.name === publishHouse
  );

  const filterLanguage = languages.find(
    (item: AutocompleteOptions) => item.name === language
  );

  const filterCity = cities.find(
    (item: AutocompleteOptions) => item.name === city
  );

  const [filter, setFilter] = useState<FilterState>({
    search,
    category: filterCategory?.id || "",
    library: filterLibrary?.id || "",
    publishHouse: filterPublishHouse?.id || "",
    language: filterLanguage?.id || "",
    city: filterCity?.id || "",
  });

  const handleChangePage = (pageNumber: number) => {
    let params: URLSearchParamsInit = {};

    if (search) params = { ...params, search };
    if (library) params = { ...params, library };
    if (publishHouse) params = { ...params, publishHouse };
    if (language) params = { ...params, language };
    if (category) params = { ...params, category };
    if (city) params = { ...params, city };

    setSearchParams({ ...params, page: pageNumber.toString() });
  };

  const debounceSearchChange = useCallback(
    debounce((value: string) => {
      let params: URLSearchParamsInit = {};

      if (value) params = { ...params, search: value };
      if (category) params = { ...params, category };
      if (library) params = { ...params, library };
      if (publishHouse) params = { ...params, publishHouse };
      if (language) params = { ...params, language };
      if (city) params = { ...params, city };

      setSearchParams(params);
    }, 500),
    [category, library, publishHouse, language, city]
  );

  const handleSearchChange = (value: string) => {
    setFilter((oldValue: FilterState) => ({ ...oldValue, search: value }));
    debounceSearchChange(value);
  };

  const handleCategoryChange = (value: AutocompleteOptions | null) => {
    setFilter((oldValue: FilterState) => ({
      ...oldValue,
      category: value?.id || "",
    }));

    let params: URLSearchParamsInit = {};

    if (search) params = { ...params, search };
    if (library) params = { ...params, library };
    if (publishHouse) params = { ...params, publishHouse };
    if (language) params = { ...params, language };
    if (city) params = { ...params, city };
    if (value) params = { ...params, category: value.name };

    setSearchParams(params);
  };

  const handleCityChange = (value: AutocompleteOptions | null) => {
    setFilter((oldValue: FilterState) => ({
      ...oldValue,
      city: value?.id || "",
      library: "",
    }));

    let params: URLSearchParamsInit = {};

    if (search) params = { ...params, search };
    if (category) params = { ...params, category };
    if (publishHouse) params = { ...params, publishHouse };
    if (language) params = { ...params, language };
    if (value) params = { ...params, city: value.name };

    setSearchParams(params);
  };

  const handleLibraryChange = (value: AutocompleteOptions | null) => {
    setFilter((oldValue: FilterState) => ({
      ...oldValue,
      library: value?.id || "",
    }));

    let params: URLSearchParamsInit = {};

    if (search) params = { ...params, search };
    if (category) params = { ...params, category };
    if (publishHouse) params = { ...params, publishHouse };
    if (language) params = { ...params, language };
    if (city) params = { ...params, city };
    if (value) params = { ...params, library: value.name };

    setSearchParams(params);
  };

  const handlePublishHouseChange = (value: AutocompleteOptions | null) => {
    setFilter((oldValue: FilterState) => ({
      ...oldValue,
      publishHouse: value?.id || "",
    }));

    let params: URLSearchParamsInit = {};

    if (search) params = { ...params, search };
    if (category) params = { ...params, category };
    if (library) params = { ...params, library };
    if (language) params = { ...params, language };
    if (city) params = { ...params, city };
    if (value) params = { ...params, publishHouse: value.name };

    setSearchParams(params);
  };

  const handleLanguageChange = (value: AutocompleteOptions | null) => {
    setFilter((oldValue: FilterState) => ({
      ...oldValue,
      language: value?.id || "",
    }));

    let params: URLSearchParamsInit = {};

    if (search) params = { ...params, search };
    if (category) params = { ...params, category };
    if (library) params = { ...params, library };
    if (publishHouse) params = { ...params, publishHouse };
    if (city) params = { ...params, city };
    if (value) params = { ...params, language: value.name };

    setSearchParams(params);
  };

  const handleBookSelect = (bookId: string) => {
    let search = "";
    let searchObject: { city?: string; library?: string } = {};

    if (city) searchObject.city = city;
    if (library) searchObject.library = library;

    if (!isEmpty(searchObject)) {
      search = `?${createSearchParams(searchObject).toString()}`;
    }
    navigate({
      pathname: `/books/${bookId}`,
      search,
    });
  };

  return (
    <Container>
      <BooksOverview
        books={books}
        page={pageNumber}
        onPageChange={handleChangePage}
        filter={filter}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
        onLibraryChange={handleLibraryChange}
        onPublishHouseChange={handlePublishHouseChange}
        onLanguageChange={handleLanguageChange}
        onCityChange={handleCityChange}
        onBookSelect={handleBookSelect}
        categories={categories}
        libraries={libraries}
        publishHouses={publishHouses}
        languages={languages}
        cities={cities}
      />
    </Container>
  );
};

export default PaginatedBooks;
