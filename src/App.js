import React, { Component } from "react";
import Map from "./Map";
import "./App.css";
import "./Popup.css";
import Popup from "react-popup";

const helpText = `Data for this project was taken from the Colorado Avalanche
Information Center: http://avalanche.state.co.us/accidents/statistics-and-reporting/.
Source code for this project can be found at: https://github.com/kmccrohan/avalanche-accident-map.
Collaborators are welcome!`;

class App extends Component {
  onHelpClick = () => {
    Popup.alert(helpText, "About");
  };

  render() {
    return (
      <div className="App" id="App">
        <Popup />
        <div className="header">
          <button id="help-button" onClick={this.onHelpClick}>
            ?
          </button>
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
