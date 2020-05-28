import React, { Component } from "react";
import { Rate } from "antd";
import { NavLink } from "react-router-dom";

export default class HotelNearByItem extends Component {
  roundRate = rate => {
    let tmp = rate - parseInt(rate);
    tmp = tmp * 2;
    if (tmp >= 1.5) return parseInt(rate) + 1;
    else {
      if (tmp >= 0.5) return parseInt(rate) + 0.5;
    }
    return parseInt(rate);
  };

  minPrice = rooms => {
    return rooms.reduce((result, item) => {
      return result > item.price ? item.price : result;
    }, 1000);
  };

  transformUrl = (name, id) => {
    return name.toLowerCase().trim().replace(/\s+/g, '-') + '-' + id;
  }

  render() {
    return (
      <NavLink to = {`/hotels/${this.transformUrl(this.props.hotel.name || '', this.props.hotel._id)}`}>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="item">
            <div className="featured-image">
              <a>
                <img
                  src={`http://localhost:8001/${this.props.hotel.images[0]}`}
                  alt="thumb hotel"
                  className="img-responsive img-full"
                />
              </a>
            </div>
            <h4 className="title">
              <a
                className="st-link c-main"
              >
                {this.props.hotel.name}
              </a>
            </h4>
            <div className="sub-title didauday-nearby-hidden">
              <i className="input-icon field-icon fa">
                <svg
                  height
                  width="10px"
                  viewBox="0 0 17 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                  <title>ico_maps_search_box</title>
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
                      id="Search_Result_1_Grid"
                      transform="translate(-165.000000, -328.000000)"
                      stroke="#A0A9B2"
                    >
                      <g
                        id="form_search_hotel_row"
                        transform="translate(135.000000, 290.000000)"
                      >
                        <g
                          id="input"
                          transform="translate(30.000000, 0.000000)"
                        >
                          <g
                            id="where"
                            transform="translate(0.000000, 26.000000)"
                          >
                            <g
                              id="Group"
                              transform="translate(0.000000, 12.000000)"
                            >
                              <g id="ico_maps_search_box">
                                <path
                                  d="M15.75,8.25 C15.75,12.471 12.817,14.899 10.619,17.25 C9.303,18.658 8.25,23.25 8.25,23.25 C8.25,23.25 7.2,18.661 5.887,17.257 C3.687,14.907 0.75,12.475 0.75,8.25 C0.75,4.10786438 4.10786438,0.75 8.25,0.75 C12.3921356,0.75 15.75,4.10786438 15.75,8.25 Z"
                                  id="Shape"
                                />
                                <circle id="Oval" cx="8.25" cy="8.25" r={3} />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </i>
              {this.props.hotel.address}
            </div>
            <div className="reviews didauday-nearby-mt-5">
              <span className="rate">
                <Rate
                  disabled
                  defaultValue={this.roundRate(this.props.hotel.rate)}
                  style={{ fontSize: 15 }}
                />
              </span>
              <span className="summary">
                {this.props.hotel.num_review} reviews
              </span>
            </div>
            <div className="price-wrapper">
              from{" "}
              <span className="price">
                ${this.minPrice(this.props.hotel.rooms)}{" "}
              </span>
              <span className="unit">/night</span>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
}
