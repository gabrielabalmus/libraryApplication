import Button from "@/components/Button";
import { ButtonVariant } from "@/components/Button/Button.type";
import Flex, { ColumnFlex } from "@/components/Flex";
import { IconButton, Typography } from "@mui/material";
import { useReservedBooksContext } from "~/context/reservedBooks.context";
import { ColumnFlexOverflow, StyledBooksList } from "../Books.style";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const BooksModal: React.FC = () => {
  const { reservedBooks, setOpenReservedBooks, removeReservedBook } =
    useReservedBooksContext();

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
        <ColumnFlexOverflow gap="10px">
          <ColumnFlex>
            <Typography variant="h2">
              City: <b>{reservedBooks[0].city}</b>
            </Typography>
            <Typography variant="h2">
              Library: <b>{reservedBooks[0].library}</b>
            </Typography>
          </ColumnFlex>

          {reservedBooks.map((item, index) => {
            return (
              <StyledBooksList>
                <ColumnFlex>
                  <Typography variant="h2">
                    {index + 1}. <b>{item.name}</b> by {item.author}
                  </Typography>
                  <Typography variant="h2">
                    SKU: <b>{item.sku}</b>
                  </Typography>
                </ColumnFlex>

                <IconButton
                  onClick={() => removeReservedBook(item.bookLibraryId)}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </StyledBooksList>
            );
          })}
        </ColumnFlexOverflow>
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
