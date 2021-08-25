import { convertDateTableButton } from "./CityProfileHelpers";

const tableDataHelper = (forecastWeatherData) => {
  let forcastList = forecastWeatherData && forecastWeatherData.list;
  let dateObject = {};

  //New
  if (forcastList) {
    for (let val of forcastList) {
      const convertedTime = convertDateTableButton(val.dt_txt);

      if (dateObject[convertedTime]) {
        dateObject[convertedTime].push(val);
      } else {
        dateObject[convertedTime] = [val];
      }
    }
  }
  let tableData = Object.values(dateObject);
  return tableData;
};

export default tableDataHelper;
