import { MenuListType } from "./Menu.type";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

export const menuWidth = 240;
export const menuTitle = "One library";

export const MenuList: MenuListType[] = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    url: "/",
  },
  { label: "Loans", icon: <DensitySmallIcon />, url: "/loans" },
  { label: "Books", icon: <LibraryBooksIcon />, url: "/books" },
  { label: "Readers", icon: <PeopleAltIcon />, url: "/readers" },
  { label: "Libraries", icon: <HomeWorkIcon />, url: "/libraries" },
];
