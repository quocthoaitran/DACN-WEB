import React, { Component } from "react";

export default class Description extends Component {
  render() {
    return (
      <>
        <h2 className="st-heading-section">
          Description{" "}
          <a
            href="#1"
            className="pull-right toggle-section"
            data-target="st-description"
          >
            <i className="fa fa-angle-up" />
          </a>
        </h2>
        <div
          className="st-description"
          data-toggle-section="st-description"
          data-show-all="st-description"
          data-height={120}
        >
          <p>
            {this.props.description}
          </p>
        </div>
      </>
    );
  }
}
