import { styled as MuiStyled } from "@mui/material/styles";
import colorPalette from "@/theme/colorPalette";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";
import { menuWidth } from "./Menu.const";
import AppBar, { AppBarProps } from "@mui/material/AppBar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Divider, { DividerProps } from "@mui/material/Divider";
import { DrawerType } from "./Menu.type";
import { ColumnFlex } from "../Flex";
import styled from "styled-components";
import { Box, BoxProps, ToolbarProps } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

export const StyledAppBar = MuiStyled(AppBar)<AppBarProps>(({ theme }) =>
  theme.unstable_sx({
    width: { sm: `calc(100% - ${menuWidth}px)` },
    boxShadow: "none",
    backgroundColor: colorPalette.white,
    borderBottom: `3px solid ${colorPalette.grey.lighter}`,
    ml: { sm: `${menuWidth}px` },
  })
);

export const StyledIconButton = MuiStyled(IconButton)<IconButtonProps>(
  ({ theme }) =>
    theme.unstable_sx({
      mr: 2,
      color: colorPalette.black,
      display: { sm: "none" },
    })
);

export const StyledToolbar = MuiStyled(Toolbar)<ToolbarProps>(({ theme }) =>
  theme.unstable_sx({
    minHeight: { xs: "20px", sm: "50px" },
  })
);

export const StyledItemButton = MuiStyled(ListItemButton)<ListItemButtonProps>(
  ({ theme }) =>
    theme.unstable_sx({
      "& .MuiListItemIcon-root": {
        color: colorPalette.white,
        paddingLeft: "10px",
      },
      "& .MuiListItemText-root .MuiTypography-root": {
        color: colorPalette.white,
        fontSize: { xs: 16, sm: 17 },
      },
      "&.Mui-selected": {
        backgroundColor: colorPalette.primary.light,
      },
      "&.Mui-selected:hover": {
        backgroundColor: colorPalette.primary.light,
      },
      "&:hover": {
        backgroundColor: "transparent",
      },
    })
);

export const StyledDrawer = MuiStyled(Drawer)<DrawerType>(
  ({ theme, display }) =>
    theme.unstable_sx({
      display,
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: menuWidth,
        backgroundColor: colorPalette.primary.base,
        border: "none",
      },
    })
);

export const StyledMenuList = styled(ColumnFlex)`
  height: 100%;
`;

export const StyledDivider = MuiStyled(Divider)<DividerProps>(({ theme }) =>
  theme.unstable_sx({
    marginTop: "auto",
    borderColor: colorPalette.white,
  })
);

export const StyledMainBox = MuiStyled(Box)<BoxProps>(({ theme }) =>
  theme.unstable_sx({
    width: { sm: `calc(100% - ${menuWidth}px)` },
  })
);
