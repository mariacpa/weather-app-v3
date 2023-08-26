import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <h1 className="text-capitalize">{props.data.city}</h1>
      <div className="row">
        <div className="col-5">
          <ul>
            <li className="text-capitalize pt-2 fw-semibold">
              {props.data.description}
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li className="small pt-3 fw-light">
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
        <div className="col-7">
          <div className="clearfix">
            <div className="float-start">
              <WeatherIcons code={props.data.icon} />
            </div>
            <div className="float-start">
              <span className="temperature">{props.data.temperature}</span>
              <span className="unit">°C |</span>
              <span className="unit">°F</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
