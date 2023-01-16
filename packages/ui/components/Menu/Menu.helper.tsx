import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Toolbar from "@mui/material/Toolbar";
import { useCallback, useState } from "react";
import { MenuListType, MenuProps } from "./Menu.types";
import { StyledDivider, StyledItemButton, StyledMenuList } from "./Menu.style";
import { useNavigate } from "@remix-run/react";
import LogoutIcon from "@mui/icons-material/Logout";

const MenuList: MenuListType[] = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    url: "/",
  },
  { label: "Books", icon: <LibraryBooksIcon />, url: "/books" },
  { label: "Reservations", icon: <DensitySmallIcon />, url: "/reservations" },
  { label: "Customers", icon: <PeopleAltIcon />, url: "/customers" },
];

export const menuItems = (onLogoutClick: () => void) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
