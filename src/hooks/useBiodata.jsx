// eita apadoto kore rakhlam server side kora hole tokhon data fetch kore ene kaj korbo.
import { useEffect, useState } from "react";

const useBiodata = () => {
  const [biodata, setBiodata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("biodata.json")
      .then((res) => res.json())
      .then((data) => {
        setBiodata(data);
        setLoading(false);
      });
  }, []);
  return [biodata, loading];
};

export default useBiodata;
