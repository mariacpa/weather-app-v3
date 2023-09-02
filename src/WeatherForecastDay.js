import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecastDay(props) {
  function date() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day fw-semibold">{date()}</div>
      <div className="WeatherForecast-icon">
        <WeatherIcons code={props.forecast.weather[0].icon} size={30} />
      </div>
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-max fw-semibold">
          {Math.round(props.forecast.temp.max)}°
        </span>
        <span className="WeatherForecast-min">
          {Math.round(props.forecast.temp.min)}°
        </span>
      </div>
    </div>
  );
}
