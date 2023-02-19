import { ColumnFlex } from "@/components/Flex";
import LayoutTitle from "~/components/LayoutTitle";
import BooksOverview from "~/components/Books/Overview";
import {
  ErrorDelete,
  initialBooks,
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
import { checkIfNumber } from "~/components/Libraries/Libraries.helper";
import { useSearchParams, URLSearchParamsInit } from "react-router-dom";
import ErrorInterface from "~/components/ErrorInterface";
import { getUserId } from "~/server/users.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");
    const search = url.searchParams.get("search") || "";

    let pageNumber = 1;
    if (page && checkIfNumber(page)) pageNumber = parseInt(page);

    const books = await getPaginatedBooks({
      page: pageNumber,
      search,
    });

    return goodRequest({ books });
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

  let pageNumber = 1;
  if (page && checkIfNumber(page)) pageNumber = parseInt(page);

  const books = (data && data.books) || initialBooks;

  const [searchValue, setSearchValue] = useState<string>(search);

  const handleCreateBook = () => {
    navigate(`${location.pathname}/create`);
  };

  const handleChangePage = (pageNumber: number) => {
    setSearchParams({ ...searchParams, page: pageNumber.toString() });
  };

  const debounceSearchChange = useCallback(
    debounce((value: string) => {
      const params: URLSearchParamsInit = value && { search: value };
      setSearchParams(params);
    }, 500),
    []
  );

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    debounceSearchChange(value);
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
    <ColumnFlex>
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
        search={searchValue}
        onSearchChange={handleSearchChange}
        onDelete={handleDelete}
      />
    </ColumnFlex>
  );
};

export default PaginatedBooks;
