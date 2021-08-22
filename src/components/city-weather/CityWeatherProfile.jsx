import React from "react";
import * as cityProfileHelpers from "../../helpers/CityProfileHelpers";
import CityWeatherTable from "./CityWeatherTable";
import CircularProgress from "@material-ui/core/CircularProgress";

import Button from "@material-ui/core/Button";
import "./index.css";
const CityWeatherProfile = (props) => {
  const { weather, main, wind, toggle, isToggled, tableData, loading } = props;
  const mainDescription = weather && weather[0].main;
  const description = weather && weather[0].description;
  const icon = weather && weather[0].icon;
  const temperature =
    weather && cityProfileHelpers.temperatureConversion(main.temp);
  const windSpeed = wind && cityProfileHelpers.windSpeedConversion(wind.speed);

  return (
    <>
      {loading ? (
        <CircularProgress
          style={{
            margin: "0 auto",
          }}
        />
      ) : (
        <div>
          <section className="city-profile">
            <article>
              <h2>
                {mainDescription}{" "}
                <img
                  src={`http://openweathermap.org/img/w/${icon}.png`}
                  alt="weather icon"
                />
              </h2>
              <p>{description}</p>
            </article>
            <article>
              <h2>{temperature}</h2>
              <p>{windSpeed}</p>
            </article>
          </section>

          {!isToggled ? (
            <Button onClick={toggle} variant="contained">
              See Forecast
            </Button>
          ) : (
            <Button onClick={toggle} variant="contained">
              Close
            </Button>
          )}
          {isToggled && <CityWeatherTable tableData={tableData} />}
        </div>
      )}
    </>
  );
};

export default CityWeatherProfile;
