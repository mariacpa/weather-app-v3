import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div classname="container">
        <header className="App-header">
          <h1>Weather App</h1>
          <WeatherSearch />
          <button classname="btn btn-primary">Hello</button>
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
    </div>
  );
}

export default App;
