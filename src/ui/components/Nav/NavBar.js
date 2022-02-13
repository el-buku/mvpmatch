import React from "react";
import { ReactComponent as AppLogo } from "assets/icons/b-logo.svg";
import { ReactComponent as SideBarToggle } from "assets/icons/sidebar-toggle.svg";
import { UserInfo } from "ui/blocks";
import { Button, Flex } from "ui/base";
import { useData } from "context";

const NavBar = ({ toggleSideBar }) => {
  const {
    users: { data, loading, error },
  } = useData();
  const user = data?.[0] || null;
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
      <Button.Icon
        disabledHover
        mx={5}
        ml={[3, 5]}
        height={3}
        icon={<AppLogo />}
      />

      <Button.Icon onClick={toggleSideBar} icon={<SideBarToggle />} />

      <UserInfo {...{ user, loading, error }} />
    </Flex>
  );
};

export default NavBar;
