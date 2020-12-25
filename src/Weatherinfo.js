import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WheaterInfo(props){
    return ( <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
          <div className="firstheader">
            <ul className="header">
              <li>Last updated: <FormattedDate date={props.data.date} /></li>
              <li className="text-capitalize">{props.data.description}</li>
            <li className="float-center"><WeatherIcon code={props.data.icon} /></li>
            </ul>
          </div>

          <div className="temperature-now">
            <strong><WeatherTemperature celsius={props.data.temperature} /></strong> 
          </div>

          <div className="overview">
            <div className="col">
              <ul>
                <li> wind: {Math.round(props.data.wind)} km/h</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li> humidity: {props.data.humidity}% </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>visibility: {props.data.visibility/1000}{" "}km</li>
              </ul>
            </div>
          </div>
        </div>
    );
}