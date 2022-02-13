import { useEffect, useState } from "react";
import APIClient from "./client";

const useQueryHook = (query) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(
    () =>
      query()
        .then((response) => setData(response.data))
        .catch((e) => {
          console.err(e);
          setError(true);
        })
        .finally(() => setLoading(false)),
    []
  );
  return { data, loading, error };
};

const useApiController = () => {
  const apiClient = new APIClient();
  return {
    useUsers() {
      const { data, loading, error } = useQueryHook(apiClient.getUsers);
      return { data, loading, error };
    },
  };
};

export default useApiController;
