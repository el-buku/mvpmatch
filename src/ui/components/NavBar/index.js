import React from "react";
import { ReactComponent as AppLogo } from "assets/icons/b-logo.svg";
import { ReactComponent as SideBarToggle } from "assets/icons/sidebar-toggle.svg";
import { UserInfo } from "./UserInfo";
import { Box, Flex } from "ui/base";
import { IconButton } from "../../base";

const NavBar = ({ toggleSideBar }) => {
  return (
    <Flex
      height={4}
      borderBottomWidth={"2px"}
      borderBottomStyle={"solid"}
      borderBottomColor="lightGray"
      position="sticky"
      top={0}
      width="100%"
      bg="white"
      zIndex={4}
    >
      <IconButton
        disabledHover
        mx={5}
        ml={[3, 5]}
        height={3}
        icon={<AppLogo />}
      />

      <IconButton onClick={toggleSideBar} icon={<SideBarToggle />} />

      <UserInfo />
    </Flex>
  );
};

export default NavBar;
