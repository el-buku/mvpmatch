import React from "react";
import { ReactComponent as AppLogo } from "../../assets/icons/b-logo.svg";
import { ReactComponent as SideBarToggle } from "../../assets/icons/sidebar-toggle.svg";
import { Box, UserInfo } from "../";

const NavBar = () => {
  const user = {
    userId: "rahej",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
  };
  return (
    <Box height={4}>
      <Box mx={4} height={3}>
        <AppLogo />
      </Box>
      <Box>
        <SideBarToggle />
      </Box>
      <UserInfo user={user} />
    </Box>
  );
};

export default NavBar;
