import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import accidents from "./accidents.json";

class Map extends React.Component {
  static defaultProps = {
    center: { lat: 39.8, lng: -98.6 },
    zoom: 5
  };

  render() {
    const markerList = accidents.map(accident => (
      <Marker
        lat={accident.LAT}
        lng={accident.LON}
        key={accident.id}
        accident={accident}
      />
    ));
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAaebRzCMkKy3XlLSuOBZ_sd1AO05o0WDk" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
        {markerList}
      </GoogleMapReact>
    );
  }
}

export default Map;
