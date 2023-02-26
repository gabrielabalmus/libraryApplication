import Flex, { ColumnFlex } from "@/components/Flex";
import styled from "styled-components";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled as MuiStyled } from "@mui/material/styles";

export const StyledFilters = styled(Flex)`
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledTitle = MuiStyled(Typography)<TypographyProps>(({ theme }) =>
  theme.unstable_sx({
    marginBottom: "40px",
  })
);

export const StyledColumnFlex = styled(ColumnFlex)`
  gap: 20px;
  max-width: 350px;
  flex-grow: 1;
  align-self: flex-start;
  @media (max-width: 899px) {
    max-width: 100%;
    align-self: auto;
  }
`;

export const StyleFlex = styled(Flex)`
  gap: 7%;
  flex-direction: row;
  @media (max-width: 900px) {
    gap: 20px;
    flex-direction: column;
  }
`;
