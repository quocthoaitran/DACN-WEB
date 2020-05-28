import React, { Component } from 'react'
import TopTourContainer from '../../containers/TopTourContainer';
import TopHotelsContainer from '../../containers/TopHotelsContainer';

export default class Top extends Component {
  render() {
    return (
      <div
        className="vc_row wpb_row st bg-holder"
      >
      <div className="container ">
        <div className="row">
          <div className="wpb_column column_container col-md-12 vc_custom_1542167696382">
            <div className="vc_column-inner wpb_wrapper">
              <div className="st-list-of-multi-services">
                <h2 className="title">
                  Top Tour
                </h2>
                <div className="multi-service-wrapper">
                  <TopTourContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="wpb_column column_container col-md-12 didayday-home-mt-30 vc_custom_1542167696382">
            <div className="vc_column-inner wpb_wrapper">
              <div className="st-list-of-multi-services">
                <h2 className="title">
                  Top Hotel
                </h2>
                <div className="multi-service-wrapper">
                  <TopHotelsContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
