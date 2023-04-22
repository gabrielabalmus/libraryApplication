import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import { ErrorState, LoansFormProps } from "~/types/Loans.type";
import Button from "@/components/Button";
import { ButtonType, ButtonVariant } from "@/components/Button/Button.type";
import { StyledFlexButton } from "~/components/Libraries/Libraries.style";
import { Books, Reader } from "../Loans.const";
import { ColumnFlex } from "@/components/Flex";
import Typography from "@mui/material/Typography";
import LoansReaders from "./LoansReaders";
import LoansBooks from "./LoansBooks";

const LoansForm: React.FC<LoansFormProps> = ({ onSubmit, setLoan, loan }) => {
  const navigate = useNavigate();
  const urlParams = useParams();

  const [inputErrors, setInputErrors] = useState<ErrorState>({});

  const handleOnSubmit = () => {
    onSubmit({
      callback: (fieldErrors: ErrorState) => setInputErrors(fieldErrors),
    });
  };

  return (
    <Paper className="overview-paper">
      <ColumnFlex gap="40px" maxWidth="800px">
        <Typography variant="h3">{Reader}</Typography>
        <LoansReaders setLoan={setLoan} loan={loan} />

        <Typography variant="h3">{Books}</Typography>
        <LoansBooks setLoan={setLoan} loan={loan} />
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
        />
      </StyledFlexButton>
    </Paper>
  );
};

export default LoansForm;
