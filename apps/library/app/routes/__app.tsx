import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import { LoaderArgs } from "@remix-run/node";
import Spinner from "@/components/Spinner";
import AppBar from "@/components/AppBar";
import { getReaderId } from "~/server/readers.server";
import { goodRequest } from "~/server/request.server";
import { useReservedBooksContext } from "~/context/reservedBooks.context";
import Modal from "@mui/material/Modal";
import { StyledModalBox } from "~/components/Main/Main.style";
import Typography from "@mui/material/Typography";
import BooksModal from "~/components/Books/Modal/BooksModal";
import { ButtonVariant } from "@/components/Button/Button.type";
import Button from "@/components/Button";
import Flex from "@/components/Flex";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getReaderId(request);

  return goodRequest({
    isAuthenticated: !!userId,
  });
};

const AppLayout: React.FC = () => {
  const navigation = useNavigation();
  const submit = useSubmit();
  const loaderData = useLoaderData();
  const { reservedBooks } = useReservedBooksContext();
  const { modalError, setModalError, openReservedBooks, setOpenReservedBooks } =
    useReservedBooksContext();

  const handleLogout = () => {
    submit(
      { intent: "logout" },
      {
        method: "post",
        action: "/?index",
      }
    );
  };

  const handleModalClose = () => {
    setModalError("");
  };

  const handleBooksModalClose = () => {
    setOpenReservedBooks(false);
  };

  const handleBooksModalOpen = () => {
    setOpenReservedBooks(true);
  };

  return (
    <>
      <AppBar
        onLogoutClick={handleLogout}
        isAuthenticated={loaderData?.isAuthenticated || false}
        booksLength={reservedBooks.length}
        openBooksModal={handleBooksModalOpen}
      >
        <Outlet />

        {(navigation.state === "submitting" ||
          navigation.state === "loading") && <Spinner />}
      </AppBar>

      <Modal open={!!modalError} onClose={handleModalClose}>
        <StyledModalBox>
          <Typography>{modalError}</Typography>
          <Flex marginTop="30px" justifyContent="end">
            <Button
              title="Cancel"
              variant={ButtonVariant.outlined}
              onClick={handleModalClose}
            />
          </Flex>
        </StyledModalBox>
      </Modal>

      <Modal open={openReservedBooks} onClose={handleBooksModalClose}>
        <StyledModalBox>
          <BooksModal />
        </StyledModalBox>
      </Modal>
    </>
  );
};

export default AppLayout;
