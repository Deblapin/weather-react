import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Tel Aviv"/>
       </div>
</div>

  );
}

ReactDOM.render(<App />, document.getElementById("root"));
