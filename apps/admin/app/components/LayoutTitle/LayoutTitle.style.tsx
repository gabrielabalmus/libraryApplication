import styled from "styled-components";
import { SpaceBetweenCenterFlex } from "@/components/Flex";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { styled as MuiStyled } from "@mui/material/styles";
import colorPalette from "@/theme/colorPalette";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

export const StyledArrowIcon = MuiStyled(ArrowBackIosNewIcon)(({ theme }) =>
  theme.unstable_sx({
    height: "20px",
    color: colorPalette.black,
  })
);

export const StyledIconButton = MuiStyled(IconButton)<IconButtonProps>(
  ({ theme }) =>
    theme.unstable_sx({
      minWidth: "50px",
      justifyContent: "left",
      padding: "10px",
    })
);

export const StyledHeaderFlex = styled(SpaceBetweenCenterFlex)`
  margin-bottom: 25px;
  @media (max-width: 600px) {
    margin-top: 8px;
  }
`;
