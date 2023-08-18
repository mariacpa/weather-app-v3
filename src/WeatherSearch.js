import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cb286bad3607984b41ed10c8de5cf00e&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type city name"
        onChange={handleChange}
      ></input>
      <input type="submit" value="Search"></input>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>{city}</li>
          <li>Temperature: {weather.temperature}°C</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>Description: {weather.description}</li>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt="weather icon"
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
