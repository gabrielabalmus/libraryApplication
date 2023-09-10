import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  StyledDivider,
  StyledItemButton,
  StyledAppBarList,
  StyledToolbar,
} from "./AppBar.style";
import { useNavigate, useLocation } from "@remix-run/react";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppBarList } from "./AppBar.const";

export const appBarItems = (onLogoutClick: () => void) => {
  const navigate = useNavigate();

  const location = useLocation();
  const pathName = location.pathname;

  return (
    <StyledAppBarList>
      <StyledToolbar />

      <List>
        {AppBarList.map((item, index) => (
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
    </StyledAppBarList>
  );
};
