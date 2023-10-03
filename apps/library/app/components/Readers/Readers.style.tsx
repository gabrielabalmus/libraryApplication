import { ColumnFlex } from "@/components/Flex";
import styled from "styled-components";

export const StyledColumnFlex = styled(ColumnFlex)`
  gap: 20px;
  @media (min-width: 600px) {
    width: 400px;
    margin: 0 auto;
  }
`;
