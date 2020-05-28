import React, { Component } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { Input } from 'antd';
import moment from 'moment';
import { DatePicker, Slider } from 'antd';

import { withRouter } from 'react-router-dom';

class SidebarFilter extends Component {

  constructor(props) {
    super(props);
    const date_start = props.dateStartTour.split('/');
    const m_date_start = moment(`${date_start[0]} / ${date_start[1]} / ${date_start[2]}`, 'DD/MM/YYYY');
    const date_end = props.dateEndTour.split('/');
    const m_date_end = moment(`${date_end[0]} / ${date_end[1]} / ${date_end[2]}`, 'DD/MM/YYYY');

    this.state = {
      address: props.addressTour,
      isShowAutoComplete: false,
      startValue: m_date_start || new moment(new Date()),
      endValue: m_date_end || new moment(new Date()),
      endOpen: false,
      minPrice: +props.minPriceTour || 0,
      maxPrice: +props.maxPriceTour || 500,
      lngTour: props.lngTour,
      latTour: props.latTour,

    };
  }

  handleChange = address => {
    console.log('a');
    this.setState({ address }, () => {
      if (this.state.address.length > 0) {
        this.setState({
          isShowAutoComplete: true,
        })
      } else {
        this.setState({
          isShowAutoComplete: false,
        })
      }
    });
  };

  handleSelect = address => {
    this.setState({
      isShowAutoComplete: false,
    })
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({ address, lngTour: latLng.lng, latTour: latLng.lat });
      })
      .catch(error => console.error('Error', error));
  };

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (startValue && startValue < moment().endOf('day')) {
      return true;
    }
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (endValue && endValue < moment().endOf('day')) {
      return true;
    }
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }

  onStartChange = (value) => {
    this.onChange('startValue', value || new moment(new Date()));
  }

  onEndChange = (value) => {
    this.onChange('endValue', value || new moment(new Date()));
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  }

  disabledDate(current) {
    return current && current < moment().endOf('day');
  }

  onChangePrice = (value) => {
    this.setState({
      minPrice: +value[0] || 0,
      maxPrice: +value[1] || 500,
    });
  }

  marks = {
    10: {
      style: {
        color: '#f50',
      },
      label: <strong>$10</strong>,
    },
    1000: {
      style: {
        color: '#f50',
      },
      label: <strong>$1000</strong>,
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      address,
      lngTour,
      latTour,
      startValue,
      endValue,
      minPrice,
      maxPrice,
    } = this.state;

    this.props.getToursSearchAPI(address, lngTour, latTour, moment(startValue).format('DD/MM/YYYY'), moment(endValue).format('DD/MM/YYYY'), minPrice, maxPrice);
    this.props.history.push(`/search/tour?address=${address}&&lng=${lngTour}&&lat=${latTour}&&dateStart=${moment(startValue).format('DD/MM/YYYY')}&&dateEnd=${moment(endValue).format('DD/MM/YYYY')}&&maxPrice=${maxPrice}&&minPrice=${minPrice}`)
  }

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <div className="col-lg-3 col-md-3 sidebar-filter">
        <div className="sidebar-item sidebar-search-form hidden-xs hidden-sm">
          <div className="search-form-wrapper sidebar-inner">
            <div className="search-form">
              <div className="search-title">
                Search Tours{" "}
                <span className="hidden-lg hidden-md hidden-sm close-filter">
                  <i className="fa fa-times" aria-hidden="true" />
                </span>
              </div>
              {/*Address*/}
              <div className="row">
                <form
                  className="form"
                  onSubmit = { this.handleSubmit }
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
                        data-toggle="dropdown"
                        id="dropdown-destination"
                      >
                        <label>Destination</label>
                        <PlacesAutocomplete
                          value= {this.state.address}
                          onChange={this.handleChange}
                          onSelect={this.handleSelect}
                        >
                          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div>
                              <Input
                                {...getInputProps({
                                  placeholder: 'Search Places ...',
                                  className: 'location-search-input',
                                })}
                              />
                              {this.state.isShowAutoComplete &&
                                <div className="autocomplete-dropdown-container didauday-autocomplete">
                                  {loading && <div>Loading...</div>}
                                  {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                      ? 'suggestion-item--active'
                                      : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                      <div
                                        {...getSuggestionItemProps(suggestion, {
                                          className,
                                          style,
                                        })}
                                      >
                                        <span>{suggestion.description}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              }
                            </div>
                          )}
                        </PlacesAutocomplete>
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
                            disabledDate={this.disabledStartDate}
                            format="DD/MM/YYYY"
                            value={startValue}
                            placeholder="Start"
                            onChange={this.onStartChange}
                            onOpenChange={this.handleStartOpenChange}
                            className='didauday-home-date'
                          />
                          <label style={{ clear: "both" }}>Date end</label>
                          <DatePicker
                            disabledDate={this.disabledEndDate}
                            format="DD/MM/YYYY"
                            value={endValue}
                            placeholder="End"
                            onChange={this.onEndChange}
                            open={endOpen}
                            onOpenChange={this.handleEndOpenChange}
                            className='didauday-home-date'
                          />
                        </div>
                      </div>
                      <input
                        type="hidden"
                        className="check-in-input"
                        defaultValue="30/04/2019"
                        name="start"
                      />
                      <input
                        type="hidden"
                        className="check-out-input"
                        defaultValue="01/05/2019"
                        name="end"
                      />
                      <input
                        type="text"
                        className="check-in-out"
                        defaultValue="30/04/2019 12:32 am-01/05/2019 12:32 am"
                        name="date"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-button">
                      <button
                        className="btn btn-primary btn-search"
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <h3 className="sidebar-title">
          FILTER BY{" "}
          <span className="hidden-lg hidden-md close-filter">
            <i className="input-icon field-icon fa">
              <svg
                height="20px"
                width="20px"
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
                      <path d="M0.75,23.249 L23.25,0.749" id="Shape" />
                      <path d="M23.25,23.249 L0.75,0.749" id="Shape" />
                    </g>
                  </g>
                </g>
              </svg>
            </i>
          </span>
        </h3>
        <div className="sidebar-item range-slider">
          <div className="item-title">
            <h4>Filter Price</h4>
            <i className="fa fa-angle-up" aria-hidden="true" />
          </div>
          <div className="item-content">
            <Slider
              marks={this.marks}
              range
              min={10}
              max={1000}
              step={10}
              value={[+this.state.minPrice, +this.state.maxPrice]}
              defaultValue={[+this.state.minPrice, +this.state.maxPrice]}
              onChange = { this.onChangePrice }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SidebarFilter);
