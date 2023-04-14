import { MenuListType } from "./Menu.type";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

export const menuWidth = 240;
export const menuTitle = "Online library";

export const MenuList: MenuListType[] = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    url: "/",
  },
  { label: "Orders", icon: <DensitySmallIcon />, url: "/orders" },
  { label: "Customers", icon: <PeopleAltIcon />, url: "/customers" },
  { label: "Books", icon: <LibraryBooksIcon />, url: "/books" },
  { label: "Libraries", icon: <HomeWorkIcon />, url: "/libraries" },
];
