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
import { isBoolean, isString } from "lodash";
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
import { BooksSubmitProps, BookState } from "~/types/Books.type";
import { ErrorMessage } from "~/const";
import { getCategories } from "~/server/categories.server";
import { badRequest, goodRequest } from "~/server/request.server";
import { getUserId } from "~/server/users.server";
import { getPublishHouses } from "~/server/publishHouses.server";
import { createBook } from "~/server/books.server";
import { getLibraries } from "~/server/libraries.server";
import { uploadImage } from "~/server/media.server";
import { getLanguages } from "~/server/languages.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const [categories, publishHouses, libraries, languages] = await Promise.all(
      [getCategories(), getPublishHouses(), getLibraries(), getLanguages()]
    );

    return goodRequest({ categories, publishHouses, libraries, languages });
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
      const description = formData.get("description");
      const category = formData.get("category");
      const image = formData.get("image");
      const publishHouse = formData.get("publishHouse");
      const releaseYear = formData.get("releaseYear");
      const pagesNumber = formData.get("pagesNumber");
      const language = formData.get("language");
      const bookLibraries = formData.get("bookLibraries");

      if (
        !isString(name) ||
        !isString(author) ||
        !isString(description) ||
        !isString(category) ||
        !isString(image) ||
        !isString(publishHouse) ||
        !isString(releaseYear) ||
        !isString(pagesNumber) ||
        !isString(language) ||
        !isString(bookLibraries)
      ) {
        return badRequest({
          message: ErrorCreate,
          success: false,
        });
      }

      const objectBookLibraries = JSON.parse(bookLibraries);

      const fields = {
        name,
        author,
        description,
        category,
        image,
        publishHouse,
        releaseYear,
        pagesNumber,
        language,
        bookLibraries: objectBookLibraries,
      };

      const fieldErrors = handleBookErrors(fields);

      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({
          message: ErrorCreate,
          success: false,
        });
      }

      const { imageId } = await uploadImage(image);
      await createBook({ ...fields, image: imageId });

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
  const libraries = data.libraries;
  const languages = data.languages;

  useEffect(() => {
    if (actionData && isBoolean(actionData.success)) navigate(`/books`);
  }, [actionData]);

  const handleOnSubmit = ({ callback }: BooksSubmitProps) => {
    const fieldErrors = handleBookErrors(book);

    if (Object.values(fieldErrors).some(Boolean)) {
      callback(fieldErrors);
      return;
    }

    const stringBookLibraries = JSON.stringify(book.bookLibraries);

    submit(
      {
        ...book,
        bookLibraries: stringBookLibraries,
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
        libraries={libraries}
        languages={languages}
      />
    </ColumnFlex>
  );
};

export default CreateBook;
