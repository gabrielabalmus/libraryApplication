import { ReactNode } from "react";

export interface AppBarListType {
  label: string;
  icon: React.ReactElement;
  url: string;
}

export interface AppBarContainerProps {
  onLogoutClick: () => void;
  openBooksModal: () => void;
  isAuthenticated: boolean;
  booksLength: number;
  children: ReactNode;
}
