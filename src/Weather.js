import React, {useState} from "react";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import "./App.css";
import axios from "axios";
import Loader from 'react-loader-spinner';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity]=useState(props.defaultCity)
  function handleResponse(response) {
    
    setWeatherData({ 
      icon: response.data.weather[0].icon,
      ready:true,
      city: response.data.name,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      visibility: response.data.visibility,
      date: new Date (response.data.dt*1000),
    });

  }

  function search(){
     const apiKey = "bae35d99184617162bd406c1c6a7489e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
    
  }

  function handleCityChange(event){
    setCity(event.target.value);
 
  }


  if (weatherData.ready) {
    return (
      <div className="weather-app-wrapper">
      <div className="weather-app">
        <div className="Weather">
          <form className="mb-3" onSubmit={handleSubmit}>
            <div className="row">
              {" "}
              <div className="col-9">
                <input
                  type="search"
                  placeholder="type a city..."
                  className="form-control"
                  id="city-input"
                  onChange={handleCityChange}
                />
              </div>{" "}
              <div className="col-3">
                <input type="submit" value="search" className="btn btn-info" />
              </div>
            </div>
          </form>
          <Weatherinfo data={weatherData}/>

          </div>
          
          <WeatherForecast city={weatherData.city}/>
          </div>
          <small> <a href="https://github.com/Deblapin/weather-react">Open-source code</a> by Debora Lapin🙋
</small>
          </div>
    );
  } else {
   search();
    return (
      <Loader className="loader" type="ThreeDots" color="#FCA311" height={100} width={100}  />
     );
  }
}
