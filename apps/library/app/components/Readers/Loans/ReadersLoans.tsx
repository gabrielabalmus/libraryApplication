import Paper from "@mui/material/Paper";
import { StyledMainTitle } from "~/components/Contact/Contact.style";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";
import { LoansProps } from "~/types/Readers.type";
import { ColumnFlex } from "@/components/Flex";
import { DetailsFlex, StyledFlex, StyledLoan } from "../Readers.style";
import LoansBooks from "./LoansBooks";
import LoansPenalty from "./LoansPenalty";
import LoansDetails from "./LoansDetails";
import { Status } from "@prisma/client";
import Button from "@/components/Button";
import { ButtonVariant } from "@/components/Button/Button.type";

const ReadersLoans: React.FC<LoansProps> = ({
  loans,
  page,
  onPageChange,
  onCancelLoan,
}) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    onPageChange(newPage + 1);
  };

  return (
    <Paper className="overview-paper">
      <StyledMainTitle variant="h4" marginBottom="40px">
        Reader loans
      </StyledMainTitle>

      <ColumnFlex gap="30px">
        {loans.data.map((loan) => (
          <StyledLoan>
            <DetailsFlex>
              <Typography variant="h3">Details</Typography>
              {loan.status === Status.RESERVED && (
                <Button
                  title="CANCEL"
                  variant={ButtonVariant.contained}
                  onClick={() => onCancelLoan(loan.id)}
                />
              )}
            </DetailsFlex>
            <StyledFlex>
              <Typography variant="h2">
                Loan number: <b>{loan.number}</b>
              </Typography>
              <Typography variant="h2">
                Library: <b>{loan.library}</b>
              </Typography>
              <Typography variant="h2">
                Status: <b>{loan.status}</b>
              </Typography>
            </StyledFlex>

            <Typography variant="h3">Books</Typography>
            <LoansBooks books={loan.books} />

            <LoansDetails loan={loan} />

            {loan.penalty && (
              <>
                <ColumnFlex gap="10px">
                  <Typography variant="h3">Penalty</Typography>
                  <Typography variant="h1">
                    Penalties are calculated according to the number of delayed
                    days multiplied by 0.1 EUR
                  </Typography>
                </ColumnFlex>
                <LoansPenalty penalty={loan.penalty} />
              </>
            )}
          </StyledLoan>
        ))}
      </ColumnFlex>

      {loans.data.length === 0 && (
        <Typography align="center" variant="h1" fontWeight="400">
          No data
        </Typography>
      )}
      <br />
      <TablePagination
        component="div"
        rowsPerPageOptions={[]}
        count={loans.count}
        rowsPerPage={5}
        page={page - 1}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
};

export default ReadersLoans;
