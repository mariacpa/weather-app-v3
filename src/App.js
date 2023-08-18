import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <WeatherSearch />
      </header>
      <footer className="App-footer">
        <a
          href="https://github.com/mariacpa/weather-app-v3"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced Code
        </a>
        <span> by Maria Padilla</span>
      </footer>
    </div>
  );
}

export default App;
