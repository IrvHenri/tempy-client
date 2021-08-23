import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SelectMenu from "./components/select-menu/SelectMenu";
import CityWeatherProfile from "./components/city-weather/CityWeatherProfile";
import useToggle from "./hooks/useToggle";
import useCityData from "./hooks/useCityData";
import useCityWeatherData from "./hooks/useCityWeatherData";
import tableDataHelper from "./helpers/TableDataHelper";

function App() {
  const [cityId, setCityId] = useState("");
  const [cityData, cityDataLoading] = useCityData();
  const [isToggled, toggle] = useToggle();
  const [cityWeatherData, loading] = useCityWeatherData(cityId);
  const { currentWeatherData, forecastWeatherData } = cityWeatherData;
  let tableData = tableDataHelper(forecastWeatherData);

  const handleChange = (event) => {
    setCityId(event.target.value);
    if (isToggled) {
      toggle();
    }
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        <SelectMenu
          cityData={cityData}
          cityId={cityId}
          handleChange={handleChange}
          cityDataLoading={cityDataLoading}
        />

        {cityId && (
          <CityWeatherProfile
            {...currentWeatherData}
            isToggled={isToggled}
            toggle={toggle}
            tableData={tableData}
            loading={loading}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
