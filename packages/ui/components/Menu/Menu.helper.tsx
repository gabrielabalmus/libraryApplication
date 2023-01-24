import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { StyledDivider, StyledItemButton, StyledMenuList } from "./Menu.style";
import { useNavigate, useLocation } from "@remix-run/react";
import LogoutIcon from "@mui/icons-material/Logout";
import { MenuList } from "./Menu.const";

export const handleMenuIndex = (pathName: string) => {
  return MenuList.findIndex(
    (item) => item.url.split("/")[1] === pathName.split("/")[1]
  );
};

export const menuItems = (onLogoutClick: () => void) => {
  const navigate = useNavigate();

  const location = useLocation();
  const pathName = location.pathname;

  return (
    <StyledMenuList>
      <Toolbar />

      <List>
        {MenuList.map((item, index) => (
          <ListItem key={index} disablePadding>
            <StyledItemButton
              disableRipple
              selected={item.url.split("/")[1] === pathName.split("/")[1]}
              onClick={() => navigate(item.url)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>

              <ListItemText primary={item.label} />
            </StyledItemButton>
          </ListItem>
        ))}
      </List>

      <StyledDivider />

      <ListItem disablePadding>
        <StyledItemButton disableRipple onClick={() => onLogoutClick()}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>

          <ListItemText primary={"Logout"} />
        </StyledItemButton>
      </ListItem>
    </StyledMenuList>
  );
};
