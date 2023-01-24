import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled as MuiStyled } from "@mui/material/styles";
import styled from "styled-components";
import Flex from "@/components/Flex";

export const StyledTitle = MuiStyled(Typography)<TypographyProps>(({ theme }) =>
  theme.unstable_sx({
    marginBottom: "10px",
  })
);

export const StyledTypography = MuiStyled(Typography)<TypographyProps>(
  ({ theme }) =>
    theme.unstable_sx({
      minWidth: "120px",
      fontWeight: "600",
    })
);

export const StyledFlexButton = styled(Flex)`
  justify-content: right;
  margin-top: 50px;
  gap: 10px;
  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;
