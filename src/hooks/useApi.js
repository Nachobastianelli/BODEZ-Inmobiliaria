import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { API_BASE_URL } from "./config";

const useApi = (endpoint, method = "GET", body = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        method,
        url: `${API_BASE_URL}${endpoint}`,
        data: body,
      });
      setData(response.data);
    } catch (err) {
      setError(err.response ? err.response.data : { message: "Error de red" });
    } finally {
      setLoading(false);
    }
  }, [endpoint, method, body]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useApi;
