import React from "react";
import { NavBar } from "../components";

const MenuWrapper = ({ children }) => {
  return (
    <>
      <NavBar />
      {/* <SideBar /> */}
      {children}
    </>
  );
};

export default MenuWrapper;
