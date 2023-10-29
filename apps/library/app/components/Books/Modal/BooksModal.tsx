import Button from "@/components/Button";
import { ButtonVariant } from "@/components/Button/Button.type";
import Flex, { ColumnFlex } from "@/components/Flex";
import { IconButton, Typography } from "@mui/material";
import { useBooksToReserveContext } from "~/context/booksToReserve.context";
import { ColumnFlexOverflow, StyledBooksList } from "../Books.style";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "@remix-run/react";

const BooksModal: React.FC = () => {
  const navigate = useNavigate();

  const { booksToReserve, setOpenBooksToReserve, removeBookToReserve } =
    useBooksToReserveContext();

  const handleModalClose = () => {
    setOpenBooksToReserve(false);
  };

  const handleReserveBooks = () => {
    setOpenBooksToReserve(false);
    navigate("/reserve-books");
  };

  return (
    <ColumnFlex>
      <Typography variant="h3" textAlign="center" marginBottom="30px">
        Books to reserve
      </Typography>

      {!booksToReserve.length ? (
        <Typography align="center" variant="h1" fontWeight="400">
          No data
        </Typography>
      ) : (
        <ColumnFlexOverflow gap="10px">
          <ColumnFlex>
            <Typography variant="h2">
              City: <b>{booksToReserve[0].city}</b>
            </Typography>
            <Typography variant="h2">
              Library: <b>{booksToReserve[0].library}</b>
            </Typography>
          </ColumnFlex>

          {booksToReserve.map((item, index) => {
            return (
              <StyledBooksList>
                <ColumnFlex>
                  <Typography variant="h2">
                    <b>{item.name}</b> by {item.author}
                  </Typography>
                  <Typography variant="h2">
                    SKU: <b>{item.sku}</b>
                  </Typography>
                </ColumnFlex>

                <IconButton
                  onClick={() => removeBookToReserve(item.bookLibraryId)}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </StyledBooksList>
            );
          })}
        </ColumnFlexOverflow>
      )}
      <Flex marginTop="30px" justifyContent="end" gap="10px">
        <Button
          title="Cancel"
          variant={ButtonVariant.outlined}
          onClick={handleModalClose}
        />
        {!!booksToReserve.length && (
          <Button
            title="Reserve"
            variant={ButtonVariant.contained}
            onClick={handleReserveBooks}
          />
        )}
      </Flex>
    </ColumnFlex>
  );
};

export default BooksModal;
