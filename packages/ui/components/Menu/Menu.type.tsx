import { DrawerProps } from "@mui/material/Drawer";
import { ReactNode } from "react";

export interface MenuListType {
  label: string;
  icon: React.ReactElement;
  url: string;
}

export interface DrawerType extends DrawerProps {
  display: any;
}

export interface MenuContainerProps {
  onLogoutClick: () => void;
  children: ReactNode;
}
