import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Flex, Box } from "ui/base";

const Element = styled(Flex)`
  cursor: pointer;
  align-items: start;
`;

const Parent = styled(Element)`
  &:hover > * {
    display: flex !important;
  }
  & > *:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const Child = ({ children, endAdornment, padAdornment, primary, ...props }) => (
  <Element
    py={1}
    px={3}
    borderTopLeftRadius={props.firstRow && 2}
    borderTopRightRadius={props.firstRow && 2}
    borderBottomLeftRadius={props.lastRow && 2}
    borderBottomRightRadius={props.lastRow && 2}
    {...props}
    as="a"
    display={!primary && "none!important"}
  >
    <nobr>{children}</nobr>
    {endAdornment !== undefined && <Box pl={5}>{endAdornment}</Box>}
  </Element>
);

const Container = ({ children, ...props }) => {
  const widthRef = useRef();
  const [clientWidth, setWidth] = useState();
  useEffect(() => setWidth(widthRef.current?.clientWidth), [widthRef]);
  return (
    <Box position="relative" mt={-10} width={clientWidth}>
      <Parent
        ref={widthRef}
        borderRadius={2}
        flexDirection="column"
        position="absolute"
        {...props}
      >
        {children}
      </Parent>
    </Box>
  );
};

export const Cell = { Parent, Child, Container };

export const Bell = (props) => {
  const { parent, children, cells } = props;
  console.log(props.width);
  return parent ? (
    <Box position="relative" mt={-18}>
      <Parent height={0} flexDirection="column" px={1} {...props}>
        <Child {...props}>{children}</Child>
      </Parent>
      <Parent flexDirection="column" position="absolute" px={1} {...props}>
        <Child {...props}>{children}</Child>
        {cells}
      </Parent>
    </Box>
  ) : (
    <Child {...props} display="none!important">
      {children}
    </Child>
  );
};
