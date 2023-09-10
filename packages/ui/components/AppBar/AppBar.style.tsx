import { styled as MuiStyled } from "@mui/material/styles";
import collorPalette from "@/theme/colorPalette";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";
import AppBar, { AppBarProps } from "@mui/material/AppBar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import Divider, { DividerProps } from "@mui/material/Divider";
import { appBarWidth } from "./AppBar.const";
import { ColumnFlex } from "../Flex";
import styled from "styled-components";
import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";

export const StyledAppBar = MuiStyled(AppBar)<AppBarProps>(({ theme }) =>
  theme.unstable_sx({
    boxShadow: "none",
    backgroundColor: collorPalette.primary.base,
  })
);

export const StyledIconButton = MuiStyled(IconButton)<IconButtonProps>(
  ({ theme }) =>
    theme.unstable_sx({
      mr: 2,
      color: collorPalette.white,
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

export const StyledDrawer = MuiStyled(Drawer)<DrawerProps>(({ theme }) =>
  theme.unstable_sx({
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: `${appBarWidth}px`,
      backgroundColor: collorPalette.primary.base,
      border: "none",
    },
  })
);

export const StyledAppBarList = styled(ColumnFlex)`
  height: 100%;
`;

export const StyledToolbar = MuiStyled(Toolbar)<ToolbarProps>(({ theme }) =>
  theme.unstable_sx({
    minHeight: { xs: "20px" },
  })
);

export const StyledDivider = MuiStyled(Divider)<DividerProps>(({ theme }) =>
  theme.unstable_sx({
    marginTop: "auto",
    borderColor: collorPalette.white,
  })
);
