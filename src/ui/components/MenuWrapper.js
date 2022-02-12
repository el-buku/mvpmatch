import React, { useState } from "react";
import { useTheme } from "styled-components";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const MenuWrapper = ({ children }) => {
  const theme = useTheme();
  //sidebar should be open by default on desktop, closed on mobile
  const [sidebarState, setSidebarState] = useState(
    window.outerWidth / 16 > theme.breakpoints.medium
  );
  const toggleSideBar = () => setSidebarState(!sidebarState);
  return (
    <>
      <NavBar toggleSideBar={toggleSideBar} />
      <SideBar />
      {children}
    </>
  );
};

export default MenuWrapper;
