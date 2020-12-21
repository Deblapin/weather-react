import React from "react";
import FormattedDate from "./FormattedDate";

export default function WheaterInfo(props){
    return ( <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
          <div className="firstheader">
            <ul className="header">
              <li>Last updated: <FormattedDate date={props.data.date} /></li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>

          <div className="temperature-now">
            <strong>{Math.round(props.data.temperature)}</strong>
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
                <li> wind: {props.data.wind} km/h</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li> humidity: {props.data.humidity}% </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>visibility: {props.data.visibility / 1000}km</li>
              </ul>
            </div>
          </div>
        </div>
    );
}