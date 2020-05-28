import React, { Component } from "react";

export default class Overview extends Component {
  render() {
    return (
      <>
        <div className="st-overview">
          <h3 className="st-section-title">Overview</h3>
          <div className="st-description" data-toggle-section="st-description">
            <p style={{ textAlign: "justify" }}>
              { this.props.overview }
            </p>
          </div>
        </div>
      </>
    );
  }
}
