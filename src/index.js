import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


function Weather() {
  return (
    <div className="App">
      <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

