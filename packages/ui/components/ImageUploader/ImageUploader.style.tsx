import styled from "styled-components";
import { AlignedFlex, ColumnFlex } from "@/components/Flex";
import colorPalette from "@/theme/colorPalette";
import { ImagePaperProps } from "./ImageUploader.type";

export const ImagePaper = styled(ColumnFlex)<ImagePaperProps>`
  gap: 10px;
  padding: 10px;
  border: ${(props) =>
    `1px solid ${props.error ? `#d32f2f` : colorPalette.grey.base}`};
  border-radius: 5px;
`;

export const ImageBox = styled(AlignedFlex)`
  margin: auto;
  flex: auto;
  min-height: 40px;
  max-height: 120px;
`;

export const StyledImage = styled.img`
  max-height: inherit;
  width: 100%;
`;
