import { useLoaderData } from "@remix-run/react";
import { goodRequest } from "~/server/request.server";
import { ErrorMessage } from "~/const";
import ErrorInterface from "~/components/ErrorInterface";
import Container from "@mui/material/Container";
import { getAllLibraries } from "~/server/libraries.server";
import ContactOverview from "~/components/Contact";

export const loader = async () => {
  try {
    const libraries = await getAllLibraries();

    return goodRequest({ libraries });
  } catch (error: any) {
    throw new Error(error.message || ErrorMessage);
  }
};

export const ErrorBoundary = () => {
  return <ErrorInterface />;
};

const Contact: React.FC = () => {
  const data = useLoaderData();
  const libraries = data.libraries;

  return (
    <Container>
      <ContactOverview libraries={libraries} />
    </Container>
  );
};

export default Contact;
