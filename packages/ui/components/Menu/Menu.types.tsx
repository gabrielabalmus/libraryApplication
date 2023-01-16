import { DrawerProps } from "@mui/material/Drawer";

export interface MenuListType {
  label: string;
  icon: React.ReactElement;
  url: string;
}

export interface DrawerType extends DrawerProps {
  display: any;
}

export interface MenuProps {
  url: string;
  index: number;
}
