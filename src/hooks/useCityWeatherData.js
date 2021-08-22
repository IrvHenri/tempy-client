import { useState, useEffect } from "react";
import axios from "axios";
const useCityWeatherData = (cityId) => {
  const [cityWeatherData, setCityWeatherData] = useState({
    currentWeatherData: {},
    forecastWeatherData: {},
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (cityId) {
      axios
        .get(`/api/cities/${cityId}/weather-data`)
        .then((response) => {
          const { currentWeatherData, forecastWeatherData } = response.data;
          setCityWeatherData({ currentWeatherData, forecastWeatherData });
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [cityId]);
  return [cityWeatherData, loading];
};

export default useCityWeatherData;
