import React from "react";
import { Flex, Box, Text } from "ui/base";

export const ActionCard = ({ title, subtitle, actions, ...containerProps }) => {
  console.log(containerProps.flexDirection);
  return (
    <Flex {...containerProps}>
      <Box>
        <Text color="textPrimary" fontSize={2} fontWeight="bold">
          {title}
        </Text>
        <Text color="textSecondary" fontSize={1} fontWeight="bold">
          {subtitle}
        </Text>
      </Box>
      <Flex justifyContent={"space-between"}>{actions}</Flex>
    </Flex>
  );
};
