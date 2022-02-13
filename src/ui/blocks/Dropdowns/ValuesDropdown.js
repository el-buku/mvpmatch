import React from "react";
import { Cell, Box } from "ui/base";
import { ReactComponent as ArrowDown } from "assets/icons/arrow-down.svg";
import { useTheme } from "styled-components";

const Dropdown = ({ placeholder, options, selected, onSelect, selectAll }) => {
  const theme = useTheme();
  console.log({ placeholder, options, selected, onSelect });
  const selectedItem = options?.[selected];
  return (
    <>
      <Cell
        color="white"
        bg="secondary"
        endAdornment={<ArrowDown />}
        parent
        position="absolute"
        cells={options.map((option, index) => (
          <Cell
            color="white"
            bg="secondary"
            endAdornment={null}
            id={`${option.name}-${index}`}
          >
            {option.name}
          </Cell>
        ))}
      >
        {selectedItem?.label || placeholder}
      </Cell>
    </>
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
