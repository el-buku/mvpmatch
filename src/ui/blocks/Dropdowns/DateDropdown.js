import React from "react";
import { Box } from "ui/base";

const Dropdown = ({ placeholder, options, selected, onSelect }) => {
  const selectedItem = options[selected];
  return (
    <Box color="white" bg="secondary">
      {selectedItem ? selectedItem.label : `Select ${placeholder}...`}
    </Box>
  );
};

export default Dropdown;
