// eita apadoto kore rakhlam server side kora hole tokhon data fetch kore ene kaj korbo.
import { useEffect, useState } from "react";

const useBiodata = () => {
  const [biodata, setBiodata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("biodata.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok!");
        }
        return res.json();
      })
      .then((data) => {
        setBiodata(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return [biodata, loading, error];
};

export default useBiodata;
