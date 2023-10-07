import Flex, { ColumnFlex } from "@/components/Flex";
import colorPalette from "@/theme/colorPalette";
import styled from "styled-components";

export const StyledColumnFlex = styled(ColumnFlex)`
  gap: 20px;
  @media (min-width: 600px) {
    width: 400px;
    margin: 0 auto;
  }
`;

export const StyledLoan = styled(ColumnFlex)`
  gap: 20px;
  background-color: ${colorPalette.grey.lighter};
  border-radius: 5px;
  padding: 25px;
`;

export const StyledFlex = styled(Flex)`
  gap: 40px;
  @media (max-width: 950px) {
    gap: 10px;
    flex-direction: column;
  }
`;

export const EndFlex = styled(Flex)`
  gap: 15px;
  align-items: baseline;
  background-color: ${colorPalette.grey.lightest};
  padding: 10px 20px;
`;

export const DateColumnFlex = styled(ColumnFlex)`
  gap: 10px;
  background-color: ${colorPalette.grey.lightest};
  padding: 10px 20px;
`;

export const DetailsFlex = styled(Flex)`
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
