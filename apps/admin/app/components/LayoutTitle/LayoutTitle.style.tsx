import styled from "styled-components";
import { SpaceBetweenCenterFlex } from "@/components/Flex";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { styled as MuiStyled } from "@mui/material/styles";
import collorPalette from "@/theme/colorPalette";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

export const StyledArrowIcon = MuiStyled(ArrowBackIosNewIcon)(({ theme }) =>
  theme.unstable_sx({
    height: "20px",
    color: collorPalette.black,
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
  margin: 15px 0 25px 0;
`;