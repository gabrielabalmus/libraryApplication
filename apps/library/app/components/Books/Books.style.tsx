import styled from "styled-components";
import Flex, { CenteredAlignedFlex, ColumnFlex } from "@/components/Flex";
import colorPalette from "@/theme/colorPalette";

export const StyledWrapper = styled(Flex)`
  gap: 30px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledFilter = styled(ColumnFlex)`
  gap: 20px;
  width: 200px;
  background-color: ${colorPalette.primary.lightest};
  padding: 20px;
  flex: 0 0 auto;
  border: 1px solid ${colorPalette.primary.lightest};
  @media (max-width: 900px) {
    width: auto;
  }
`;

export const StyledColumnFlex = styled(ColumnFlex)`
  gap: 30px;
  flex: 1;
  @media (min-width: 900px) {
    margin-top: 20px;
  }
`;

export const StyledFlex = styled(Flex)`
  gap: 30px;
  padding: 20px;
  background-color: ${colorPalette.grey.lightest};
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: inherit;
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const StyledCenteredAlignedFlex = styled(CenteredAlignedFlex)`
  height: 230px;
  width: 220px;
  @media (max-width: 600px) {
    width: initial;
  }
`;

export const StyledAutocomplete = styled(Flex)`
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledImageFlex = styled(Flex)`
  height: 200px;
  margin: 0 auto;
  @media (max-width: 600px) {
    height: 130px;
  }
`;

export const StyledBookBox = styled(ColumnFlex)`
  cursor: pointer;
  gap: 10px;
  border: 1px solid ${colorPalette.grey.light};
  border-radius: 5px;
  padding: 15px;
`;

export const StyledBooksList = styled(Flex)`
  background-color: ${colorPalette.grey.lightest};
  padding: 15px;
  justify-content: space-between;
`;

export const ColumnFlexOverflow = styled(ColumnFlex)`
  overflow: auto;
  max-height: 40vh;
`;

export const StyledBook = styled(Flex)`
  gap: 20px;
  background-color: ${colorPalette.grey.lighter};
  border-radius: 5px;
  padding: 25px;
`;

export const StyledRowFlex = styled(Flex)`
  gap: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const CardFlex = styled(Flex)`
  gap: 10px;
  background-color: ${colorPalette.grey.lightest};
  padding: 10px 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledFlexButton = styled(Flex)`
  justify-content: right;
  margin-top: 20px;
  gap: 10px;
  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;
