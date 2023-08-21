import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div classname="container">
        <header></header>
        <div>
          <Weather />
          <button classname="btn btn-primary">Hello</button>
        </div>
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
