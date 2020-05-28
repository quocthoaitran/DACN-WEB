import React, { Component } from "react";
import { Button, DatePicker } from "antd";
import moment from 'moment';

export default class WidgetBottom extends Component {
  render() {
    return (
      <div className="hotel-target-book-mobile">
        <div className="price-wrapper">
          from{" "}
          <span className="price">
            <span className="text-lg lh1em item "> ${this.props.price}</span>
          </span>{" "}
        </div>
        <DatePicker
          value={
            this.props.departure_day
              ? new moment(this.props.departure_day)
              : new moment(new Date())
          }
          format="DD/MM/YYYY"
          disabled
        />
        {this.props.available && this.props.available > 0 ? (
          <button className="btn btn-mpopup btn-green">Book Now</button>
        ) : (
          <Button type="primary" disabled>
            Not available
          </Button>
        )}
      </div>
    );
  }
}
