import { CenteredColumnFlex } from "@/components/Flex";
import styled from "styled-components";
import collorPalette from "@/theme/colorPalette";
import { styled as MuiStyled } from "@mui/material/styles";
import { Typography, TypographyProps } from "@mui/material";

export const StyledImageWrapper = styled.div`
  height: calc(100vh - 65px);
`;

export const StyledImagex = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const StyledColumn = styled(CenteredColumnFlex)`
  background-color: ${collorPalette.primary.lightest};
  padding: 20px;
  border-radius: 5px;
`;

export const StyledTypography = MuiStyled(Typography)<TypographyProps>(
  ({ theme }) =>
    theme.unstable_sx({
      textAlign: "center",
      lineHeight: "25px",
      width: "80%",
    })
);
