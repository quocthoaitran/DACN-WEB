import React, { Component } from "react";
import { DatePicker, message } from 'antd';
import moment from 'moment';

export default class FormCheck extends Component {

  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  handleClick = (e) => {
    e.preventDefault();
    if ( this.state.startValue == null || this.state.endValue == null) {
      message.error(<span className="didauday-error-input">Please choose date checkin & checkout</span>);
      return;
    }
    console.log(this.state);
    const data = {
      checkin: moment(this.state.startValue).format("DD/MM/YYYY"),
      checkout: moment(this.state.endValue).format("DD/MM/YYYY")
    }
    this.props.checkAvailableRooms(this.props.id, data);
  }

  disabledStartDate = (startValue) => {
    const { endValue } = this.state;
    if (startValue && startValue < moment().endOf('day')) {
      return true;
    }

    if (endValue && moment(startValue).isAfter(endValue)) {
      return true;
    }

    return false;
  }

  disabledEndDate = (endValue) => {
    const { startValue } = this.state;
    if (endValue && endValue < moment().endOf('day')) {
      return true;
    }

    if (startValue && moment(endValue).isBefore(startValue)) {
      return true;
    }

    return false;
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }

  onStartChange = (value) => {
    this.onChange('startValue', value);
  }

  onEndChange = (value) => {
    this.onChange('endValue', value);
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
    const { startValue, endValue, endOpen } = this.state;
    return (
      <>
        <div className="form-book-wrapper relative">
          <div className="loader-wrapper">
            <div className="st-loader" />
          </div>
          <div className="form-head">
            from <span className="price">${this.props.price || 0}</span>{" "}
            <span className="unit"> /night</span>{" "}
          </div>
          <form className="form form-check-availability-hotel" onSubmit={this.handleClick}>
            <input type="hidden" name="room_parent" defaultValue={6556} />
            <div
              className="form-group form-date-field form-date-search clearfix "
              data-format="DD/MM/YYYY"
            >
              <div className="date-wrapper clearfix">
                <div className="check-in-wrapper">
                  <label>Date start</label>
                  <DatePicker
                    disabledDate={this.disabledStartDate}
                    format="DD/MM/YYYY"
                    placeholder="Start"
                    onChange={this.onStartChange}
                    onOpenChange={this.handleStartOpenChange}
                    className='didauday-home-date'
                  />
                  <label style={{ clear: "both" }}>Date end</label>
                  <DatePicker
                    disabledDate={this.disabledEndDate}
                    format="DD/MM/YYYY"
                    placeholder="End"
                    onChange={this.onEndChange}
                    open={endOpen}
                    onOpenChange={this.handleEndOpenChange}
                    className='didauday-home-date'
                  />
                </div>
              </div>

            </div>
            <div className="form-group form-extra-field dropdown clearfix field-guest ">
              <div className="dropdown" data-toggle="dropdown" id="dropdown-1">
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
              <ul className="dropdown-menu" aria-labelledby="dropdown-1">
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
            <div className="submit-group">
              <button
                className="btn btn-green btn-large btn-full upper"
                type="submit"
                name="submit"
              >
                Check Availability
              </button>
            </div>
            <div className="message-wrapper mt30" />
          </form>
        </div>
      </>
    );
  }
}
