import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components/macro";
import { Flex, Box } from "ui/base";
import { Base, Parent } from "./Base";

const Child = forwardRef(({ children, endAdornment, ...props }, ref) => {
  return (
    <Base
      borderTopLeftRadius={props.firstRow && 2}
      borderTopRightRadius={props.firstRow && 2}
      borderBottomLeftRadius={props.lastRow && 2}
      borderBottomRightRadius={props.lastRow && 2}
      ref={ref}
      {...props}
    >
      <nobr>{children}</nobr>
      {endAdornment !== undefined && <Box pl={5}>{endAdornment}</Box>}
    </Base>
  );
});

const Container = ({ children, err, ...props }) => {
  const sizeRef = useRef();
  const [clientWidth, setWidth] = useState();
  useEffect(() => setWidth(sizeRef.current?.clientWidth), [sizeRef]);
  return (
    <Box position="relative" mt={[10, 10]} width={clientWidth}>
      <Parent
        bg="secondary"
        color="white"
        ref={sizeRef}
        borderRadius={2}
        border={err && "1px solid red"}
        flexDirection="column"
        position="absolute"
        as={"div"}
        {...props}
      >
        {children}
      </Parent>
      <Parent
        bg="secondary"
        color="white"
        ref={sizeRef}
        borderRadius={2}
        border={err && "1px solid red"}
        flexDirection="column"
        style={{ visibility: "hidden" }}
        as={"div"}
        {...props}
      >
        {children}
      </Parent>
    </Box>
  );
};

export const Cell = { Parent, Child, Container };
