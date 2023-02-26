import { ColumnFlex } from "@/components/Flex";
import {
  ActionArgs,
  ActionFunction,
  LoaderArgs,
  redirect,
} from "@remix-run/node";
import {
  useActionData,
  useLoaderData,
  useNavigate,
  useSubmit,
} from "@remix-run/react";
import { isString } from "lodash";
import { useEffect, useState } from "react";
import ErrorInterface from "~/components/ErrorInterface";
import LayoutTitle from "~/components/LayoutTitle";
import BooksForm from "~/components/Books/Form";
import {
  CreateBookTitle,
  ErrorCreate,
  initialBook,
  SuccessCreate,
} from "~/components/Books/Books.const";
import { handleBookErrors } from "~/components/Books/Books.helper";
import { BooksSubmitProps, BookState } from "~/components/Books/Books.type";
import { ErrorMessage } from "~/const";
import { getCategories } from "~/server/categories.server";
import { badRequest, goodRequest } from "~/server/request.server";
import { getUserId } from "~/server/users.server";
import { getPublishHouses } from "~/server/publishHouses.server";
import { createBook } from "~/server/books.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const categories = await getCategories();
    const publishHouses = await getPublishHouses();

    return goodRequest({ categories, publishHouses });
  } catch (error: any) {
    throw new Error(error.message || ErrorMessage);
  }
};

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const formData = await request.formData();

    const intent = formData.get("intent");

    if (intent === "create") {
      const name = formData.get("name");
      const author = formData.get("author");
      const category = formData.get("category");
      const publishHouse = formData.get("publishHouse");
      const releaseYear = formData.get("releaseYear");
      const pagesNumber = formData.get("pagesNumber");
      const language = formData.get("language");

      if (
        !isString(name) ||
        !isString(author) ||
        !isString(category) ||
        !isString(publishHouse) ||
        !isString(releaseYear) ||
        !isString(pagesNumber) ||
        !isString(language)
      ) {
        return badRequest({
          message: ErrorCreate,
          success: false,
        });
      }

      const fields = {
        name,
        author,
        category,
        publishHouse,
        releaseYear,
        pagesNumber,
        language,
      };

      const fieldErrors = handleBookErrors(fields);

      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({
          message: ErrorCreate,
          success: false,
        });
      }

      await createBook(fields);

      return goodRequest({
        message: SuccessCreate,
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

const CreateBook: React.FC = () => {
  const submit = useSubmit();
  const actionData = useActionData();
  const navigate = useNavigate();
  const data = useLoaderData();

  const [book, setBook] = useState<BookState>(initialBook);
  const categories = data.categories;
  const publishHouses = data.publishHouses;

  useEffect(() => {
    if (actionData && actionData.success === true) navigate(`/books`);
  }, [actionData]);

  const handleOnSubmit = ({ callback }: BooksSubmitProps) => {
    const fieldErrors = handleBookErrors(book);

    if (Object.values(fieldErrors).some(Boolean)) {
      callback(fieldErrors);
      return;
    }

    submit(
      {
        ...book,
        intent: "create",
      },
      {
        method: "post",
        action: "/books/create",
      }
    );
  };

  return (
    <ColumnFlex>
      <LayoutTitle title={CreateBookTitle} backUrl="/books" />
      <BooksForm
        onSubmit={handleOnSubmit}
        setBook={setBook}
        book={book}
        categories={categories}
        publishHouses={publishHouses}
      />
    </ColumnFlex>
  );
};

export default CreateBook;
