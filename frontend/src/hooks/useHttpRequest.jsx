import { useState } from "react";
import { useCallback } from "react";
import useAxios from "./useAxios";

const useHttpRequest = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const axios = useAxios();
  const sendRequest = useCallback(
    async (requestConfig, handleData) => {
      setIsloading(true);
      setError(null);

      try {
        const response = await axios({
          ...requestConfig,
          url: requestConfig.url,
          method: requestConfig.method || "GET",
          data: requestConfig.data,
        });

        if (!response.statusText === "OK") {
          throw Error(response.text);
        }

        const data = await response.data;

        console.log(data);
        handleData(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsloading(false);
      }
    },
    [axios]
  );

  return { isLoading, error, sendRequest };
};

export default useHttpRequest;
