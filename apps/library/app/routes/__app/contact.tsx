import { useLoaderData, useSearchParams } from "@remix-run/react";
import { goodRequest } from "~/server/request.server";
import { ErrorMessage } from "~/const";
import ErrorInterface from "~/components/ErrorInterface";
import Container from "@mui/material/Container";
import { getAllLibraries } from "~/server/libraries.server";
import ContactOverview from "~/components/Contact";
import { checkIfNumber } from "@/utils/common";
import { LoaderArgs } from "@remix-run/node";

export const loader = async ({ request }: LoaderArgs) => {
  try {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");

    let pageNumber = 1;
    if (page && checkIfNumber(page)) pageNumber = parseInt(page);

    const libraries = await getAllLibraries({ page: pageNumber });

    return goodRequest({ libraries });
  } catch (error: any) {
    throw new Error(error.message || ErrorMessage);
  }
};

export const ErrorBoundary = () => {
  return <ErrorInterface />;
};

const PaginatedContact: React.FC = () => {
  const data = useLoaderData();
  const libraries = data.libraries;

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");

  let pageNumber = 1;
  if (page && checkIfNumber(page)) pageNumber = parseInt(page);

  const handleChangePage = (pageNumber: number) => {
    setSearchParams({ page: pageNumber.toString() });
  };

  return (
    <Container>
      <ContactOverview
        libraries={libraries}
        page={pageNumber}
        onPageChange={handleChangePage}
      />
    </Container>
  );
};

export default PaginatedContact;
