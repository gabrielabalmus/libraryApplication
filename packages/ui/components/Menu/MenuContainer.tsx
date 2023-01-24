import { useState } from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { menuItems } from "./Menu.helper";
import Typography from "@mui/material/Typography";
import {
  StyledAppBar,
  StyledDrawer,
  StyledIconButton,
  StyledMainBox,
} from "./Menu.style";
import { menuTitle, menuWidth } from "./Menu.const";
import Flex from "@/components/Flex";
import { MenuContainerProps } from "./Menu.types";

const Menu: React.FC<MenuContainerProps> = ({ onLogoutClick, children }) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Flex>
      <StyledAppBar position="fixed">
        <Toolbar>
          <StyledIconButton disableRipple onClick={handleMenuToggle}>
            <MenuIcon />
          </StyledIconButton>

          <Typography variant="h5">{menuTitle}</Typography>
        </Toolbar>
      </StyledAppBar>

      <Box
        component="nav"
        sx={{
          width: { sm: menuWidth },
          flexShrink: { sm: 0 },
        }}
      >
        <StyledDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleMenuToggle}
          ModalProps={{
            keepMounted: true,
          }}
          display={{ xs: "block", sm: "none" }}
        >
          {menuItems(onLogoutClick)}
        </StyledDrawer>

        <StyledDrawer
          variant="permanent"
          display={{ xs: "none", sm: "block" }}
          open
        >
          {menuItems(onLogoutClick)}
        </StyledDrawer>
      </Box>

      <StyledMainBox component="main">
        <Toolbar />
        {children}
      </StyledMainBox>
    </Flex>
  );
};

export default Menu;
