import { AppBarListType } from "./AppBar.type";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CallIcon from "@mui/icons-material/Call";

export const appBarWidth = 240;
export const appBarTitle = "One library";

export const AppBarList: AppBarListType[] = [
  {
    label: "Main page",
    icon: <DashboardIcon />,
    url: "/",
  },
  { label: "Books", icon: <LibraryBooksIcon />, url: "/books" },
  { label: "Contact", icon: <CallIcon />, url: "/contact" },
];
