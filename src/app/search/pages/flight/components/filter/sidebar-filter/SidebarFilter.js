import React, { Component } from "react";
import moment from 'moment';
import { DatePicker, AutoComplete } from 'antd';

import { withRouter } from 'react-router-dom';

class RightFilter extends Component {

  constructor(props) {
    super(props);
    let { airportStart, airportEnd } = this.props;
    
    airportStart = this.props.airports.find(airport => airport.acronym === airportStart);
    airportEnd = this.props.airports.find(airport => airport.acronym === airportEnd);

    this.state = {
      airportStart: `${airportStart.name} ( ${airportStart.acronym} )`,
      airportEnd: `${airportEnd.name} ( ${airportEnd.acronym} )`,
      dateStart: this.props.dateStart,
    }
  }

  onChangeValue = (value, typeSelected) => {
    this.setState({
      [typeSelected]: value,
    })
  }

  onStartChange = (value) => {
    const date = moment(value).format('DD/MM/YYYY');
    this.setState({
      dateStart: date,
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    let data = this.state.airportStart.split(" ");
    const acronymStart = data[data.length - 2];
    data = this.state.airportEnd.split(" ");
    const acronymEnd = data[data.length - 2];
    this.props.getFlightsSearchAPI(acronymStart,acronymEnd, this.state.dateStart);
    this.props.history.push(`/search/flight?airportStart=${acronymStart}&&airportEnd=${acronymEnd}&&dateStart=${this.state.dateStart}`);
  }

  render() {
    const airports_start = this.props.airports.filter(airport => `${airport.name} ( ${airport.acronym} )` !== this.state.airportEnd).map(airport => `${airport.name} ( ${airport.acronym} )`);
    const airports_end = this.props.airports.filter(airport => `${airport.name} ( ${airport.acronym} )` !== this.state.airportStart).map(airport => `${airport.name} ( ${airport.acronym} )`);
    console.log(this.state);
    return (
      <div className="col-lg-3 col-md-3 sidebar-filter">
        <div className="sidebar-item sidebar-search-form hidden-xs hidden-sm">
          <div className="search-form-wrapper sidebar-inner">
            <div className="search-form">
              <div className="search-title">
                Search Flights{" "}
                <span className="hidden-lg hidden-md hidden-sm close-filter">
                  <i className="fa fa-times" aria-hidden="true" />
                </span>
              </div>
              {/*Address*/}
              <div className="row">
                <form
                  className="form"
                // onSubmit = { this.handleSubmit }
                >
                  <div className="col-md-12">
                    <div className="form-group form-extra-field dropdown clearfix field-detination has-icon">
                      <i className="input-icon field-icon fa">
                        <svg
                          height="24px"
                          width="24px"
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
                      <div
                        className="dropdown"
                        id="dropdown-destination"
                      >
                        <label>Place Start</label>
                        <br></br>
                        <AutoComplete
                          name="placeStart"
                          onChange={(value) => this.onChangeValue(value, "airportStart")}
                          defaultValue={this.state.airportStart}
                          dataSource={airports_start}
                          placeholder={'Airport name'}
                          filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group form-extra-field dropdown clearfix field-detination has-icon">
                      <i className="input-icon field-icon fa">
                        <svg
                          height="24px"
                          width="24px"
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
                      <div
                        className="dropdown"
                        id="dropdown-destination"
                      >
                        <label>Place End</label>
                        <br></br>
                        <AutoComplete
                          name="placeEnd"
                          onChange={(value) => this.onChangeValue(value, "airportEnd")}
                          defaultValue={this.state.airportEnd}
                          dataSource={airports_end}
                          placeholder={'Airport name'}
                          filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div
                      className="form-group form-date-field form-date-search clearfix  has-icon "
                      data-format="DD/MM/YYYY"
                    >
                      <i className="input-icon field-icon fa">
                        <svg
                          height="24px"
                          width="24px"
                          viewBox="0 0 24 25"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                          <title>ico_calendar_search_box</title>
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
                              transform="translate(-436.000000, -328.000000)"
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
                                    id="check-in"
                                    transform="translate(270.000000, 26.000000)"
                                  >
                                    <g
                                      id="ico_calendar_search_box"
                                      transform="translate(1.000000, 12.000000)"
                                    >
                                      <g id="calendar-add-1">
                                        <path
                                          d="M9.5,18.5 L1.5,18.5 C0.94771525,18.5 0.5,18.0522847 0.5,17.5 L0.5,3.5 C0.5,2.94771525 0.94771525,2.5 1.5,2.5 L19.5,2.5 C20.0522847,2.5 20.5,2.94771525 20.5,3.5 L20.5,10"
                                          id="Shape"
                                        />
                                        <path
                                          d="M5.5,0.501 L5.5,5.501"
                                          id="Shape"
                                        />
                                        <path
                                          d="M15.5,0.501 L15.5,5.501"
                                          id="Shape"
                                        />
                                        <path
                                          d="M0.5,7.501 L20.5,7.501"
                                          id="Shape"
                                        />
                                        <circle
                                          id="Oval"
                                          cx="17.5"
                                          cy="17.501"
                                          r={6}
                                        />
                                        <path
                                          d="M17.5,14.501 L17.5,20.501"
                                          id="Shape"
                                        />
                                        <path
                                          d="M20.5,17.501 L14.5,17.501"
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
                      </i>
                      <div className="date-wrapper clearfix">
                        <div className="check-in-wrapper">
                          <label>Date start</label>
                          <DatePicker
                            disabledDate={this.disabledDate}
                            format="DD/MM/YYYY"
                            placeholder="Start"
                            onChange={this.onStartChange}
                            className='didauday-home-date'
                            defaultValue={moment(this.state.dateStart, "DD/MM/YYYY")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button
                      className="btn btn-primary btn-search didayday-home-seach-button"
                      type="submit"
                      onClick={this.handleClick}
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RightFilter);