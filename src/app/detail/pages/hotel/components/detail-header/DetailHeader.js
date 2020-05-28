import React, { Component } from "react";
import { Rate } from "antd";
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
    return (
      <div className="st-hotel-header">
        <div className="left">
          <Rate
            disabled
            value = {this.roundRate(this.props.rate)}
            defaultValue={0}
            style={{ fontSize: 15 }}
          />
          <h2 className="st-heading">{this.props.name}</h2>
          <div className="sub-heading">
            <i className="input-icon field-icon fa">
              <svg
                height="16px"
                width="16px"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                <title>Ico_maps</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g
                  id="Ico_maps"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    id="Group"
                    transform="translate(4.000000, 0.000000)"
                    stroke="#A0A9B2"
                  >
                    <g id="pin-1" transform="translate(-0.000000, 0.000000)">
                      <path
                        d="M15.75,8.25 C15.75,12.471 12.817,14.899 10.619,17.25 C9.303,18.658 8.25,23.25 8.25,23.25 C8.25,23.25 7.2,18.661 5.887,17.257 C3.687,14.907 0.75,12.475 0.75,8.25 C0.75,4.10786438 4.10786438,0.75 8.25,0.75 C12.3921356,0.75 15.75,4.10786438 15.75,8.25 Z"
                        id="Shape"
                      />
                      <circle id="Oval" cx="8.25" cy="8.25" r={3} />
                    </g>
                  </g>
                </g>
              </svg>
            </i>
            {this.props.address}
            <div
              className="modal fade modal-map"
              id="st-modal-show-map"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="input-icon field-icon fa">
                        <svg
                          height="24px"
                          width="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                          <title>Ico_close</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Ico_close"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <g id="Group" stroke="#1A2B48" strokeWidth="1.5">
                              <g id="close">
                                <path
                                  d="M0.75,23.249 L23.25,0.749"
                                  id="Shape"
                                />
                                <path
                                  d="M23.25,23.249 L0.75,0.749"
                                  id="Shape"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </i>
                    </button>
                    <h4 className="modal-title">{this.props.name}</h4>
                  </div>
                  <div className="modal-body">
                    <div className="st-map">
                      <div
                        className="google-map"
                        data-lat="37.22668164367746"
                        data-lng="-77.40168461878301"
                        data-icon="http://travelhotel.wpengine.com//images/2018/11/ico_mapker_hotel.png"
                        data-zoom={13}
                        data-disablecontrol="true"
                        data-showcustomcontrol="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="review-score">
            <div className="head clearfix">
              <div className="left">
                <span className="head-rating">Excellent</span>
                <span className="text-rating">
                  from {this.props.num_review} reviews
                </span>
              </div>
              <div className="score">
                {this.roundRate(this.props.rate || 0)}
                <span>/5</span>
              </div>
            </div>
            <div className="foot">100% of guests recommend </div>
          </div>
        </div>
      </div>
    );
  }
}
