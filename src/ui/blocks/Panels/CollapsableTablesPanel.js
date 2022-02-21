import React, { useState } from "react";

import { Flex, Text } from "ui/base";

const CollapsableTable = (item, open, onClick) => {
  console.log(item);
  return (
    <>
      <Flex
        flexDirection="column"
        borderRadius={2}
        mt={"2.5px"}
        bg="white"
        width="full"
        mb={open ? 3 : "2.5px"}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        {item.title}
      </Flex>
      <table style={{ width: "100%", marginBottom: 2.5 }}>
        <tr>
          <td>Date</td>
          <td>Transaction ID</td>
          <td>Amount</td>
        </tr>
      </table>
    </>
  );
};

const CollapsableTablesPanel = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <Flex
      bg="lightBlue"
      flexDirection="column"
      borderRadius={2}
      p={4}
      height="full"
      width="full"
      alignItems="start"
      style={{ maxWidth: "75%" }}
    >
      <Text
        color="textPrimary"
        fontSize={1}
        mb={4}
        textAlign="start"
        fontWeight="bold"
      >
        <b>{title}</b>
      </Text>
      <Flex flexDirection="column" width="full">
        {Object.keys(items).map((key, index) => (
          <CollapsableTable
            item={items[key]}
            open={index === openIndex}
            onClick={() => setOpenIndex(index)}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default CollapsableTablesPanel;
