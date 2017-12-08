import React, { Component } from "react";
import Map from "./Map";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>❄ Avalanche Accidents in US 2012-2017 ❄</h1>
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
