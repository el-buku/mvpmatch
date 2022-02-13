import PropTypes, { number, string, oneOf } from "prop-types";
import React from "react";

import { Box } from "ui/base";
import { Dropdowns } from "ui/blocks";

const InputGroup = ({ elements }) => {
  return (
    <>
      {elements.map((element, index) => {
        const type = element.type;
        console.log(element);
        return (
          (type === "values" && (
            <Dropdowns.Values key={`${element.id}${index}`} {...element} />
          )) ||
          (type === "date" && (
            <Dropdowns.Date key={`${element.id}${index}`} {...element} />
          ))
        );
      })}
    </>
  );
};

// InputGroup.propTypes = PropTypes.object({
//   elements: {
//     type: oneOf(["values", "date", "submit"]),
//     itemType: string,
//     selected: number,
//     options: PropTypes.oneOfType([
//       PropTypes.arrayOf(PropTypes.object({ id: number, name: string })),
//       PropTypes.object({ start: number, end: number }),
//     ]),
//   },
// });

export default InputGroup;
