import { useState, useEffect, useCallback } from "react";
import { API_BASE_URL, API_BASE } from "../api";

const useApi = (initialEntity) => {
  const [entity, setEntity] = useState(initialEntity);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/${entity}`);
      if (!response.ok) {
        throw new Error("El servicio está caído, intente más tarde");
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [entity]);

  const createEntity = useCallback(
    async (newEntity) => {
      try {
        const response = await fetch(`${API_BASE_URL}/${entity}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEntity),
        });
        if (!response.ok) {
          throw new Error(`Error al crear ${entity}`);
        }
        fetchData();
      } catch (err) {
        setError(err.message);
      }
    },
    [entity, fetchData]
  );

  const updateEntity = useCallback(
    async (id, updatedEntity) => {
      try {
        const response = await fetch(`${API_BASE_URL}/${entity}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedEntity),
        });
        if (!response.ok) {
          throw new Error(`Error al actualizar ${entity}`);
        }
        fetchData();
      } catch (err) {
        setError(err.message);
      }
    },
    [entity, fetchData]
  );

  const deleteEntity = useCallback(
    async (id) => {
      try {
        const response = await fetch(`${API_BASE_URL}/${entity}/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error(`Error al eliminar ${entity}`);
        }
        fetchData();
      } catch (err) {
        setError(err.message);
      }
    },
    [entity, fetchData]
  );

  const uploadFiles = async (files) => {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();

      Array.from(files).forEach((file, index) => {
        formData.append("files", file);
        console.log(`File ${index + 1}: ${file.name}`);
      });

      formData.forEach((value, key) => {
        console.log(`Key: ${key}, Value: ${value}`);
      });

      const response = await fetch(`${API_BASE_URL}/property/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload files");
      }

      const fetchedData = await response.json();
      console.log("Fetched Data:", fetchedData);
      return fetchedData;
    } catch (err) {
      console.error("Upload Error:", err);
      setError(err);
      return [];
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    setEntity,
    createEntity,
    updateEntity,
    deleteEntity,
    uploadFiles,
  };
};

export default useApi;
