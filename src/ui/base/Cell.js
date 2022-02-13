import React from "react";
import styled from "styled-components";
import { Flex, Box } from "ui/base";

const Element = styled(Flex)`
  cursor: pointer;
`;

export const Cell = ({ children, endAdornment, ...props }) => {
  return (
    <Element px={3} py={1} borderRadius={2} {...props}>
      {children}
      {endAdornment && <Box pl={5}>{endAdornment}</Box>}
    </Element>
  );
};
