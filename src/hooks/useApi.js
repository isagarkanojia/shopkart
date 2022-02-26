import { useEffect, useState } from "react";

function useApi(endpoint, defaultData = {}) {
  const [data, setData] = useState(defaultData);
  const [isLoading, setLoading] = useState(false);
  const [loadError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [endpoint]);

  return { data, isLoading, loadError };
}
export default useApi;
