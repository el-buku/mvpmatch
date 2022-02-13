import React, { useState } from "react";
import styled, { useTheme, css, keyframes } from "styled-components";
import { Box, Flex } from "ui/base";
import { NavBar, SideBar, Footer } from ".";

const contentMargin = {
  closed: 6,
  open: 7,
};
const navBarTopPadding = 4;

const ContentContainer = styled(Flex)`
  min-height: calc(100vh - ${(props) => props.theme.sizes[navBarTopPadding]}px);
`;

const MenuWrapper = ({ children }) => {
  const theme = useTheme();
  //should be open by default on desktop, closed on mobile
  const [sideBarOpen, setSidebarOpen] = useState(
    window.outerWidth > theme.breakpointsToPx("medium")
  );
  const toggleSideBar = () => setSidebarOpen(!sideBarOpen);
  const width = React.useMemo(
    () => ({
      _: `calc(100vw - ${(
        (sideBarOpen && theme.space[contentMargin.open]) ||
        theme.space[4]
      ).toString()}px);`,
      small: `calc(100vw - ${(
        (sideBarOpen && theme.space[contentMargin.open]) ||
        theme.space[contentMargin.closed]
      ).toString()}px);`,
    }),
    [sideBarOpen, theme]
  );
  return (
    <Box position="relative">
      <NavBar toggleSideBar={toggleSideBar} />
      {sideBarOpen && <SideBar />}
      <ContentContainer
        position="absolute"
        sideBarOpen={sideBarOpen}
        flexDirection="column"
        width={width}
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
