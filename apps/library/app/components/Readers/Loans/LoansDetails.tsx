import { Typography } from "@mui/material";
import { DateColumnFlex, StyledFlex } from "../Readers.style";
import { PaginatedLoans } from "~/types/Readers.type";

const LoansDetails: React.FC<{ loan: PaginatedLoans }> = ({ loan }) => {
  return (
    <StyledFlex>
      {loan.createdAt && (
        <DateColumnFlex>
          <Typography variant="h2">Reserved at:</Typography>
          <Typography variant="h2">
            <b>{loan.createdAt}</b>
          </Typography>
        </DateColumnFlex>
      )}

      {loan.borrowedAt && (
        <DateColumnFlex>
          <Typography variant="h2">Borrowed at:</Typography>
          <Typography variant="h2">
            <b>{loan.borrowedAt}</b>
          </Typography>
        </DateColumnFlex>
      )}

      {loan.returnedAt && (
        <DateColumnFlex>
          <Typography variant="h2">Returned at:</Typography>
          <Typography variant="h2">
            <b>{loan.returnedAt}</b>
          </Typography>
        </DateColumnFlex>
      )}
    </StyledFlex>
  );
};

export default LoansDetails;
