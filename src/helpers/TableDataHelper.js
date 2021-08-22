const tableDataHelper = (forecastWeatherData) => {
  let forcastList = forecastWeatherData && forecastWeatherData.list;
  let tableData = [];
  let index = 0;

  if (forcastList) {
    while (index < forcastList.length) {
      let copiedForcastList = [...forcastList];
      tableData.push([copiedForcastList.splice(index, 8)]);
      index += 8;
    }
  }

  return tableData;
};

export default tableDataHelper;
