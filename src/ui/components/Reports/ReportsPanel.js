import React, { useCallback, useMemo } from "react";
import { reportStore } from "store";
import { CollapsableTablesPanel } from "ui/blocks/Panels";
import { useSnapshot } from "valtio";
import { Flex } from "ui/base";
import { projectStore } from "store";
import { gatewayStore } from "store";

export const ReportsPanel = () => {
  const reports = useSnapshot(reportStore);
  const projects = useSnapshot(projectStore);
  const gateways = useSnapshot(gatewayStore);
  const type = useMemo(
    () => ({
      projects: projects.selected?.[0]?.name ? "single" : "all",
      gateways: gateways.selected?.[0]?.name ? "single" : "all",
    }),
    [projects, gateways]
  );
  const title = `${projects.selected?.[0]?.name || "All projects"} | ${
    gateways.selected?.[0]?.name || "All gateways"
  } `;

  const reduceReportsByType = useCallback(() => {
    const reduceByGateway = (items, payment) => {
      const { gatewayId } = payment;
      const name = gateways.findById(gatewayId)?.name;
      const prev = items[name] || [];
      items[name] = [...prev, payment];
      return items;
    };
    const reduceByProject = (items, payment) => {
      const { gatewayId } = payment;
      const name = gateways.findById(gatewayId)?.name;
      const prev = items[name] || [];
      items[name] = [...prev, payment];
      return items;
    };
    if (type.projects == "all") return reduceByProject;
    if (type.projects == "single" && type.gateways == "all")
      return reduceByGateway;
    if (type.projects == "single" && type.gateways == "single")
      return reduceByProject;
  }, [type, projects, gateways]);
  return (
    <Flex mt={4} width="full">
      <CollapsableTablesPanel
        title={title}
        items={reports?.data?.reduce(reduceReportsByType(), {})}
      />
    </Flex>
  );
};
