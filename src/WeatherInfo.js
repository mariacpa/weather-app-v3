import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <h1 className="text-capitalize pb-3">{props.data.city}</h1>
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
              <WeatherIcons code={props.data.icon} size="50" />
            </div>
            <div className="float-start">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
