import React, { useState } from "react";
import styled, { useTheme, css, keyframes } from "styled-components";
import { Box } from "ui/base";
import { NavBar, SideBar } from ".";

const contentMargin = {
  closed: 6,
  open: 7,
};

const contentAnimation = (props) =>
  keyframes({
    from: {
      marginLeft: props.theme.space[contentMargin.closed],
    },
    to: {
      marginLeft: props.theme.space[contentMargin.open],
    },
  });

const ContentContainer = styled(Box)`
  animation: ${(props) =>
    props.sideBarOpen
      ? css`
          ${contentAnimation(props)} 0.4s ease-out
        `
      : ""};
`;

const MenuWrapper = ({ children }) => {
  const theme = useTheme();
  //should be open by default on desktop, closed on mobile
  const [sideBarOpen, setSidebarOpen] = useState(
    window.outerWidth > theme.breakpointsToPx("medium")
  );
  const toggleSideBar = () => setSidebarOpen(!sideBarOpen);

  return (
    <Box position="relative">
      <NavBar toggleSideBar={toggleSideBar} />
      {sideBarOpen && <SideBar />}
      <ContentContainer
        position="absolute"
        sideBarOpen={sideBarOpen}
        ml={{
          _: 4,
          small: sideBarOpen ? contentMargin.open : contentMargin.closed,
        }}
        pt={4}
      >
        {children}
      </ContentContainer>
    </Box>
  );
};

export default MenuWrapper;
