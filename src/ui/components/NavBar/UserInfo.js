import React from "react";
import styled from "styled-components";
import { Box, Text } from "ui/base";

const Initials = styled(Box)`
  border-radius: 5px;
  text-align: center;
`;

export const UserInfo = ({ user }) => {
  console.log(user);
  return (
    <Box ml={"auto"} height={3}>
      <Box p={1} borderRadius={1} mr={1} color="white" bg="accent">
        <Text textAlign="align.center" fontSize={2} fontWeight="bold">
          {user.firstName?.charAt(0)}
          {user.lastName?.charAt(0)}
        </Text>
      </Box>
      <Box mr={[3, 5]}>
        <Text
          textAlign="align.center"
          color="primary"
          fontSize={1}
          fontWeight="bold"
        >
          {user.firstName} {user.lastName}
        </Text>
      </Box>
    </Box>
  );
};
