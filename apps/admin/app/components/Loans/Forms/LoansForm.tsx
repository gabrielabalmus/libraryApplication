import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import { ErrorState, LoansFormProps } from "~/types/Loans.type";
import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import { StyledFlexButton } from "~/components/Libraries/Libraries.style";
import {
  Books,
  Reader,
  Penalty,
  Details,
  BooksDescription,
  PenaltyDescription,
} from "../Loans.const";
import { AlignedFlex, ColumnFlex } from "@/components/Flex";
import Typography from "@mui/material/Typography";
import LoansReader from "./LoansReader";
import LoansBooks from "./LoansBooks";
import LoansPenalty from "./LoansPenalty";
import LoansDetails from "./LoansDetails";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { LoanFilteredStatuses } from "../Loans.helper";
import { Status } from "@prisma/client";

const LoansForm: React.FC<LoansFormProps> = ({ onSubmit, setLoan, loan }) => {
  const navigate = useNavigate();
  const urlParams = useParams();

  const [currentStatus] = useState<Status | undefined>(
    urlParams.loanId ? loan.status : undefined
  );
  const [errors, setErrors] = useState<ErrorState>({});

  const handleOnSubmit = () => {
    onSubmit({
      callback: (fieldErrors: ErrorState) => setErrors(fieldErrors),
    });
  };

  const filteredStatuses = LoanFilteredStatuses(
    urlParams.loanId ? currentStatus : undefined
  );

  const changeStatus = (event: SelectChangeEvent<Status>) => {
    setLoan((oldLoan) => ({
      ...oldLoan,
      status: event.target.value as Status,
    }));
  };

  return (
    <Paper className="overview-paper">
      <ColumnFlex gap="40px" maxWidth="800px">
        {loan.status && (
          <AlignedFlex gap="20px">
            <Typography variant="h3">Status</Typography>
            <Select
              value={loan.status}
              onChange={changeStatus}
              variant="standard"
            >
              {filteredStatuses.map((item) => (
                <MenuItem value={item.value}>{item.name}</MenuItem>
              ))}
            </Select>
          </AlignedFlex>
        )}

        {loan.createdAt && (
          <>
            <Typography variant="h3">{Details}</Typography>
            <LoansDetails loan={loan} />
          </>
        )}

        <Typography variant="h3">{Reader}</Typography>
        <LoansReader
          setLoan={setLoan}
          loan={loan}
          error={errors}
          setError={setErrors}
        />

        <ColumnFlex gap="10px">
          <Typography variant="h3">{Books}</Typography>
          <Typography variant="h1">{BooksDescription}</Typography>
        </ColumnFlex>
        <LoansBooks
          setLoan={setLoan}
          loan={loan}
          error={errors}
          setError={setErrors}
        />

        {loan.penalty && (
          <>
            <ColumnFlex gap="10px">
              <Typography variant="h3">{Penalty}</Typography>
              <Typography variant="h1">{PenaltyDescription}</Typography>
            </ColumnFlex>

            <LoansPenalty penalty={loan.penalty} />
          </>
        )}
      </ColumnFlex>

      <StyledFlexButton>
        <Button
          title="Cancel"
          variant={ButtonVariant.outlined}
          onClick={() => navigate("/books")}
        />
        <Button
          type={ButtonType.submit}
          title={urlParams.loanId ? "Update" : "Create"}
          variant={ButtonVariant.contained}
          onClick={handleOnSubmit}
          disabled={
            currentStatus === Status.RETURNED ||
            currentStatus === Status.CANCELLED
          }
        />
      </StyledFlexButton>
    </Paper>
  );
};

export default LoansForm;
