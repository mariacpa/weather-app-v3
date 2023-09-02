import React from "react";
import WeatherIcons from "./WeatherIcons";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col WeatherForecast-col">
          <div className="WeatherForecast-day fw-semibold">Thu</div>
          <div className="WeatherForecast-icon">
            <WeatherIcons code="10d" size="30" />
          </div>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-max fw-semibold">20°</span>
            <span className="WeatherForecast-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
