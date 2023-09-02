import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [ready, setReady] = useState(false);

  function handleResponse(response) {
    setReady(true);
    setForecastData(response.data.daily);
  }

  function searchForecast() {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col WeatherForecast-col" key={index}>
                  <WeatherForecastDay forecast={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    searchForecast();
    return null;
  }
}
