import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Weather />
       <small> <a href="https://github.com/Deblapin/weather-react" target="_blank">Open-source code</a> by Debora Lapin🙋
</small> 
</div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

