import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div>
      <h1>Cali</h1>
      <ul>
        <li>21 Aug, 18:56</li>
        <li>Mostly sunny</li>
      </ul>
      <div classname="row">
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"></img>
          6C
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
  );
}
