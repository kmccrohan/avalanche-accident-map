import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component {
  static defaultProps = {
    center: { lat: 39.8, lng: -98.6 },
    zoom: 5
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAaebRzCMkKy3XlLSuOBZ_sd1AO05o0WDk" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
        <AnyReactComponent lat={40} lng={-110} text={"Kreyser Avrora"} />
      </GoogleMapReact>
    );
  }
}

export default Map;
