import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [celsius, setCelsius] = useState(true);

  function convertF(event) {
    event.preventDefault();
    setCelsius(false);
  }

  let tempF = Math.round((props.celsius * 9) / 5 + 32);

  function convertC(event) {
    event.preventDefault();
    setCelsius(true);
  }

  if (celsius === true) {
    return (
      <div>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">°C</span>
        <span className="unit"> | </span>
        <span className="unit fw-semibold">
          <a onClick={convertF} href="_blank" rel="noreferrer">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">{tempF}</span>
        <span className="unit">°F</span>
        <span className="unit"> | </span>
        <span className="unit fw-semibold">
          <a onClick={convertC} href="_blank" rel="noreferrer">
            °C
          </a>
        </span>
      </div>
    );
  }
}
