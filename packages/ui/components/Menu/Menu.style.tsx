import Typography, { TypographyProps } from "@mui/material/Typography";
import ComponentStyled from "styled-components";
import Flex from "@/components/Flex";
import { styled as MuiStyled } from "@mui/material/styles";
import collorPalette from "@/theme/colorPalette";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";
import { menuWidth } from "./Menu.const";
import AppBar, { AppBarProps } from "@mui/material/AppBar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Box, { BoxProps } from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { DrawerType } from "./Menu.types";

export const StyledFlex = ComponentStyled(Flex)`
  min-height: 100vh;
`;

export const AppBarTitle = MuiStyled(Typography)<TypographyProps>(({ theme }) =>
  theme.unstable_sx({
    color: collorPalette.black,
    fontWeight: 600,
    fontSize: 23,
  })
);

export const StyledAppBar = MuiStyled(AppBar)<AppBarProps>(({ theme }) =>
  theme.unstable_sx({
    width: { sm: `calc(100% - ${menuWidth}px)` },
    boxShadow: "none",
    backgroundColor: collorPalette.white,
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

export const StyledMainBox = MuiStyled(Box)<BoxProps>(({ theme }) =>
  theme.unstable_sx({
    backgroundColor: collorPalette.grey.lighter,
    flexGrow: 1,
    p: 3,
    width: {
      sm: `calc(100% - ${menuWidth}px)`,
    },
  })
);

export const StyledItemButton = MuiStyled(ListItemButton)<ListItemButtonProps>(
  ({ theme }) =>
    theme.unstable_sx({
      color: collorPalette.white,
      "& .MuiListItemIcon-root": {
        color: collorPalette.white,
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
      },
    })
);
