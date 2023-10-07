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
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import Badge from "@mui/material/Badge";

const AppBarContainer: React.FC<AppBarContainerProps> = ({
  onLogoutClick,
  isAuthenticated,
  booksLength,
  openBooksModal,
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

          <StyledIconButton onClick={openBooksModal}>
            <Badge badgeContent={booksLength} color="primary">
              <CollectionsBookmarkIcon />
            </Badge>
          </StyledIconButton>
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
          BackdropProps={{ invisible: true }}
        >
          {appBarItems(onLogoutClick, isAuthenticated)}
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
