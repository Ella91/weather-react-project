import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
  <div className="App">
    <div className="container">
      <Weather defaultCity="Vienna"/>
        <footer>
          This site was coded by Ella and is {" "}
          <a 
          href="https://github.com/Ella91/weather-react-project" target="_blank">
          open-sourced on GitHub</a>
        </footer> 
      </div>
    </div>
  );
}

