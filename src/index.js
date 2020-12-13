import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


function Weather() {
  return (
    <div className="App">
      <App />
      <p><a href="https://github.com/Deblapin/My-Weather-app" target="_blank"
      class="opensourcelink" id="opensource">Open-source code
    </a> by Debora Lapin
    </p>
    </div>
    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

