import React, { Component } from 'react';
import { Rate } from 'antd';

import { NavLink } from 'react-router-dom';

export default class SimilarItem extends Component {

  roundRate = rate => {
    let tmp = rate - parseInt(rate);
    tmp = tmp * 2;
    if (tmp >= 1.5) return parseInt(rate) + 1;
    else {
      if (tmp >= 0.5) return parseInt(rate) + 0.5;
    }
    return parseInt(rate);
  };

  transformUrl = (name, id) => {
    return name.toLowerCase().trim().replace(/\s+/g, "-") + "-" + id;
  };

  render() {
    return (
      <NavLink to = {`/tours/${this.transformUrl(this.props.tour.name, this.props.tour._id)}`}>
        <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="item has-matchHeight">
              <div className="featured">
                  <img
                    src= { `http://localhost:8001/${this.props.tour.images[0]}` }
                    alt="WordPress Booking Theme"
                    className="img-responsive"
                  />
                <a
                  href="#"
                  className="share-item like-it"
                  data-toggle="modal"
                  data-target="#st-login-form"
                  data-type="st_tours"
                  data-id={8543}
                >
                  <i className="fa fa-heart-o" />
                </a>
              </div>
              <div className="body">
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
                <span className="ml5 f14 address">{this.props.tour.city.name}, {this.props.tour.city.country}</span>
                <h4 className="title">
                  <a
                    href="st_tour/museum-of-american-history-through-music-tour-2/"
                    className="st-link c-main"
                  >
                    {this.props.tour.name}
                  </a>
                </h4>
                <div className="st-stars style-2">
                  <Rate disabled value={this.roundRate(this.props.tour.rate || 0)} />
                </div>
                <p className="review-text">{this.props.tour.num_review} review</p>
                <div className="st-flex space-between">
                  <div className="left st-flex">
                    <i className="input-icon field-icon fa">
                      <svg
                        height="16px"
                        width="16px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 24 24"
                        style={{ enableBackground: "new 0 0 24 24" }}
                        xmlSpace="preserve"
                      >
                        <title>time-clock-circle-1</title>
                        <g fill="#5E6D77">
                          <path
                            d="M12,23.25C5.797,23.25,0.75,18.203,0.75,12C0.75,5.797,5.797,0.75,12,0.75c6.203,0,11.25,5.047,11.25,11.25
		C23.25,18.203,18.203,23.25,12,23.25z M12,2.25c-5.376,0-9.75,4.374-9.75,9.75s4.374,9.75,9.75,9.75s9.75-4.374,9.75-9.75
		S17.376,2.25,12,2.25z"
                          >
                            <path
                              d="M15.75,16.5c-0.2,0-0.389-0.078-0.53-0.22l-2.25-2.25c-0.302,0.145-0.632,0.22-0.969,0.22c-1.241,0-2.25-1.009-2.25-2.25
		c0-0.96,0.615-1.808,1.5-2.121V5.25c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v4.629c0.885,0.314,1.5,1.162,1.5,2.121
		c0,0.338-0.075,0.668-0.22,0.969l2.25,2.25c0.292,0.292,0.292,0.768,0,1.061C16.139,16.422,15.95,16.5,15.75,16.5z M12,11.25
		c-0.414,0-0.75,0.336-0.75,0.75s0.336,0.75,0.75,0.75s0.75-0.336,0.75-0.75S12.414,11.25,12,11.25z"
                            />
                          </path>
                        </g>
                      </svg>
                    </i>{" "}
                    <span className="duration">{this.props.tour.duration}</span>
                  </div>
                  <div className="right st-flex">
                    <i className="input-icon field-icon fa">
                      <svg
                        height="16px"
                        width="9px"
                        viewBox="0 0 11 18"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                        <title>thunder</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Hotel-layout"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="Room_Only_Detail_1"
                            transform="translate(-135.000000, -4858.000000)"
                            fill="#FFAB53"
                            fillRule="nonzero"
                          >
                            <g
                              id="nearby-hotel"
                              transform="translate(130.000000, 4334.000000)"
                            >
                              <g
                                id="h1-g"
                                transform="translate(5.000000, 136.000000)"
                              >
                                <g id="hotel-grid">
                                  <g
                                    id="price"
                                    transform="translate(0.000000, 383.000000)"
                                  >
                                    <g
                                      id="thunder"
                                      transform="translate(0.000000, 5.000000)"
                                    >
                                      <path
                                        d="M10.0143234,6.99308716 C9.91102517,6.83252576 9.73362166,6.73708716 9.54386728,6.73708716 L5.61404272,6.73708716 L5.61404272,0.561648567 C5.61404272,0.296666111 5.42877956,0.0676134793 5.16941114,0.0125959355 C4.90555149,-0.0435444154 4.64730587,0.0923152337 4.5395164,0.333718743 L0.0482883306,10.4389819 C-0.0291853536,10.6118942 -0.0123432484,10.8139994 0.0909549973,10.9723152 C0.194253243,11.1317538 0.371656752,11.2283152 0.561411138,11.2283152 L4.4912357,11.2283152 L4.4912357,17.4037538 C4.4912357,17.6687363 4.67649886,17.8977889 4.93586728,17.9528065 C4.97516552,17.9606661 5.01446377,17.9651573 5.05263921,17.9651573 C5.27046377,17.9651573 5.47369184,17.8382801 5.56576201,17.6316837 L10.0569901,7.5264205 C10.133341,7.35238541 10.1187445,7.15252576 10.0143234,6.99308716 Z"
                                        id="Shape"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </i>{" "}
                    <span className="price">
                      <span className="text-lg lh1em item ">from {this.props.tour.price}$</span>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </NavLink>
    )
  }
}
