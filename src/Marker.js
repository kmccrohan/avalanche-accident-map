import React from "react";
import "./Marker.css";

class Marker extends React.Component {
  onClick = () => {
    this.props.onClick(this.props.accident);
  };

  render() {
    return <div className="Marker" onClick={this.onClick} />;
  }
}

export default Marker;
