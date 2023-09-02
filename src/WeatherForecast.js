import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [forecastData, setForecastData] = useState(null);
  let [ready, setReady] = useState(false);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col WeatherForecast-col">
            <WeatherForecastDay forecast={forecastData[1]} />
          </div>
          <div className="col WeatherForecast-col">
            <WeatherForecastDay forecast={forecastData[2]} />
          </div>
          <div className="col WeatherForecast-col">
            <WeatherForecastDay forecast={forecastData[3]} />
          </div>
          <div className="col WeatherForecast-col">
            <WeatherForecastDay forecast={forecastData[4]} />
          </div>
          <div className="col WeatherForecast-col">
            <WeatherForecastDay forecast={forecastData[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
