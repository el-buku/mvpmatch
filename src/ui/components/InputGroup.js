import React from "react";

import { Box, Flex } from "ui/base";
import { Dropdowns } from "ui/blocks";

const InputGroup = ({ elements }) => {
  return (
    <>
      {elements.map((element, index) => {
        const type = element.type;
        console.log(element);
        return (
          <Box p={1} key={`${index}`} position="relative">
            {(type === "values" && <Dropdowns.Values {...element} />) ||
              (type === "date" && <Dropdowns.Date {...element} />)}
          </Box>
        );
      })}
    </>
  );
};

// InputGroup.propTypes = PropTypes.object({
//   elements: {
//     type: oneOf(["values", "date", "submit"]),
//     placeholder: string,
//     selected: number,
//     options: PropTypes.oneOfType([
//       PropTypes.arrayOf(PropTypes.object({ id: number, name: string })),
//       PropTypes.object({ start: number, end: number }),
//     ]),
//   },
// });

export default InputGroup;
