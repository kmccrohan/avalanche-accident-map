import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import Report from "./Report";
import accidents from "./accidents.json";

class Map extends React.Component {
  static defaultProps = {
    center: { lat: 39.8, lng: -98.6 },
    zoom: 5
  };

  constructor() {
    super();
    this.state = { selectedAccident: null };
  }

  onMarkerClick = accident => {
    this.setState({ selectedAccident: accident });
  };

  // onBoundsChange = (center, zoom, bounds, marginBounds) => {
  //   this.setState({ selectedAccident: accident });
  // };

  render() {
    const markerList = accidents.map(accident => (
      <Marker
        lat={accident.LAT}
        lng={accident.LON}
        key={accident.id}
        accident={accident}
        onClick={this.onMarkerClick}
      />
    ));
    let report = null;
    if (this.state.selectedAccident) {
      const acc = this.state.selectedAccident;
      report = <Report accident={acc} lat={acc.LAT} lng={acc.LON} />;
    }
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAaebRzCMkKy3XlLSuOBZ_sd1AO05o0WDk" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
        {markerList}
        {report}
      </GoogleMapReact>
    );
  }
}

export default Map;
