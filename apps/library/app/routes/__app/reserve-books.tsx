import {
  useActionData,
  useLoaderData,
  useNavigate,
  useSubmit,
} from "@remix-run/react";
import { badRequest, goodRequest } from "~/server/request.server";
import { ErrorMessage } from "~/const";
import {
  ActionArgs,
  ActionFunction,
  LoaderArgs,
  redirect,
} from "@remix-run/node";
import ErrorInterface from "~/components/ErrorInterface";
import Container from "@mui/material/Container";
import { getReaderId, getSingleReader } from "~/server/readers.server";
import { isBoolean, isString } from "lodash";
import { useEffect } from "react";
import { useBooksToReserveContext } from "~/context/booksToReserve.context";
import {
  ErrorReserveBooks,
  SuccessReserveBooks,
} from "~/components/Books/Books.const";
import { reserveBooks } from "~/server/books.server";
import ReserveBooksOverview from "~/components/Books/Reserve";

export const loader = async ({ request }: LoaderArgs) => {
  const readerId = await getReaderId(request);

  if (!readerId) {
    return redirect("/login");
  }

  try {
    const reader = await getSingleReader({
      readerId,
    });

    return goodRequest({
      reader,
    });
  } catch (error: any) {
    throw new Error(error.message || ErrorMessage);
  }
};

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const readerId = await getReaderId(request);

  if (!readerId) {
    return redirect("/login");
  }

  try {
    const formData = await request.formData();

    const intent = formData.get("intent");

    if (intent === "reserve") {
      const reader = formData.get("reader");
      const city = formData.get("cityId");
      const library = formData.get("libraryId");
      const books = formData.get("books");

      if (
        !isString(city) ||
        !isString(library) ||
        !isString(reader) ||
        !isString(books)
      ) {
        return badRequest({
          message: ErrorReserveBooks,
          success: false,
        });
      }

      const objectBooks = JSON.parse(books);
      const objectReader = JSON.parse(reader);

      await reserveBooks({
        reader: { ...objectReader, id: readerId },
        city,
        library,
        books: objectBooks,
      });

      return goodRequest({
        message: SuccessReserveBooks,
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

const ReserveBooks: React.FC = () => {
  const data = useLoaderData();
  const actionData = useActionData();
  const submit = useSubmit();
  const { booksToReserve } = useBooksToReserveContext();
  const navigate = useNavigate();

  const reader = data.reader;

  const { setModalContent, resetBooksToReserve } = useBooksToReserveContext();

  useEffect(() => {
    if (actionData && actionData.message && isBoolean(actionData.success)) {
      resetBooksToReserve();
      setModalContent(actionData.message);
      navigate("/");
    }
  }, [actionData]);

  const handleBooksReserve = () => {
    const stringBooks = JSON.stringify(
      booksToReserve.map((item) => item.bookLibraryId)
    );

    const stringReader = JSON.stringify(
      reader
        ? {
            name: reader.name,
            email: reader.email,
          }
        : {}
    );

    submit(
      {
        reader: stringReader,
        cityId: booksToReserve[0].cityId,
        libraryId: booksToReserve[0].libraryId,
        books: stringBooks,
        intent: "reserve",
      },
      {
        method: "post",
        action: "/reserve-books",
      }
    );
  };

  return (
    <Container>
      <ReserveBooksOverview
        reader={reader}
        onBooksReserve={handleBooksReserve}
      />
    </Container>
  );
};

export default ReserveBooks;
