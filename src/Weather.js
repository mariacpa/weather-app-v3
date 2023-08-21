import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather border">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type city name"
              className="form-control"
              autoFocus="on"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            ></input>
          </div>
        </div>
      </form>
      <div className="weather-info">
        <h1>Cali</h1>
        <ul>
          <li>21 Aug, 18:56</li>
          <li>Mostly sunny</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="cloudy"
                className="float-start"
              ></img>
              <div className="float-start">
                <span className="temperature">6</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:0%</li>
              <li>Humidity: 60%</li>
              <li>Wind: 14 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
