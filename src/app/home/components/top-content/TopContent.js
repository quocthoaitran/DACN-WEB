import React, { Component } from "react";
import AutoCompleteAirportContainer from "../../containers/AutoCompleteAirportContainer";
import ButtonSearchContainer from '../../containers/ButtonSearchContainer';
import DateStartContainer from "../../containers/DateStartContainer";
import PlaceAutoCompleteContainer from "../../containers/PlaceAutoCompleteContainer";
import DateStartDateEndContainer from "../../containers/DateStartDateEndContainer";
import RangePriceContainer from "../../containers/RangePriceContainer";

export default class TopContent extends Component {
  render() {
    return(
      <div 
        data-vc-full-width="true" data-vc-full-width-init="false" data-vc-stretch-content="true"
        className="vc_row wpb_row st bg-holder vc_custom_1550548481854 vc_row-has-fill vc_row-no-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="wpb_column column_container col-md-12 vc_custom_1550221571756">
              <div className="vc_column-inner wpb_wrapper">
                <div className="search-form-wrapper slider mix">
                  <div className="search-form-text">
                    <div className="container">
                      <h1 className="st-heading text-left">Hi There!</h1>
                      <div className="sub-heading text-left">
                        Where would you like to go?
                      </div>
                      <ul className="nav nav-tabs" role="tablist">
                        <li role="st_hotel" className="active">
                          <a
                            href="#st_hotel"
                            aria-controls="st_hotel"
                            role="tab"
                            data-toggle="tab"
                          >
                            Hotel
                          </a>
                        </li>
                        <li role="st_tours" >
                          <a
                            href="#st_tours"
                            aria-controls="st_tours"
                            role="tab"
                            data-toggle="tab"
                          >
                            Tour
                          </a>
                        </li>
                        <li role="st_activity" >
                          <a
                            href="#st_activity"
                            aria-controls="st_activity"
                            role="tab"
                            data-toggle="tab"
                          >
                            Flight
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          role="tabpanel"
                          className="tab-pane active"
                          id="st_hotel"
                        >
                          <div className="search-form hotel-search-form-home hotel-search-form in_tab">
                            <form
                              action="search-hotel-full-map/"
                              className="form"
                              method="get"
                            >
                              <div className="row">
                                <div className="col-md-3 border-right">
                                  <PlaceAutoCompleteContainer typeSearch="hotel"/>
                                </div>
                                <div className="col-md-3 border-right">
                                    <DateStartDateEndContainer typeSearch="hotel"/>
                              </div>
                                <div className="col-md-3 border-right">
                                  <div className="form-group form-extra-field dropdown clearfix field-guest  has-icon ">
                                    <i className="input-icon field-icon fa">
                                      <svg
                                        height="24px"
                                        width="24px"
                                        viewBox="0 0 24 18"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                      >
                                        {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                                        <title>ico_guest_search_box</title>
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
                                            transform="translate(-735.000000, -331.000000)"
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
                                                  id="guest"
                                                  transform="translate(570.000000, 26.000000)"
                                                >
                                                  <g
                                                    id="ico_guest_search_box"
                                                    transform="translate(0.000000, 15.000000)"
                                                  >
                                                    <g id="Light">
                                                      <path
                                                        d="M0.5,17.5000001 C0.500000058,13.6340068 3.63400679,10.5000001 7.5,10.5000001 C11.3659932,10.5000001 14.4999999,13.6340068 14.5,17.5000001 L0.5,17.5000001 Z"
                                                        id="Shape"
                                                      />
                                                      <path
                                                        d="M13.994,3.558 C15.1539911,4.33669999 16.5198779,4.75172347 17.917,4.75 C18.8777931,4.7508055 19.8286029,4.55513062 20.711,4.175"
                                                        id="Shape"
                                                      />
                                                      <path
                                                        d="M13.26,2 C14.7525087,0.243845556 17.3729329,-0.0022836544 19.1663535,1.44523253 C20.9597741,2.89274871 21.2722437,5.50609244 19.8706501,7.3356268 C18.4690565,9.16516115 15.8644725,9.54377036 14,8.189 C13.8228021,8.05875218 13.655663,7.9153468 13.5,7.76"
                                                        id="Shape"
                                                      />
                                                      <path
                                                        d="M14.5,10.79 C16.6186472,10.1605491 18.9100973,10.5678907 20.6820104,11.8889503 C22.4539234,13.21001 23.4984514,15.2898253 23.5,17.5 L17,17.5"
                                                        id="Shape"
                                                      />
                                                      <path
                                                        d="M3.838,2.592 C5.87773146,4.7056567 9.0128387,5.33602311 11.711,4.175"
                                                        id="Shape"
                                                      />
                                                      <circle
                                                        id="Oval"
                                                        cx="7.5"
                                                        cy="4.75"
                                                        r="4.25"
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
                                    <div
                                      className="dropdown"
                                      data-toggle="dropdown"
                                      id="dropdown-1"
                                    >
                                      <label>Guests</label>
                                      <div className="render">
                                        <span
                                          className="adult"
                                          data-text="Adult"
                                          data-text-multi="Adults"
                                        >
                                          1 Adult
                                        </span>
                                        -
                                        <span
                                          className="children"
                                          data-text="Child"
                                          data-text-multi="Children"
                                        >
                                          0 Children
                                        </span>
                                      </div>
                                    </div>
                                    <ul
                                      className="dropdown-menu"
                                      aria-labelledby="dropdown-1"
                                    >
                                      <li className="item">
                                        <label>Rooms</label>
                                        <div className="select-wrapper">
                                          <div className="st-number-wrapper">
                                            <input
                                              type="text"
                                              name="room_num_search"
                                              defaultValue={1}
                                              className="form-control st-input-number"
                                              autoComplete="off"
                                              readOnly
                                              data-min={1}
                                              data-max={20}
                                            />
                                          </div>
                                        </div>
                                      </li>
                                      <li className="item">
                                        <label>Adults</label>
                                        <div className="select-wrapper">
                                          <div className="st-number-wrapper">
                                            <input
                                              type="text"
                                              name="adult_number"
                                              defaultValue={1}
                                              className="form-control st-input-number"
                                              autoComplete="off"
                                              readOnly
                                              data-min={1}
                                              data-max={20}
                                            />
                                          </div>
                                        </div>
                                      </li>
                                      <li className="item">
                                        <label>Children</label>
                                        <div className="select-wrapper">
                                          <div className="st-number-wrapper">
                                            <input
                                              type="text"
                                              name="child_number"
                                              defaultValue={0}
                                              className="form-control st-input-number"
                                              autoComplete="off"
                                              readOnly
                                              data-min={0}
                                              data-max={20}
                                            />
                                          </div>
                                        </div>
                                      </li>
                                      <span className="hidden-lg hidden-md hidden-sm btn-close-guest-form">
                                        Close
                                      </span>
                                    </ul>
                                    <i className="fa fa-angle-down arrow" />
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <RangePriceContainer typeSearch="hotel" />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div
                          role="tabpanel"
                          className="tab-pane "
                          id="st_tours"
                        >
                          <div className="row">
                            <div className="col-lg-12 tour-search-form-home">
                              <div className="search-form">
                                <form
                                  action="sidebar-search-layout-tour/"
                                  className="form"
                                  method="get"
                                >
                                  <div className="row">
                                    <div className="col-md-4 border-right">
                                      <PlaceAutoCompleteContainer typeSearch="tour"></PlaceAutoCompleteContainer>
                                    </div>
                                    <div className="col-md-5 border-right">
                                      <DateStartDateEndContainer typeSearch="tour"></DateStartDateEndContainer>
                                    </div>
                                    <div className="col-md-3">
                                      <RangePriceContainer typeSearch="tour"/>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          role="tabpanel"
                          className="tab-pane "
                          id="st_activity"
                        >
                          <div className="row">
                            <div className="col-lg-12 tour-search-form-home">
                              <div className="search-form">
                                <form
                                  action="sidebar-search-layout-activity/"
                                  className="form"
                                  method="get"
                                >
                                  <div className="row">
                                    <div className="col-md-3 border-right">
                                      <AutoCompleteAirportContainer type="start"/>
                                                </div>
                                    <div className="col-md-3 border-right">
                                      <AutoCompleteAirportContainer type="end"/>
                                    </div>
                                    <div className="col-md-4 border-right">
                                      <DateStartContainer />
                                    </div>
                                    <div className="col-md-2 text-center">
                                      <ButtonSearchContainer />
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
