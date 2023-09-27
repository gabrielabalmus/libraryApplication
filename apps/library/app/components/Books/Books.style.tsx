import styled from "styled-components";
import Flex, { ColumnFlex } from "@/components/Flex";
import collorPalette from "@/theme/colorPalette";

export const StyledWrapper = styled(Flex)`
  gap: 30px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledFilter = styled(ColumnFlex)`
  gap: 20px;
  width: 200px;
  background-color: ${collorPalette.primary.lightest};
  padding: 20px;
  flex: 0 0 auto;
  @media (max-width: 900px) {
    width: auto;
  }
`;

export const StyledImage = styled.img`
  max-height: inherit;
  width: 100%;
`;
