import { useState, useEffect } from "react";
import axios from "axios";
const useCityData = () => {
  const [cityData, setCityData] = useState([]);
  useEffect(() => {
    axios
      .get("/api/cities")
      .then((response) => {
        setCityData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return [cityData];
};

export default useCityData;
