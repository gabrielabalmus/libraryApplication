import { LoansPenaltyProps } from "~/types/Loans.type";
import { Typography } from "@mui/material";
import { StyleFlex, StyledTypography } from "../Loans.style";
import { EndFlex } from "../Loans.style";
import { Amount, DaysNumber, Paid } from "../Loans.const";

const LoansPenalty: React.FC<LoansPenaltyProps> = ({ penalty }) => (
  <StyleFlex>
    <EndFlex>
      <StyledTypography variant="h3">{DaysNumber}</StyledTypography>
      <Typography variant="h2">{penalty.days}</Typography>
    </EndFlex>

    <EndFlex>
      <StyledTypography variant="h3">{Amount}</StyledTypography>
      <Typography variant="h2">{penalty.amount} EUR</Typography>
    </EndFlex>

    <EndFlex>
      <StyledTypography variant="h3">{Paid}</StyledTypography>
      <Typography variant="h2">{penalty.paid ? "YES" : "NO"}</Typography>
    </EndFlex>
  </StyleFlex>
);

export default LoansPenalty;
