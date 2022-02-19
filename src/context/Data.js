import React from "react";
import useApiController from "./api";

const DataContext = React.createContext({});

const useData = () => React.useContext(DataContext);

const DataProvider = ({ children }) => {
  const controller = useApiController();
  const users = controller.useUsers();
  const projects = controller.useProjects();
  const gateways = controller.useGateways();
  const reports = controller.useReports();
  const contextData = React.useMemo(
    () => ({ users, projects, gateways, reports }),
    [users, projects, gateways, reports]
  );
  console.log(contextData);
  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

export default DataContext;
export { DataProvider, useData };
