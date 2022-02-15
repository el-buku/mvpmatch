import React from "react";
import { Cell, Box, Flex } from "ui/base";
import { ReactComponent as ArrowDown } from "assets/icons/arrow-down.svg";
import { useTheme } from "styled-components";

const Dropdown = ({ itemKey, options, selected, onSelect, selectAll }) => {
  const theme = useTheme();
  console.log({ itemKey, options, selected, onSelect });
  const selectedItem = options?.[selected];
  return (
    <Box>
      <Cell.Container color="white" bg="secondary">
        <Cell.Child endAdornment={<ArrowDown />} primary firstRow>
          {selectedItem?.label || `Select ${itemKey}...`}
        </Cell.Child>
        {options.map((option, index) => (
          <Cell.Child
            key={`${option.name}-${index}`}
            width="full"
            onClick={() => console.log(index)}
          >
            {option.name}
          </Cell.Child>
        ))}
        <Cell.Child
          width="full"
          onClick={() => console.log(`All ${itemKey}s`)}
          lastRow
        >
          {`All ${itemKey}s`}
        </Cell.Child>
      </Cell.Container>
    </Box>
  );
};

// Dropdown.propTypes = {
//   placeholder: string,
//   options: {
//     id: number,
//     label: string,
//     value: object,
//   },
//   selected: number,
//   onSelect: func,
// };

export default Dropdown;
