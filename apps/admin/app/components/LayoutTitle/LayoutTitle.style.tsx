import styled from "styled-components";
import Flex from "@/components/Flex";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { styled as MuiStyled } from "@mui/material/styles";
import collorPalette from "@/theme/colorPalette";
import Button, { ButtonProps } from "@mui/material/Button";

export const StyledTitleFlex = styled(Flex)`
  margin: 15px 0 25px 0;
  align-items: center;
`;

export const StyledArrowIcon = MuiStyled(ArrowBackIosNewIcon)(({ theme }) =>
  theme.unstable_sx({
    height: "20px",
    color: collorPalette.black,
  })
);

export const StyledButton = MuiStyled(Button)<ButtonProps>(({ theme }) =>
  theme.unstable_sx({
    minWidth: "50px",
    justifyContent: "left",
    padding: '10px',
    "&:hover": {
      backgroundColor: "transparent",
    },
  })
);
