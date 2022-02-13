import React from "react";
import { ActionCard } from "ui/blocks";
import { InputGroup } from "ui/components";

const ReportsCard = () => {
  return (
    <ActionCard
      title="Reports"
      subtitle="Easily generate a report of your transactions"
      flexDirection={["column", "row"]}
      actions={
        <InputGroup
          elements={[
            {
              type: "values",
              placeholder: "Project...",
              selected: 1,
              options: [
                { id: 1, name: "abcc" },
                { id: 2, name: "ccab" },
                { id: 3, name: "ccac" },
              ],
            },
            {
              type: "values",
              placeholder: "Gateway...",
              selected: 2,
              options: [
                { id: 1, name: "abcc" },
                { id: 2, name: "ccab" },
                { id: 3, name: "ccac" },
              ],
            },
            {
              type: "values",
              placeholder: "Gateway...",
              selected: 2,
              options: [
                { id: 1, name: "abcc" },
                { id: 2, name: "ccab" },
                { id: 3, name: "ccac" },
              ],
            },
            {
              type: "values",
              placeholder: "Gateway...",
              selected: 2,
              options: [
                { id: 1, name: "abcc" },
                { id: 2, name: "ccab" },
                { id: 3, name: "ccac" },
              ],
            },
          ]}
        />
      }
    />
  );
};

export default ReportsCard;
