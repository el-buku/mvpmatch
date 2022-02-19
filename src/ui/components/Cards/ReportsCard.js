import React, { useState } from "react";
import { useTheme } from "styled-components/macro";
import { ActionCard } from "ui/blocks";
import { InputGroup } from "ui/components";
import { useData } from "context";

const ReportsCard = () => {
  const theme = useTheme();
  const { projects, gateways, reports } = useData();
  const [dates, setDates] = useState({
    from: null,
    to: null,
  });
  const mapItem = ({ appId, name }) => ({ appId, name });
  const findItem = (appId) => (item) => item.appId === appId;
  const getDropdownOptions = (item) => ({
    selected: item.selected,
    options: item.data?.map(mapItem) || [],
    onSelect: (appId) => item.select(item.data.find(findItem(appId))),
    selectAll: () => item.selectAll(),
  });
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
              width: 185.25,
              ...getDropdownOptions(projects),
            },
            {
              type: "values",
              itemKey: "gateway",
              selected: 1,
              width: 185.25,
              ...getDropdownOptions(gateways),
            },
            {
              type: "date",
              placeholder: "To date...",
              selected: dates.to,
              onSelect: (date) => setDates({ ...dates, to: date }),
            },
            {
              type: "date",
              placeholder: "From date...",
              selected: null,
              selected: dates.from,
              onSelect: (date) => setDates({ ...dates, from: date }),
            },
            {
              type: "submit",
              text: "Generate Report",
              onClick: () => {
                reports.setParams({
                  to: dates.to,
                  from: dates.from,
                  projects: projects.selected,
                  gateways: gateways.selected,
                });
              },
            },
          ]}
        />
      }
    />
  );
};

export default ReportsCard;
