import { useState } from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import {
  StyledAppBar,
  StyledDrawer,
  StyledIconButton,
  StyledLink,
  StyledTitle,
} from "./AppBar.style";
import { appBarTitle } from "./AppBar.const";
import Flex from "@/components/Flex";
import { AppBarContainerProps } from "./AppBar.type";
import { appBarItems } from "./AppBar.helper";

const AppBarContainer: React.FC<AppBarContainerProps> = ({
  onLogoutClick,
  children,
}) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleAppBarToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Flex>
      <StyledAppBar position="fixed">
        <Toolbar>
          <StyledIconButton onClick={handleAppBarToggle}>
            <MenuIcon />
          </StyledIconButton>

          <StyledLink to="/">
            <StyledTitle variant="h4">{appBarTitle}</StyledTitle>
          </StyledLink>
        </Toolbar>
      </StyledAppBar>

      <Box component="nav">
        <StyledDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleAppBarToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {appBarItems(onLogoutClick)}
        </StyledDrawer>
      </Box>

      <Box component="main">
        <Toolbar />
        {children}
      </Box>
    </Flex>
  );
};

export default AppBarContainer;
