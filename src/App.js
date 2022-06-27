import React, {useState} from 'react'
import axios from 'axios'

function App() {

  //got the api first from openweathermap.org
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=1647da47fb3f9d3c5aef9e617ce8ac18`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
