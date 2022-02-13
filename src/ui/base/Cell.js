import React from "react";
import styled from "styled-components";
import { Flex, Box } from "ui/base";

const Element = styled(Flex)`
  cursor: pointer;
  align-items: start;
  display: ${(props) => (props.parent ? "initial" : "none")};
  &:hover > * {
    display: flex !important;
  }
`;

export const Cell = ({ children, endAdornment, parent, cells, ...props }) => {
  return (
    <Element
      flexDirection="column"
      px={(parent && 1) || 0}
      py={(parent && 0) || 0}
      borderRadius={2}
      parent={parent}
      {...props}
    >
      <Flex p={1}>
        {children}
        {endAdornment !== undefined && <Box pl={5}>{endAdornment}</Box>}
      </Flex>
      {cells}
    </Element>
  );
};
