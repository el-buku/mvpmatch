import React, { useState } from "react";
import { useTheme } from "styled-components/macro";
import { ActionCard } from "ui/blocks";
import { InputGroup } from "ui/components";

const ReportsCard = () => {
  const theme = useTheme();
  const [selected, onChange] = useState(false);
  console.log(selected);
  return (
    <ActionCard
      title="Reports"
      subtitle="Easily generate a report of your transactions"
      flexDirection={["column", "row"]}
      pr={[4, 7]}
      width={theme.computedSizes.content.width}
      actions={
        <InputGroup
          ml={[0, "auto"]}
          justifyContent={["center", "flex-end"]}
          elements={[
            {
              type: "values",
              itemKey: "project",
              selected: 1,
              options: [
                { id: 1, name: "abcc" },
                { id: 2, name: "ccab" },
                { id: 3, name: "ccac" },
              ],
            },
            {
              type: "values",
              itemKey: "gateway",
              selected: 1,
              options: [
                { id: 1, name: "abcc" },
                { id: 2, name: "ccab" },
                { id: 3, name: "ccac" },
              ],
            },
            {
              type: "date",
              placeholder: "To date...",
              // selected,
              // onChange: (date) => onChange(date),
            },
            {
              type: "date",
              placeholder: "From date...",
              selected: null,
              onChange: console.log,
            },
            {
              type: "submit",
              text: "Generate Report",
              onClick: () => onChange(true),
            },
          ]}
        />
      }
    />
  );
};

export default ReportsCard;
