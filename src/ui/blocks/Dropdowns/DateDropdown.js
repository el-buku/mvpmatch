import React from "react";
import { Box } from "ui/base";

const Dropdown = ({ itemType, options, selected, onSelect }) => {
  const selectedItem = options[selected];
  return (
    <Box color="white" bg="secondary">
      {selectedItem ? selectedItem.label : `Select ${itemType}...`}
    </Box>
  );
};

export default Dropdown;
