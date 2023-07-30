import { useState } from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  StyledAppBar,
  StyledDrawer,
  StyledIconButton,
  StyledMainBox,
} from "./AppBar.style";
import { appBarTitle } from "./AppBar.const";
import Flex from "@/components/Flex";
import { AppBarContainerProps } from "./AppBar.type";
import { appBarItems } from "./AppBar.helper";
import collorPalette from "@/theme/colorPalette";

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

          <Typography variant="h4" color={collorPalette.white} fontWeight={500}>
            {appBarTitle}
          </Typography>
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

      <StyledMainBox component="main">
        <Toolbar />
        {children}
      </StyledMainBox>
    </Flex>
  );
};

export default AppBarContainer;
