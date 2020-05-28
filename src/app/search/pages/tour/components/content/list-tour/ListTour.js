import React, { Component } from "react";
import ListTourItem from "./ListTourItem";

export default class ListTour extends Component {

  showTopTours = (tours) => {
    if (tours && tours.length > 0) {
      return tours.map((tour, key) => {
        return (
          <ListTourItem tour={tour} key = {key} />
        )
      })
    }
  }

  render() {
    return (
      <div
        id="modern-search-result"
        className="modern-search-result"
        data-layout={1}
      >
        <div className="map-content-loading">
          <div className="st-loader" />
        </div>
        <div className="row row-wrapper">
          {this.showTopTours(this.props.tours)}
        </div>
      </div>
    );
  }
}
