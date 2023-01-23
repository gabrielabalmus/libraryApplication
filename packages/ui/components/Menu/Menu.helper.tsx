import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { useCallback, useState } from "react";
import { MenuProps } from "./Menu.types";
import { StyledDivider, StyledItemButton, StyledMenuList } from "./Menu.style";
import { useNavigate, useLocation } from "@remix-run/react";
import LogoutIcon from "@mui/icons-material/Logout";
import { MenuList } from "./Menu.const";

export const menuItems = (onLogoutClick: () => void) => {
  let location = useLocation();
  const pathName = location.pathname;

  const initialIndex = MenuList.findIndex((item) => item.url === pathName);

  const [selectedIndex, setSelectedIndex] = useState<number>(initialIndex);
  const navigate = useNavigate();

  const handleListItemClick = useCallback(({ url, index }: MenuProps) => {
    setSelectedIndex(index);
    navigate(url);
  }, []);

  return (
    <StyledMenuList>
      <Toolbar />

      <List>
        {MenuList.map((item, index) => (
          <ListItem key={index} disablePadding>
            <StyledItemButton
              disableRipple={true}
              selected={selectedIndex === index}
              onClick={() => handleListItemClick({ url: item.url, index })}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>

              <ListItemText primary={item.label} />
            </StyledItemButton>
          </ListItem>
        ))}
      </List>

      <StyledDivider />

      <ListItem disablePadding>
        <StyledItemButton disableRipple={true} onClick={() => onLogoutClick()}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>

          <ListItemText primary={"Logout"} />
        </StyledItemButton>
      </ListItem>
    </StyledMenuList>
  );
};
