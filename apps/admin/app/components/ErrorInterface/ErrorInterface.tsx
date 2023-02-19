import { Typography } from "@mui/material";
import { StyledCenteredFlex } from "./ErrorInterface.style";

const ErrorInterface: React.FC = () => {
  return (
    <StyledCenteredFlex gap="10px">
      <Typography variant="h5">An error occured!</Typography>
      <Typography variant="h2">Please try again</Typography>
    </StyledCenteredFlex>
  );
};

export default ErrorInterface;
