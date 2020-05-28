import React, { Component } from "react";

export default class Itinerary extends Component {

  showItinerary = (itineraries) => {
    if (itineraries && itineraries.length > 0) {
      return itineraries.map((itinerary, index) => {
        if (!itinerary.location) {
          return null;
        }
        return (
          <div className="item active" key = { itinerary._id }>
            <div className="header">
              <h5>Day {index + 1}: { itinerary.location.name }</h5>
            </div>
            <div className="body">
              <p>
                {
                  itinerary.description
                }
              </p>
            </div>
          </div>
        )
      });
    }
  }

  render() {
    return (
      <>
        <div className="st-program">
          <div className="st-title-wrapper">
            <h3 className="st-section-title">Itinerary</h3>
          </div>
          <div className="st-program-list">
            { this.showItinerary(this.props.itineraries) }
          </div>
        </div>
      </>
    );
  }
}
