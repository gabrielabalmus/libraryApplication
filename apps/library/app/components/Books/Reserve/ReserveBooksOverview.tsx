import { Paper, Typography } from "@mui/material";
import { ReserveBooksProps } from "~/types/Books.type";
import { useBooksToReserveContext } from "~/context/booksToReserve.context";
import ReserveBooksList from "./ReserveBooksList";
import { StyledMainTitle } from "~/components/Contact/Contact.style";
import { ColumnFlex } from "@/components/Flex";
import { CardFlex, StyledFlexButton, StyledRowFlex } from "../Books.style";
import ReserveBooksReader from "./ReserveBooksReader";
import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import { useNavigate } from "@remix-run/react";

const ReserveBooksOverview: React.FC<ReserveBooksProps> = ({
  reader,
  onBooksReserve,
}) => {
  const { booksToReserve } = useBooksToReserveContext();
  const navigate = useNavigate();

  return (
    <Paper className="overview-paper">
      <StyledMainTitle variant="h4" marginBottom="40px">
        Reserve
      </StyledMainTitle>

      {!booksToReserve.length ? (
        <Typography align="center" variant="h1" fontWeight="400">
          No data
        </Typography>
      ) : (
        <ColumnFlex gap="30px">
          <Typography variant="h3">Customer</Typography>

          <ReserveBooksReader reader={reader} />

          <Typography variant="h3">Books</Typography>

          <ColumnFlex gap="20px">
            <StyledRowFlex>
              <CardFlex>
                <Typography variant="h2">City:</Typography>
                <Typography variant="h3">{booksToReserve[0].city}</Typography>
              </CardFlex>

              <CardFlex>
                <Typography variant="h2">Library:</Typography>
                <Typography variant="h3">
                  {booksToReserve[0].library}
                </Typography>
              </CardFlex>
            </StyledRowFlex>

            <ReserveBooksList />
          </ColumnFlex>

          <StyledFlexButton>
            <Button
              title="Cancel"
              variant={ButtonVariant.outlined}
              onClick={() => navigate("/")}
            />
            <Button
              type={ButtonType.submit}
              title="Confirm"
              variant={ButtonVariant.contained}
              onClick={onBooksReserve}
            />
          </StyledFlexButton>
        </ColumnFlex>
      )}
    </Paper>
  );
};

export default ReserveBooksOverview;
