import React from "react";
import styled, { keyframes } from "styled-components";
import { Flex } from "ui/base";
import { ReactComponent as Reports } from "assets/icons/sidebar-icons/sidebar-1.svg";
import { ReactComponent as Icon2 } from "assets/icons/sidebar-icons/sidebar-2.svg";
import { ReactComponent as Icon3 } from "assets/icons/sidebar-icons/sidebar-3.svg";
import { ReactComponent as Icon4 } from "assets/icons/sidebar-icons/sidebar-4.svg";
import { ReactComponent as Icon5 } from "assets/icons/sidebar-icons/sidebar-5.svg";
import { IconButton } from "ui/base";
import { Spacer } from "../base";

const sidebarAnimation = keyframes({
  from: {
    left: "-20%",
  },
  to: {
    left: 0,
  },
});
const SidebarFlex = styled(Flex)`
  animation: ${sidebarAnimation} 0.4s ease-out;
`;

const SideBar = () => {
  return (
    <SidebarFlex
      width={{ _: 5, small: 4 }}
      height="100%"
      bg="white"
      position={"absolute"}
      zIndices={3}
      top={0}
      borderRightWidth={{ _: "2px", small: 0 }}
      borderRightStyle={"solid"}
      borderRightColor="lightGray"
      alignItems="flex-start"
    >
      <Flex position="sticky" top={0} flexDirection="column">
        <Spacer height={4} />

        <IconButton
          justifyContent={"center"}
          mr="auto"
          my={3}
          ml={5}
          icon={<Icon2 />}
        />
        <IconButton
          justifyContent={"center"}
          mr="auto"
          my={3}
          ml={5}
          icon={<Icon5 />}
        />
        <IconButton
          justifyContent={"center"}
          mr="auto"
          my={3}
          ml={5}
          icon={<Icon4 />}
        />

        <IconButton
          justifyContent={"center"}
          mr="auto"
          my={3}
          ml={5}
          icon={<Reports />}
        />
        <IconButton
          justifyContent={"center"}
          mr="auto"
          my={3}
          ml={5}
          icon={<Icon3 />}
        />
      </Flex>
    </SidebarFlex>
  );
};

export default SideBar;
