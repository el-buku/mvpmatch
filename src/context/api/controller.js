import { useEffect, useState } from "react";
import APIClient from "./client";

const useFetch = (query) => {
  const [params, setParams] = useState(null);
  const [data, setData] = useState();
  const [selected, setSelected] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(
    () =>
      query(params)
        .then((response) => {
          setData(response?.data);
          setError();
          setParams();
        })
        .catch((e) => {
          console.error(e);
          setError(e);
          setData();
          setParams();
        })
        .finally(() => setLoading(false)),
    [params]
  );
  return {
    data,
    loading,
    error,
    selected,
    select: setSelected,
    selectAll: () => setSelected(data),
    setParams,
  };
};

const useApiController = () => {
  const apiClient = new APIClient();
  return {
    useUsers() {
      const { data, loading, error } = useFetch(apiClient.fetchUsers, "userId");
      return {
        data: data?.map((user) => ({ ...user, appId: user.userId })),
        loading,
        error,
      };
    },
    useProjects() {
      const { data, loading, error, selected, select, selectAll } = useFetch(
        apiClient.fetchProjects,
        "projectId"
      );
      return {
        data: data?.map((project) => ({
          ...project,
          appId: project.projectId,
        })),
        loading,
        error,
        selected,
        select,
        selectAll,
      };
    },
    useGateways() {
      const { data, loading, error, selected, select, selectAll } = useFetch(
        apiClient.fetchGateways,
        "gatewayId"
      );
      return {
        data: data?.map((gateway) => ({
          ...gateway,
          appId: gateway.gatewayId,
        })),
        loading,
        error,
        selected,
        select,
        selectAll,
      };
    },
    useReports() {
      const { data, loading, error, setParams } = useFetch(
        apiClient.fetchReports,
        "reportId"
      );
      return { data, loading, error, setParams };
    },
  };
};

export default useApiController;
