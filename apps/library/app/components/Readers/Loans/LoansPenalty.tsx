import { Typography } from "@mui/material";
import { StyledFlex, EndFlex } from "../Readers.style";
import { Penalty } from "@prisma/client";

const LoansPenalty: React.FC<{ penalty: Penalty }> = ({ penalty }) => (
  <StyledFlex>
    <EndFlex>
      <Typography variant="h2">Days number:</Typography>
      <Typography variant="h2">
        <b>{penalty.days}</b>
      </Typography>
    </EndFlex>

    <EndFlex>
      <Typography variant="h2">Amount:</Typography>
      <Typography variant="h2">
        <b>{penalty.amount} EUR</b>
      </Typography>
    </EndFlex>

    <EndFlex>
      <Typography variant="h2">Paid:</Typography>
      <Typography variant="h2">
        <b>{penalty.paid ? "YES" : "NO"}</b>
      </Typography>
    </EndFlex>
  </StyledFlex>
);

export default LoansPenalty;
