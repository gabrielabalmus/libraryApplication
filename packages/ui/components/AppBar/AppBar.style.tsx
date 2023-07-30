import { styled as MuiStyled } from "@mui/material/styles";
import collorPalette from "@/theme/colorPalette";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";
import AppBar, { AppBarProps } from "@mui/material/AppBar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Box, { BoxProps } from "@mui/material/Box";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import Divider, { DividerProps } from "@mui/material/Divider";
import { appBarWidth } from "./AppBar.const";

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

export const StyledMainBox = MuiStyled(Box)<BoxProps>(({ theme }) =>
  theme.unstable_sx({
    backgroundColor: collorPalette.grey.lighter,
    flex: 1,
    width: {
      sm: `calc(100% - ${appBarWidth}px`,
    },
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

export const StyledAppBarList = MuiStyled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    flexDirection: "column",
    height: "100%",
  })
);

export const StyledDivider = MuiStyled(Divider)<DividerProps>(({ theme }) =>
  theme.unstable_sx({
    marginTop: "auto",
    borderColor: collorPalette.white,
  })
);
