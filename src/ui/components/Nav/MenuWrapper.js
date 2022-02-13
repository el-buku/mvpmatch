import React, { useState } from "react";
import styled, { useTheme, css, keyframes } from "styled-components";
import { Box, Flex } from "ui/base";
import { NavBar, SideBar, Footer } from ".";

const contentMargin = {
  closed: 6,
  open: 7,
};
const navBarTopPadding = 4;
const contentAnimation = (props) =>
  keyframes({
    from: {
      marginLeft: props.theme.space[contentMargin.closed],
    },
    to: {
      marginLeft: props.theme.space[contentMargin.open],
    },
  });

const ContentContainer = styled(Flex)`
  min-height: calc(100vh - ${(props) => props.theme.sizes[navBarTopPadding]}px);
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
        flexDirection="column"
        ml={{
          _: sideBarOpen ? contentMargin.open : 4,
          small: sideBarOpen ? contentMargin.open : contentMargin.closed,
        }}
        pt={navBarTopPadding}
      >
        {children}
        <Footer />
      </ContentContainer>
    </Box>
  );
};

export default MenuWrapper;
