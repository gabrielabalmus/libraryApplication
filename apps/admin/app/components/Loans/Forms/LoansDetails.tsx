import { LoansDetailsProps } from "~/types/Loans.type";
import { Typography } from "@mui/material";
import { DateColumnFlex, StyleFlex, StyledTypography } from "../Loans.style";
import { BorrowedAt, ReservedAt, ReturnedAt } from "../Loans.const";

const LoansDetails: React.FC<LoansDetailsProps> = ({ loan, setLoan }) => {
  return (
    <StyleFlex>
      {loan.createdAt && (
        <DateColumnFlex>
          <StyledTypography variant="h3">{ReservedAt}</StyledTypography>
          <Typography variant="h2">{loan.createdAt}</Typography>
        </DateColumnFlex>
      )}

      {loan.borrowedAt && (
        <DateColumnFlex>
          <StyledTypography variant="h3">{BorrowedAt}</StyledTypography>
          <Typography variant="h2">{loan.borrowedAt}</Typography>
        </DateColumnFlex>
      )}

      {loan.returnedAt && (
        <DateColumnFlex>
          <StyledTypography variant="h3">{ReturnedAt}</StyledTypography>
          <Typography variant="h2">{loan.returnedAt}</Typography>
        </DateColumnFlex>
      )}
    </StyleFlex>
  );
};

export default LoansDetails;
