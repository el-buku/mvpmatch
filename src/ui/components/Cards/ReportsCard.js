import React from "react";
import { ActionCard } from "ui/blocks";

const ReportsCard = () => {
  return (
    <ActionCard
      title="Reports"
      subtitle="Easily generate a report of your transactions"
      flexDirection={["column", "row"]}
    />
  );
};

export default ReportsCard;
