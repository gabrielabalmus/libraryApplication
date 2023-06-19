import LayoutTitle from "~/components/LayoutTitle";
import BooksOverview from "~/components/Books/Overview";
import {
  ErrorDelete,
  Books,
  NewBook,
  SuccessDelete,
} from "~/components/Books/Books.const";
import Button from "@/components/Button";
import { ButtonVariant } from "@/components/Button/Button.type";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useSubmit,
} from "@remix-run/react";
import { getPaginatedBooks, deleteBook } from "~/server/books.server";
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
import { getCategories } from "~/server/categories.server";
import { FilterState } from "~/types/Books.type";
import { AutocompleteOptions } from "@/components/Autocomplete/Autocomplete.type";
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
    const category = url.searchParams.get("category") || "";
    const library = url.searchParams.get("library") || "";

    let pageNumber = 1;
    if (page && checkIfNumber(page)) pageNumber = parseInt(page);

    const [books, categories, libraries] = await Promise.all([
      getPaginatedBooks({
        page: pageNumber,
        search,
        category,
        library,
      }),
      getCategories(),
      getLibraries(),
    ]);

    return goodRequest({ books, categories, libraries });
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
      const bookId = formData.get("bookId");

      if (!isString(bookId)) {
        return badRequest({
          message: ErrorDelete,
          success: false,
        });
      }

      await deleteBook({ bookId });

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

const PaginatedBooks: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = useLoaderData();
  const submit = useSubmit();

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const library = searchParams.get("library") || "";

  let pageNumber = 1;
  if (page && checkIfNumber(page)) pageNumber = parseInt(page);

  const books = data.books;
  const categories = data.categories;
  const libraries = data.libraries;

  const filterCategory = categories.find(
    (item: AutocompleteOptions) => item.name === category
  );

  const filterLibrary = libraries.find(
    (item: AutocompleteOptions) => item.name === library
  );

  const [filter, setFilter] = useState<FilterState>({
    search,
    category: filterCategory?.id || "",
    library: filterLibrary?.id || "",
  });

  const handleCreateBook = () => {
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
      if (category) params = { ...params, category };
      if (library) params = { ...params, library };

      setSearchParams(params);
    }, 500),
    [category, library]
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
    if (value) params = { ...params, category: value.name };

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
    if (value) params = { ...params, library: value.name };

    setSearchParams(params);
  };

  const handleDelete = (id: string) => {
    submit(
      {
        bookId: id,
        intent: "delete",
      },
      {
        method: "delete",
        action: `/books${location.search}`,
      }
    );
  };

  return (
    <Container>
      <LayoutTitle title={Books}>
        <Button
          title={NewBook}
          variant={ButtonVariant.contained}
          onClick={handleCreateBook}
        />
      </LayoutTitle>

      <BooksOverview
        books={books}
        page={pageNumber}
        onPageChange={handleChangePage}
        filter={filter}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
        onLibraryChange={handleLibraryChange}
        onDelete={handleDelete}
        categories={categories}
        libraries={libraries}
      />
    </Container>
  );
};

export default PaginatedBooks;
