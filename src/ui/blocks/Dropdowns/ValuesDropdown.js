import React from "react";
import { Cell } from "ui/base";
import { ReactComponent as ArrowDown } from "assets/icons/arrow-down.svg";

const Dropdown = ({ itemType, options, selected, onSelect }) => {
  console.log({ itemType, options, selected, onSelect });
  const selectedItem = options?.[selected];
  return (
    <Cell color="white" bg="secondary" endAdornment={<ArrowDown />}>
      {selectedItem?.label || `Select ${itemType}...`}
    </Cell>
  );
};

// Dropdown.propTypes = {
//   itemType: string,
//   options: {
//     id: number,
//     label: string,
//     value: object,
//   },
//   selected: number,
//   onSelect: func,
// };

export default Dropdown;
