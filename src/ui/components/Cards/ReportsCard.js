import React from "react";
import { useTheme } from "styled-components";
import { ActionCard } from "ui/blocks";
import { InputGroup } from "ui/components";

const ReportsCard = () => {
  const theme = useTheme();
  return (
    <ActionCard
      title="Reports"
      subtitle="Easily generate a report of your transactions"
      flexDirection={["column", "row"]}
      width={theme.computedSizes.content.width}
      actions={
        <InputGroup
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
            // {
            //   type: "date",
            //   placeholder: "From date...",
            //   value: null,
            //   onDateChanged: console.log,
            // },
          ]}
        />
      }
    />
  );
};

export default ReportsCard;
