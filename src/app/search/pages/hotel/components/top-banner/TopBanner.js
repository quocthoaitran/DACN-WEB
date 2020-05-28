import React, { Component } from "react";

export default class TopBanner extends Component {
  render() {
    return (
      <div className="banner st_1556584363 didauday-search-hotel-banner">
        <div className="container">
          <h1>Search Hotel</h1>
          <form
            action="https://mixmap.travelerwp.com/search-hotel-popup-map/"
            name="get"
            className="hidden-lg hidden-md"
          >
            <div className="search-form-mobile">
              <div className="form-group">
                <div className="dropdown">
                  <div className="icon-field">
                    <i className="input-icon field-icon fa">
                      <svg
                        height="20px"
                        width="20px"
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
                            stroke="gray"
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
                                      <circle
                                        id="Oval"
                                        cx="8.25"
                                        cy="8.25"
                                        r={3}
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
                  </div>
                  <input
                    type="hidden"
                    name="location_id"
                    className="form-control"
                    defaultValue
                  />
                  <input
                    type="text"
                    name="location_name"
                    className="form-control"
                    readOnly
                    placeholder="Where are you going?"
                    id="dropdown-mobile-destination"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    defaultValue
                  />
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdown-mobile-destination"
                  >
                    <li
                      style={{ paddingLeft: "20px" }}
                      data-country="US"
                      data-value={1957}
                      className="item parent_li"
                    >
                      <span className="parent">United States</span>{" "}
                    </li>
                    <li
                      style={{ paddingLeft: "20px" }}
                      data-country="US"
                      data-value={7965}
                      className="item "
                    >
                      <i className="input-icon field-icon fa">
                        <svg
                          height="16px"
                          width="16px"
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
                              stroke="gray"
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
                                        <circle
                                          id="Oval"
                                          cx="8.25"
                                          cy="8.25"
                                          r={3}
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </i>
                      <span className="lv2">California</span>{" "}
                    </li>
                    <li
                      style={{ paddingLeft: "20px" }}
                      data-country="US"
                      data-value={7967}
                      className="item "
                    >
                      <i className="input-icon field-icon fa">
                        <svg
                          height="16px"
                          width="16px"
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
                              stroke="gray"
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
                                        <circle
                                          id="Oval"
                                          cx="8.25"
                                          cy="8.25"
                                          r={3}
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </i>
                      <span className="lv2">Los Angeles</span>{" "}
                    </li>
                    <li
                      style={{ paddingLeft: "20px" }}
                      data-country="US"
                      data-value={7970}
                      className="item "
                    >
                      <i className="input-icon field-icon fa">
                        <svg
                          height="16px"
                          width="16px"
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
                              stroke="gray"
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
                                        <circle
                                          id="Oval"
                                          cx="8.25"
                                          cy="8.25"
                                          r={3}
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </i>
                      <span className="lv2">Nevada</span>{" "}
                    </li>
                    <li
                      style={{ paddingLeft: "20px" }}
                      data-country="US"
                      data-value={1944}
                      className="item "
                    >
                      <i className="input-icon field-icon fa">
                        <svg
                          height="16px"
                          width="16px"
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
                              stroke="gray"
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
                                        <circle
                                          id="Oval"
                                          cx="8.25"
                                          cy="8.25"
                                          r={3}
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </i>
                      <span className="lv2">New Jersey</span>{" "}
                    </li>
                    <li
                      style={{ paddingLeft: "40px" }}
                      data-country="US"
                      data-value={1946}
                      className="item "
                    >
                      <span className="child">Delaware</span>{" "}
                    </li>
                    <li
                      style={{ paddingLeft: "40px" }}
                      data-country="US"
                      data-value={1945}
                      className="item "
                    >
                      <span className="child">Philadelphia</span>{" "}
                    </li>
                    <li
                      style={{ paddingLeft: "20px" }}
                      data-country="US"
                      data-value={275}
                      className="item "
                    >
                      <i className="input-icon field-icon fa">
                        <svg
                          height="16px"
                          width="16px"
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
                              stroke="gray"
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
                                        <circle
                                          id="Oval"
                                          cx="8.25"
                                          cy="8.25"
                                          r={3}
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </i>
                      <span className="lv2">New York City</span>{" "}
                    </li>
                    <li
                      style={{ paddingLeft: "20px" }}
                      data-country="US"
                      data-value={1947}
                      className="item "
                    >
                      <i className="input-icon field-icon fa">
                        <svg
                          height="16px"
                          width="16px"
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
                              stroke="gray"
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
                                        <circle
                                          id="Oval"
                                          cx="8.25"
                                          cy="8.25"
                                          r={3}
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </i>
                      <span className="lv2">San Francisco</span>{" "}
                    </li>
                    <li
                      style={{ paddingLeft: "40px" }}
                      data-country="US"
                      data-value={284}
                      className="item "
                    >
                      <span className="child">Wilmington</span>{" "}
                    </li>
                    <li
                      style={{ paddingLeft: "20px" }}
                      data-country="US"
                      data-value={1952}
                      className="item "
                    >
                      <i className="input-icon field-icon fa">
                        <svg
                          height="16px"
                          width="16px"
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
                              stroke="gray"
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
                                        <circle
                                          id="Oval"
                                          cx="8.25"
                                          cy="8.25"
                                          r={3}
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </i>
                      <span className="lv2">Virginia</span>{" "}
                    </li>
                    <li
                      style={{ paddingLeft: "40px" }}
                      data-country="US"
                      data-value={282}
                      className="item "
                    >
                      <span className="child">Virginia Beach</span>{" "}
                    </li>
                  </ul>
                </div>
                <button type="submit" className="btn btn-primary">
                  <i className="input-icon field-icon fa">
                    <svg
                      height="25px"
                      width="25px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                      <title>ico_search_header</title>
                      <desc>Created with Sketch.</desc>
                      <defs />
                      <g
                        id="ico_search_header"
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g id="Group" stroke="#ffffff" strokeWidth="1.5">
                          <g id="search-remove">
                            <path
                              d="M18.875,9.812 C18.8754045,13.4778233 16.6674237,16.7828921 13.2807219,18.1859288 C9.89402017,19.5889655 5.99561982,18.8136372 3.4034913,16.2215087 C0.81136277,13.6293802 0.0360345119,9.73097983 1.4390712,6.34427809 C2.84210788,2.95757635 6.1471767,0.74959554 9.813,0.75 C12.2163918,0.75 14.521347,1.70474369 16.2208017,3.40419835 C17.9202563,5.10365301 18.875,7.40860817 18.875,9.812 Z"
                              id="Shape"
                            />
                            <path d="M16.221,16.22 L23.25,23.25" id="Shape" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
