import React, { Component } from "react";

export default class TopFilter extends Component {
  render() {
    return (
      <div className="toolbar layout3">
        <ul className="toolbar-action-mobile hidden-lg hidden-md">
          <li>
            <a href="#" className="btn btn-primary btn-date">
              Date
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-primary btn-guest">
              Guest
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-primary map-view">
              Map
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-primary btn-sort">
              Sort
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-primary btn-filter">
              Filter
            </a>
          </li>
        </ul>
        <h3
          className="search-string modern-result-string"
          id="modern-result-string"
        >
          {this.props.meta.total_size} flights found
          <div
            id="btn-clear-filter"
            className="btn-clear-filter"
            style={{ display: "none" }}
          >
            Clear filter
          </div>
        </h3>
      </div>
    );
  }
}
