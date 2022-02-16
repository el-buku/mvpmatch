import React from "react";
import { Cell, Box, Flex } from "ui/base";
import { ReactComponent as ArrowDown } from "assets/icons/arrow-down.svg";
import { useTheme } from "styled-components/macro";

const Dropdown = ({
  itemKey,
  options,
  selected,
  onSelect: onChange,
  selectAll,
  err,
}) => {
  console.log({ itemKey, options, selected, onSelect: onChange });
  const selectedItem = options?.[selected];
  return (
    <>
      <Cell.Container err={err}>
        <Cell.Child endAdornment={<ArrowDown />} button firstRow>
          {selectedItem?.label || `Select ${itemKey}...`}
        </Cell.Child>
        <Cell.Child
          width="full"
          selectable
          onClick={() => console.log(`All ${itemKey}s`)}
        >
          {`All ${itemKey}s`}
        </Cell.Child>
        {options.map((option, index) => (
          <Cell.Child
            key={`${option.name}-${index}`}
            width="full"
            selectable
            onClick={() => console.log(index)}
            lastRow={index === options.length - 1}
          >
            {option.name}
          </Cell.Child>
        ))}
      </Cell.Container>
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
