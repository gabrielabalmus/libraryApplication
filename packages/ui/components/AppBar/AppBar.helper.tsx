import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  StyledDivider,
  StyledItemButton,
  StyledAppBarList,
} from "./AppBar.style";
import { useNavigate, useLocation } from "@remix-run/react";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LockIcon from "@mui/icons-material/Lock";
import { AppBarList } from "./AppBar.const";

export const appBarItems = (
  onLogoutClick: () => void,
  isAuthenticated: boolean
) => {
  const navigate = useNavigate();

  const location = useLocation();
  const pathName = location.pathname;
  const pathString = pathName.split("/")[1];

  return (
    <StyledAppBarList>
      <List>
        {AppBarList.map((item, index) => (
          <ListItem key={index} disablePadding>
            <StyledItemButton
              selected={item.url.split("/")[1] === pathString}
              onClick={() => navigate(item.url)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>

              <ListItemText primary={item.label} />
            </StyledItemButton>
          </ListItem>
        ))}
      </List>

      <StyledDivider />

      <List>
        {isAuthenticated ? (
          <>
            <ListItem disablePadding>
              <StyledItemButton
                selected={"account" === pathString}
                onClick={() => navigate("/account")}
              >
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>

                <ListItemText primary="My account" />
              </StyledItemButton>
            </ListItem>

            <ListItem disablePadding>
              <StyledItemButton
                selected={"change-password" === pathString}
                onClick={() => navigate("/change-password")}
              >
                <ListItemIcon>
                  <LockIcon />
                </ListItemIcon>

                <ListItemText primary="Change password" />
              </StyledItemButton>
            </ListItem>

            <ListItem disablePadding>
              <StyledItemButton
                selected={"loans" === pathString}
                onClick={() => navigate("/loans")}
              >
                <ListItemIcon>
                  <DensitySmallIcon />
                </ListItemIcon>

                <ListItemText primary="My loans" />
              </StyledItemButton>
            </ListItem>

            <ListItem disablePadding>
              <StyledItemButton onClick={() => onLogoutClick()}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>

                <ListItemText primary="Logout" />
              </StyledItemButton>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem disablePadding>
              <StyledItemButton
                selected={"login" === pathString}
                onClick={() => navigate("/login")}
              >
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>

                <ListItemText primary="Login" />
              </StyledItemButton>
            </ListItem>
            <ListItem disablePadding>
              <StyledItemButton
                selected={"signup" === pathString}
                onClick={() => navigate("/signup")}
              >
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>

                <ListItemText primary="Sign up" />
              </StyledItemButton>
            </ListItem>
          </>
        )}
      </List>
    </StyledAppBarList>
  );
};
