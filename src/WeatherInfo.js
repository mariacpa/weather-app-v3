import React from "react";

export default function WeatherInfo(props) {
  <div className="weather-info">
    <h1 className="text-capitalize">{props.data.city}</h1>
    <ul>
      <li>DATE</li>
      <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row">
      <div className="col-6">
        <div className="clearfix">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="float-start"
          />
          <div className="float-start">
            <span className="temperature">{props.data.temperature}</span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  </div>;
}
