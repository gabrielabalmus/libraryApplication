import styled from "styled-components";
import { CenteredColumnFlex } from "@/components/Flex";

export const StyledCenteredFlex = styled(CenteredColumnFlex)`
  margin-top: 100px;
  @media (max-width: 900px) {
    margin-top: 50px;
  }
`;
