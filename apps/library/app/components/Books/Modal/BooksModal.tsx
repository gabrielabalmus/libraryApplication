import Button from "@/components/Button";
import { ButtonVariant } from "@/components/Button/Button.type";
import Flex, { ColumnFlex } from "@/components/Flex";
import { Typography } from "@mui/material";
import { useReservedBooksContext } from "~/context/reservedBooks.context";

const BooksModal: React.FC = () => {
  const { reservedBooks, setOpenReservedBooks } = useReservedBooksContext();

  const handleModalClose = () => {
    setOpenReservedBooks(false);
  };

  return (
    <ColumnFlex>
      <Typography variant="h3" textAlign="center" marginBottom="30px">
        Reserved books
      </Typography>

      {!reservedBooks.length ? (
        <Typography align="center" variant="h1" fontWeight="400">
          No data
        </Typography>
      ) : (
        <Typography variant="h2">
          Library: <b>{reservedBooks[0].library}</b>
        </Typography>
      )}
      <Flex marginTop="30px" justifyContent="end">
        <Button
          title="Cancel"
          variant={ButtonVariant.outlined}
          onClick={handleModalClose}
        />
      </Flex>
    </ColumnFlex>
  );
};

export default BooksModal;
