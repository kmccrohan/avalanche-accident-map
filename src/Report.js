import React from "react";
import "./Report.css";

class Report extends React.Component {
  render() {
    const acc = this.props.accident;
    const date = acc.MM + "/" + acc.DD + "/" + acc.YYYY;
    return (
      <div className="Report">
        <div className="Close-report">
          <button onClick={this.props.onClose} id="Close-button">
            X
          </button>
        </div>
        <div>
          Date: {date} <br />
          Place: {acc.Place} <br />
          Setting: {acc.Setting} <br />
          Primary Activity: {acc["Primary Activity"]} <br />
          Mode of Travel: {acc["Travel Mode"]} <br />
          Number of deaths: {acc.deaths} <br />
          Extra Notes: {acc.notes} <br />
        </div>
      </div>
    );
  }
}

export default Report;
