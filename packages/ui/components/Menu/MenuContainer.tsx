import { useState, ReactNode, useCallback } from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { menuItems } from "./Menu.helper";
import Typography, { TypographyProps } from "@mui/material/Typography";
import {
  StyledAppBar,
  StyledDrawer,
  StyledFlex,
  StyledIconButton,
  StyledMainBox,
} from "./Menu.style";
import { menuTitle, menuWidth } from "./Menu.const";

const Menu: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleMenuToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  return (
    <StyledFlex>
      <StyledAppBar position="fixed">
        <Toolbar>
          <StyledIconButton disableRipple={true} onClick={handleMenuToggle}>
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
          {menuItems()}
        </StyledDrawer>

        <StyledDrawer
          variant="permanent"
          display={{ xs: "none", sm: "block" }}
          open
        >
          {menuItems()}
        </StyledDrawer>
      </Box>

      <StyledMainBox component="main">
        <Toolbar />
        {children}
      </StyledMainBox>
    </StyledFlex>
  );
};

export default Menu;
