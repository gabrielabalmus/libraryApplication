import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import { useCallback, useState } from "react";
import { MenuListType } from "./Menu.types";
import { StyledItemButton } from "./Menu.style";

const MenuList: MenuListType[] = [
  {
    label: "Dashboard",
    icon: <InboxIcon />,
    url: "/",
  },
  { label: "Orders", icon: <MailIcon />, url: "/orders" },
  { label: "Customers", icon: <InboxIcon />, url: "/costomers" },
];

export const menuItems = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  return (
    <div>
      <Toolbar />
      <List>
        {MenuList.map((item, index) => (
          <ListItem disablePadding>
            <StyledItemButton
              disableRipple={true}
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>

              <ListItemText primary={item.label} />
            </StyledItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
