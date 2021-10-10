import { useState, useRef, useEffect } from "react";
const baseUrl = "https://my-json-server.typicode.com/TomaszJaworski/test-api/";
const useFetch = (url) => {
  const isMounted = useRef(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isMounted.current = true;
    (async () => {
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          if (isMounted.current) setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        if (isMounted.current) setError(e);
      } finally {
        if (isMounted.current) setLoading(false);
      }
    })();
    return () => {
      isMounted.current = false;
    };
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
