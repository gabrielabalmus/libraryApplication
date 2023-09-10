import { CenteredColumnFlex, ColumnFlex } from "@/components/Flex";
import styled from "styled-components";
import collorPalette from "@/theme/colorPalette";
import { styled as MuiStyled } from "@mui/material/styles";
import { Typography, TypographyProps } from "@mui/material";

export const StyledImageWrapper = styled.div`
  height: calc(100vh - 65px);
  position: relative;
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

export const StyledHeading = styled(ColumnFlex)`
  gap: 15px;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  top: 12%;
  background-color: rgba(242, 242, 242, 0.4);
  padding: 20px;

  @media (max-width: 600px) {
    top: 7%;
    gap: 10px;
  }

  > h6 {
    line-height: 35px;
  }

  > h6,
  h3 {
    color: white;
    text-shadow: #000 1px 0 10px;
  }
`;

export const StyledTypography = MuiStyled(Typography)<TypographyProps>(
  ({ theme }) =>
    theme.unstable_sx({
      textAlign: "center",
      lineHeight: "25px",
      width: "80%",
    })
);
