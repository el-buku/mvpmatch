import React from "react";
import useApiController from "./controllers/api";

const DataContext = React.createContext({});

const useData = () => React.useContext(DataContext);

const DataProvider = ({ children }) => {
  const controller = useApiController();
  const users = controller.useUsers();
  const contextData = { users };
  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

export default DataContext;
export { DataProvider, useData };
