import { styled as MuiStyled } from "@mui/material/styles";
import colorPalette from "@/theme/colorPalette";
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
import { Link } from "@remix-run/react";
import Typography, { TypographyProps } from "@mui/material/Typography";

export const StyledAppBar = MuiStyled(AppBar)<AppBarProps>(({ theme }) =>
  theme.unstable_sx({
    backgroundColor: colorPalette.white,
  })
);

export const StyledIconButton = MuiStyled(IconButton)<IconButtonProps>(
  ({ theme }) =>
    theme.unstable_sx({
      mr: 2,
      color: colorPalette.black,
    })
);

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledItemButton = MuiStyled(ListItemButton)<ListItemButtonProps>(
  ({ theme }) =>
    theme.unstable_sx({
      "& .MuiListItemIcon-root": {
        color: colorPalette.black,
        paddingLeft: "10px",
      },
      "& .MuiListItemText-root .MuiTypography-root": {
        color: colorPalette.black,
        fontSize: { xs: 16, sm: 17 },
      },
      "&.Mui-selected": {
        backgroundColor: colorPalette.primary.lighter,
      },
      "&.Mui-selected:hover": {
        backgroundColor: colorPalette.primary.lighter,
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
      backgroundColor: colorPalette.white,
      border: "none",
    },
  })
);

export const StyledTitle = MuiStyled(Typography)<TypographyProps>(({ theme }) =>
  theme.unstable_sx({
    color: colorPalette.black,
    fontWeight: 600,
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
    borderColor: colorPalette.grey.light,
  })
);
