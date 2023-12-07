import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/rdhande/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by <a href="https://github.com/rdhande">Rashi</a>
        </footer>
      </div>
    </div>
  );
}
