import React from "react";
import axios from "axios";

export default function WeatherSearch() {
  function handleSubmit(response) {
    alert(response.data.main.temp);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=cali&appid=cb286bad3607984b41ed10c8de5cf00e&units=metric`;
  axios.get(url).then(handleSubmit);
  <h2>Hola</h2>;
}
