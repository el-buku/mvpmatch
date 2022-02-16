import React from "react";

import { Box, Flex, Button } from "ui/base";
import { Dropdowns } from "ui/blocks";

const InputGroup = ({ elements }) => {
  return (
    <>
      {elements.map((element, index) => {
        const type = element.type;
        console.log(element);
        return (
          <Box px={1} key={`${index}`}>
            {(type === "values" && <Dropdowns.Values {...element} />) ||
              (type === "date" && <Dropdowns.Date {...element} />) ||
              (type === "submit" && (
                <Button.Submit {...element}>{element.text}</Button.Submit>
              ))}
          </Box>
        );
      })}
    </>
  );
};

export default InputGroup;
