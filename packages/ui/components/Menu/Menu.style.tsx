import { styled as MuiStyled } from "@mui/material/styles";
import collorPalette from "@/theme/colorPalette";
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
import { ToolbarProps } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

export const StyledAppBar = MuiStyled(AppBar)<AppBarProps>(({ theme }) =>
  theme.unstable_sx({
    width: { sm: `calc(100% - ${menuWidth}px)` },
    boxShadow: "none",
    backgroundColor: collorPalette.white,
    borderBottom: "3px solid #F2F2F2",
    ml: { sm: `${menuWidth}px` },
  })
);

export const StyledIconButton = MuiStyled(IconButton)<IconButtonProps>(
  ({ theme }) =>
    theme.unstable_sx({
      mr: 2,
      color: collorPalette.black,
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
        color: collorPalette.white,
        paddingLeft: "10px",
      },
      "& .MuiListItemText-root .MuiTypography-root": {
        color: collorPalette.white,
        fontSize: { xs: 16, sm: 17 },
      },
      "&.Mui-selected": {
        backgroundColor: collorPalette.primary.light,
      },
      "&.Mui-selected:hover": {
        backgroundColor: collorPalette.primary.light,
      },
      "&:hover": {
        backgroundColor: "transparent",
      },
    })
);

export const StyledDrawer = MuiStyled(Drawer)<DrawerType>(
  ({ theme, display }) =>
    theme.unstable_sx({
      display: display,
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: menuWidth,
        backgroundColor: collorPalette.primary.base,
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
    borderColor: collorPalette.white,
  })
);
