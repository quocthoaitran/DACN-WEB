import React, { Component } from "react";

export default class WidgetBottom extends Component {
  render() {
    return (
      <div className="st-hotel-content">
        <div className="hotel-target-book-mobile">
          <div className="price-wrapper">
            from <span className="price">${this.props.price}</span>{" "}
          </div>
          <button href className="btn btn-mpopup btn-green">
            Check Availability
          </button>
        </div>
      </div>
    );
  }
}
