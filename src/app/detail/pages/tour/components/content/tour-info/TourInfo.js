import React, { Component } from "react";

export default class TourInfo extends Component {
  render() {
    return (
      <>
        <div className="st-tour-feature">
          <div className="row">
            <div className="col-xs-6 col-lg-3">
              <div className="item">
                <div className="icon">
                  <i className="input-icon field-icon fa">
                    <svg
                      height="32px"
                      width="32px"
                      viewBox="0 0 34 34"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                      <title>ico_clock</title>
                      <desc>Created with Sketch.</desc>
                      <defs />
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g
                          id="Tour_Detail_1"
                          transform="translate(-134.000000, -1005.000000)"
                          stroke="#5191FA"
                        >
                          <g
                            id="tour-detail"
                            transform="translate(0.000000, 211.000000)"
                          >
                            <g
                              id="feauture"
                              transform="translate(135.000000, 765.000000)"
                            >
                              <g id="Group-3">
                                <g
                                  id="Group"
                                  transform="translate(0.000000, 25.000000)"
                                >
                                  <g
                                    id="ico_clock"
                                    transform="translate(0.000000, 5.000000)"
                                  >
                                    <circle id="Oval" cx={16} cy={16} r={16} />
                                    <circle
                                      id="Oval"
                                      cx={16}
                                      cy="17.3333333"
                                      r="2.28571429"
                                    />
                                    <path
                                      d="M16,15.047619 L16,7.04761905"
                                      id="Shape"
                                    />
                                    <path
                                      d="M17.6167619,18.9500952 L21.7142857,23.047619"
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
                </div>
                <div className="info">
                  <h4 className="name">Duration</h4>
                  <p className="value">{this.props.duration} </p>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-lg-3">
              <div className="item">
                <div className="icon">
                  <i className="input-icon field-icon fa">
                    <svg
                      height="32px"
                      width="32px"
                      viewBox="0 0 34 34"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                      <title>ico_tour_type</title>
                      <desc>Created with Sketch.</desc>
                      <defs />
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g
                          id="Tour_Detail_1"
                          transform="translate(-335.000000, -1005.000000)"
                          stroke="#5191FA"
                        >
                          <g
                            id="tour-detail"
                            transform="translate(0.000000, 211.000000)"
                          >
                            <g
                              id="feauture"
                              transform="translate(135.000000, 765.000000)"
                            >
                              <g
                                id="Group"
                                transform="translate(201.000000, 25.000000)"
                              >
                                <g
                                  id="ico_tour_type"
                                  transform="translate(0.000000, 5.000000)"
                                >
                                  <path
                                    d="M13.4810667,23.7283556 C13.7772954,25.6164963 13.043711,27.5192464 11.5566476,28.7198584 C10.0695841,29.9204704 8.05496197,30.2365427 6.27166976,29.549014 C4.48837756,28.8614852 3.20733983,27.2748074 2.91111111,25.3866667 L2.74613333,24.3299556 C2.65661545,23.7692095 2.79434998,23.1959129 3.12883306,22.7370331 C3.46331614,22.2781533 3.96694361,21.9715605 4.52817778,21.8851556 L10.8712889,20.8896 C11.432035,20.8000821 12.0053315,20.9378166 12.4642113,21.2722997 C12.9230912,21.6067828 13.2296839,22.1104103 13.3160889,22.6716444 L13.4810667,23.7283556 Z"
                                    id="Shape"
                                  />
                                  <path
                                    d="M5.11555556,0.1408 C1.71134814,0.982901045 -0.457506858,4.31950538 0.154844444,7.77244444 L1.41777778,15.8691556 C1.60071,17.0365699 2.69505968,17.8348913 3.86257778,17.6526222 L10.2042667,16.6570667 C10.7657612,16.571 11.2697435,16.2645497 11.6045222,15.8056305 C11.9393009,15.3467113 12.0772269,14.7732252 11.9877333,14.2122667 L11.9592889,14.0088889 C11.7659953,12.7663569 11.9436025,11.4944126 12.4698667,10.3523556 C12.9981751,9.20988894 13.1758566,7.93642212 12.9804444,6.69297778 L12.7827556,5.4272 C12.5097684,3.68767687 11.5342848,2.1366314 10.0846439,1.13712946 C8.63500309,0.137627517 6.8384634,-0.222588541 5.11555556,0.1408 Z"
                                    id="Shape"
                                  />
                                  <path
                                    d="M18.2583111,25.6995556 C17.8428835,28.5534868 19.7641913,31.223136 22.6023163,31.7355326 C25.4404413,32.2479292 28.1739846,30.4186694 28.7827556,27.5996444 L28.9719111,26.5457778 C29.1807578,25.3831626 28.4089448,24.2709374 27.2467556,24.0597333 L20.9292444,22.9219556 C20.3703881,22.8193233 19.7936791,22.9438755 19.3269888,23.2679956 C18.8602984,23.5921158 18.5421913,24.0890206 18.4432,24.6485333 L18.2583111,25.6995556 Z"
                                    id="Shape"
                                  />
                                  <path
                                    d="M27.1770667,2.31253333 C30.5568647,3.23734789 32.6432678,6.62146013 31.9514667,10.0565333 L30.4965333,18.1233778 C30.3971763,18.68204 30.079348,19.1781018 29.6133417,19.5018508 C29.1473353,19.8255998 28.5715511,19.9503581 28.0133333,19.8485333 L21.6958222,18.7107556 C21.1363095,18.6117642 20.6394047,18.2936571 20.3152845,17.8269668 C19.9911643,17.3602764 19.8666122,16.7835675 19.9692444,16.2247111 L20.0062222,16.0170667 C20.2290597,14.7795819 20.0806008,13.5038248 19.5795556,12.3505778 C19.0784767,11.1968384 18.9300215,9.92061854 19.1528889,8.68266667 L19.3804444,7.42257778 C19.6924113,5.68717624 20.7045511,4.15653375 22.1792495,3.18999024 C23.6539479,2.22344673 25.4613226,1.90612953 27.1770667,2.31253333 Z"
                                    id="Shape"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </i>{" "}
                </div>
                <div className="info">
                  <h4 className="name">Tour Type</h4>
                  <p className="value">{this.props.tour_type} </p>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-lg-3">
              <div className="item">
                <div className="icon">
                  <i className="input-icon field-icon fa">
                    <svg
                      height="32px"
                      width="32px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                      <title>ico_adults_blue</title>
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
                          id="Room_Detail_1"
                          transform="translate(-544.000000, -803.000000)"
                          stroke="#5191FA"
                        >
                          <g
                            id="room-detail"
                            transform="translate(0.000000, 211.000000)"
                          >
                            <g
                              id="Group-3"
                              transform="translate(135.000000, 562.000000)"
                            >
                              <g
                                id="Group"
                                transform="translate(409.000000, 30.000000)"
                              >
                                <g id="ico_adults">
                                  <g
                                    id="Group"
                                    transform="translate(1.000000, 1.000000)"
                                  >
                                    <g id="Regular">
                                      <circle id="Oval" cx={7} cy={4} r={4} />
                                      <path
                                        d="M14,17 C14,13.1340068 10.8659932,10 7,10 C3.13400675,10 4.4408921e-16,13.1340068 0,17 L0,20 L3,20 L4,30 L10,30 L11,20 L14,20 L14,17 Z"
                                        id="Shape"
                                      />
                                      <path
                                        d="M16,24 L18,24 L19,30 L25,30 L26,24 L30,24 L27,15 C26,12 24.7613333,10 22,10 C20.1015957,10.0018584 18.4126862,11.2059289 17.792,13"
                                        id="Shape"
                                      />
                                      <circle id="Oval" cx={22} cy={4} r={4} />
                                    </g>
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
                <div className="info">
                  <h4 className="name">Group Size</h4>
                  <p className="value">{this.props.group_size} peoples </p>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-lg-3">
              <div className="item">
                <div className="icon">
                  <i className="input-icon field-icon fa">
                    <svg
                      height="32px"
                      width="32px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                      <title>Group</title>
                      <desc>Created with Sketch.</desc>
                      <defs />
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g
                          id="Tour_Detail_1"
                          transform="translate(-735.000000, -1005.000000)"
                          stroke="#5191FA"
                        >
                          <g
                            id="tour-detail"
                            transform="translate(0.000000, 211.000000)"
                          >
                            <g
                              id="feauture"
                              transform="translate(135.000000, 765.000000)"
                            >
                              <g
                                id="Group"
                                transform="translate(601.000000, 25.000000)"
                              >
                                <g
                                  transform="translate(0.000000, 5.000000)"
                                  id="Regular"
                                >
                                  <g>
                                    <circle id="Oval" cx={9} cy="5.5" r="5.5" />
                                    <path
                                      d="M10,13.0773333 C9.66846827,13.0319989 9.33455994,13.0061766 9,13 C4.02943725,13 5.92118946e-16,17.0294373 0,22"
                                      id="Shape"
                                    />
                                    <path
                                      d="M28,26 L24,26 L18,30 L18,26 L16,26 C14.8954305,26 14,25.1045695 14,24 L14,16 C14,14.8954305 14.8954305,14 16,14 L28,14 C29.1045695,14 30,14.8954305 30,16 L30,24 C30,25.1045695 29.1045695,26 28,26 Z"
                                      id="Shape"
                                    />
                                    <path d="M18,18 L26,18" id="Shape" />
                                    <path d="M18,22 L26,22" id="Shape" />
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
                <div className="info">
                  <h4 className="name">Languages</h4>
                  <p className="value">{this.props.language_tour} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Tour info*/}
      </>
    );
  }
}
