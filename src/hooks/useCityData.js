import { useState, useEffect } from "react";
import axios from "axios";
const useCityData = () => {
  const [cityData, setCityData] = useState([]);
  const [cityDataLoading, setCityDataLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/api/cities")
      .then((response) => {
        setCityData(response.data);
        setCityDataLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return [cityData, cityDataLoading];
};

export default useCityData;
