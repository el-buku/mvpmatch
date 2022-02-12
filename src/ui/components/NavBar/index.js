import React from "react";
import { ReactComponent as AppLogo } from "assets/icons/b-logo.svg";
import { ReactComponent as SideBarToggle } from "assets/icons/sidebar-toggle.svg";
import { UserInfo } from "./UserInfo";
import { Box } from "ui/base";

const NavBar = ({ toggleSideBar }) => {
  const user = {
    userId: "rahej",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
  };
  return (
    <Box height={4}>
      <Box mx={4} ml={[3, 4]} height={3}>
        <AppLogo />
      </Box>
      <Box onClick={toggleSideBar}>
        <SideBarToggle />
      </Box>
      <UserInfo user={user} />
    </Box>
  );
};

export default NavBar;
