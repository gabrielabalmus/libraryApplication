import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  StyledDivider,
  StyledItemButton,
  StyledMenuList,
  StyledToolbar,
} from "./Menu.style";
import { useNavigate, useLocation } from "@remix-run/react";
import LogoutIcon from "@mui/icons-material/Logout";
import { MenuList } from "./Menu.const";

export const menuItems = (onLogoutClick: () => void) => {
  const navigate = useNavigate();

  const location = useLocation();
  const pathName = location.pathname;

  return (
    <StyledMenuList>
      <StyledToolbar />

      <List>
        {MenuList.map((item, index) => (
          <ListItem key={index} disablePadding>
            <StyledItemButton
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
        <StyledItemButton onClick={() => onLogoutClick()}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>

          <ListItemText primary="Logout" />
        </StyledItemButton>
      </ListItem>
    </StyledMenuList>
  );
};
