import React, { Component } from 'react'
import ItemTopDestination from './ItemTopDestination';

export default class TopDestinations extends Component {
  
  componentDidMount() {
    this.props.getTopDestinationsAPI();
  }

  showTopDestinations = (topDestinations) => {
    if(topDestinations.length > 0) {
      return topDestinations.map((topDestination, key) => {
        return <ItemTopDestination topDestination = {topDestination} key = {key}></ItemTopDestination>
      })
    }
  }

  render() {
    return (
      <div
        className="vc_row wpb_row st bg-holder didauday-home-mt-50"
      >
        <div className="container ">
          <div className="row">
            <div className="wpb_column column_container col-md-12 vc_custom_1543548162184">
              <div className="vc_column-inner wpb_wrapper">
                <div
                  className="vc_empty_space"
                  style={{ height: "32px" }}
                >
                  <span className="vc_empty_space_inner" />
                </div>
                <div className="wpb_text_column wpb_content_element  fs-28 fs-normal">
                  <div className="wpb_wrapper">
                    <h2>Top Destinations</h2>
                  </div>
                </div>
                <div className="row list-destination layout4">
                  {
                    this.showTopDestinations(this.props.topDestinations)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
