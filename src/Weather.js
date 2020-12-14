import React from "react";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Tel Aviv",
    temperature: 20,
    date: "Saturday 23:32",
    description: "Cloudy",
    humidity: 80,
    wind: 10,
    visibility: 20
  };

  return (
    <div className="weather-app-wrapper">
    <div className="weather-app">
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            {" "}
            <div className="col-9">
              <input
                type="search"
                placeholder="type a city..."
                className="form-control"
                id="city-input"
              />
            </div>{" "}
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-info" />
            </div>
          </div>
        </form>

        <h1>Tel Aviv </h1>
        <div className="firstheader">
          <ul className="header">
            <li>Last updated:{weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>

        <div className="temperature-now">
          <strong>{weatherData.temperature}</strong>
          <span className="units">
            <a href="/" className="active">
              °C{" "}
            </a>{" "}
            | <a href="/">°F</a>
          </span>
        </div>

        <div className="overview">
          <div className="col">
            <ul>
              <li> wind:{weatherData.wind} km/h</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li> humidity:{weatherData.humidity}% </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>visibility:{weatherData.visibility}km</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
<small> <a href="https://github.com/Deblapin/weather-react" target="_blank">Open-source code</a> by Debora Lapin🙋
</small> 
</div>
  );
}

