import React, {useState} from "react";
import "./App.css";
import axios from "axios";

export default function Weather() {
  const [ready,setReady]=useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      
      city: response.data.name,
    
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      visibility: response.data.visibility,
      date: "Wednesday 07:00"
    });
    setReady(true);
  }
  if (ready) {
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

          <h1>{weatherData.city}</h1>
          <div className="firstheader">
            <ul className="header">
              <li>Last updated:</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>

          <div className="temperature-now">
            <strong>{Math.round(weatherData.temperature)}</strong>
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
                <li> wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li> humidity: {weatherData.humidity}% </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>visibility: {weatherData.visibility / 1000}km</li>
              </ul>
            </div>
          </div>
        </div>
      </div></div>
    );
  } else {
    const apiKey = "bae35d99184617162bd406c1c6a7489e";
    let city = "Tel Aviv";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
