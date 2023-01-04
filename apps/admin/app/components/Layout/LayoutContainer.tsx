import Menu from "@/components/Menu";
import { ReactNode } from "react";

const LayoutContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Menu>{children}</Menu>;
};

export default LayoutContainer;
