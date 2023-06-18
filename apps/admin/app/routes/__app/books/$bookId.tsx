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
  useParams,
  useSubmit,
} from "@remix-run/react";
import { isBoolean, isString } from "lodash";
import { useEffect, useState } from "react";
import { handleBookErrors } from "~/components/Books/Books.helper";
import { BooksSubmitProps, BookState } from "~/types/Books.type";
import BooksForm from "~/components/Books/Form";
import ErrorInterface from "~/components/ErrorInterface";
import LayoutTitle from "~/components/LayoutTitle";
import {
  UpdateBookTitle,
  ErrorUpdate,
  SuccessUpdate,
  ErrorGetSingle,
} from "~/components/Books/Books.const";
import { ErrorMessage } from "~/const";
import { badRequest, goodRequest } from "~/server/request.server";
import { getUserId } from "~/server/users.server";
import { getCategories } from "~/server/categories.server";
import { getPublishHouses } from "~/server/publishHouses.server";
import { getSingleBook, updateBook } from "~/server/books.server";
import { getLibraries } from "~/server/libraries.server";
import { getImage, uploadImage } from "~/server/media.server";
import { getLanguages } from "~/server/languages.server";
import { isValidUrl } from "@/utils/common";
import Container from "@mui/material/Container";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  }

  try {
    const url = new URL(request.url);
    const bookId = url.pathname.split("/").pop();

    if (!isString(bookId)) {
      return badRequest({
        message: ErrorGetSingle,
        success: false,
      });
    }

    const [book, categories, publishHouses, libraries, languages] =
      await Promise.all([
        getSingleBook({
          bookId,
        }),
        getCategories(),
        getPublishHouses(),
        getLibraries(),
        getLanguages(),
      ]);

    if (book.image) book.image = await getImage(book.image);

    return goodRequest({
      book,
      categories,
      publishHouses,
      libraries,
      languages,
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

    if (intent === "update") {
      const name = formData.get("name");
      const author = formData.get("author");
      const description = formData.get("description");
      const image = formData.get("image");
      const category = formData.get("category");
      const publishHouse = formData.get("publishHouse");
      const releaseYear = formData.get("releaseYear");
      const pagesNumber = formData.get("pagesNumber");
      const language = formData.get("language");
      const bookLibraries = formData.get("bookLibraries");

      const url = new URL(request.url);
      const bookId = url.pathname.split("/").pop();

      if (
        !isString(bookId) ||
        !isString(name) ||
        !isString(author) ||
        !isString(description) ||
        !isString(image) ||
        !isString(category) ||
        !isString(publishHouse) ||
        !isString(releaseYear) ||
        !isString(pagesNumber) ||
        !isString(language) ||
        !isString(bookLibraries)
      ) {
        return badRequest({
          message: ErrorUpdate,
          success: false,
        });
      }

      const objectBookLibraries = JSON.parse(bookLibraries);

      const fields = {
        name,
        author,
        description,
        image,
        category,
        publishHouse,
        releaseYear,
        pagesNumber,
        language,
        bookLibraries: objectBookLibraries,
      };

      const fieldErrors = handleBookErrors(fields);

      if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({
          message: ErrorUpdate,
          success: false,
        });
      }

      let imageId;
      if (!isValidUrl(image)) imageId = await uploadImage(image);

      await updateBook({ ...fields, bookId, image: imageId });

      return goodRequest({
        message: SuccessUpdate,
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

const UpdateBook: React.FC = () => {
  const submit = useSubmit();
  const actionData = useActionData();
  const navigate = useNavigate();
  const data = useLoaderData();
  const urlParams = useParams();

  const [book, setBook] = useState<BookState>(data.book);

  const categories = data.categories;
  const publishHouses = data.publishHouses;
  const libraries = data.libraries;
  const languages = data.languages;

  useEffect(() => {
    if (actionData && isBoolean(actionData.success)) navigate("/books");
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
        intent: "update",
      },
      {
        method: "post",
        action: `/books/${urlParams.bookId}`,
      }
    );
  };

  return (
    <Container>
      <LayoutTitle title={UpdateBookTitle} backUrl="/books" />
      <BooksForm
        onSubmit={handleOnSubmit}
        setBook={setBook}
        book={book}
        categories={categories}
        libraries={libraries}
        publishHouses={publishHouses}
        languages={languages}
      />
    </Container>
  );
};

export default UpdateBook;
