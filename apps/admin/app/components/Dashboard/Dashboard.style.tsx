import Flex from "@/components/Flex";
import styled from "styled-components";

export const StyledFlex = styled(Flex)`
  gap: 20px;
  align-items: end;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: inherit;
  }
`;
