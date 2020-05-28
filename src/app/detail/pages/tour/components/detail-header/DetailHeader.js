import React, { Component } from "react";
import { Rate } from 'antd';
export default class DetailHeader extends Component {

  roundRate = rate => {
    let tmp = rate - parseInt(rate);
    tmp = tmp * 2;
    if (tmp >= 1.5) return parseInt(rate) + 1;
    else {
      if (tmp >= 0.5) return parseInt(rate) + 0.5;
    }
    return parseInt(rate);
  };

  render() {
    console.log(this.props);
    return (
      <>
        <div className="st-hotel-header">
          <div className="left">
            <h2 className="st-heading">{ this.props.name }</h2>
            <div className="sub-heading">
              <i className="input-icon field-icon fa">
                <svg
                  height="16px"
                  width="16px"
                  viewBox="0 0 11 16"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                  <title>ico_maps_add_2</title>
                  <desc>Created with Sketch.</desc>
                  <defs />
                  <g
                    id="Hotel-layout"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      id="Hotel_Search_Hover"
                      transform="translate(-170.000000, -553.000000)"
                      stroke="#A0A9B2"
                    >
                      <g
                        id="location-select"
                        transform="translate(135.000000, 359.000000)"
                      >
                        <g
                          id="hover"
                          transform="translate(0.000000, 42.000000)"
                        >
                          <g
                            id="Group"
                            transform="translate(35.000000, 149.000000)"
                          >
                            <g
                              id="ico_maps_add_2"
                              transform="translate(0.000000, 3.000000)"
                            >
                              <g id="Group">
                                <g id="pin-1">
                                  <path
                                    d="M10.5,5.5 C10.5,8.314 8.54466667,9.93266667 7.07933333,11.5 C6.202,12.4386667 5.5,15.5 5.5,15.5 C5.5,15.5 4.8,12.4406667 3.92466667,11.5046667 C2.458,9.938 0.5,8.31666667 0.5,5.5 C0.5,2.73857625 2.73857625,0.5 5.5,0.5 C8.26142375,0.5 10.5,2.73857625 10.5,5.5 Z"
                                    id="Shape"
                                  />
                                  <circle id="Oval" cx="5.5" cy="5.5" r={2} />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </i>
                { `${this.props.city && this.props.city.name}, ${this.props.city && this.props.city.country}` }
            </div>
          </div>
          <div className="right">
            <div className="review-score style-2">
              <span className="head-rating">Average</span>
              <Rate
                  allowHalf
                  disabled
                  value = { this.roundRate(this.props.rate) }
                  style={{ fontSize: 15 }}
              />
              <p className="st-link">from { this.props.num_review } reviews</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
