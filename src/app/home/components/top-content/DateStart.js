import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

class DateStart extends Component {

  state = {
    dateStart: null,
  }

  onStartChange = (value) => {
    const date = moment(value).format('DD/MM/YYYY');
    this.setState({
      dateStart: value,
    })
    this.props.postDateStartFlight(date);
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

  render() {
    return (
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
                className = 'didauday-home-date'
                value = {this.state.dateStart}
              />
            </div>
          </div>
        </div>
    );
  }
}

export default DateStart;