import React, { Component } from "react";
import moment from 'moment';
import { DatePicker, Button, message } from 'antd';
import { withRouter } from 'react-router-dom';

class FormCheck extends Component {

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.props.userInfo);
    if (this.props.userInfo === null) {
      message.error(<span className="didauday-error-input">Please login to book a item</span>);
      return ;
    }
    if (this.props.userInfo.role == 2) {
      const data = {
            type: "tour",
            name: this.props.name,
            image: this.props.image,
            id: this.props.tourId,
            departure_day: this.props.departure_day,
            "price": this.props.price,
            "quantity": 1,
          }
      console.log(data);
      this.props.bookingTour(data);
      this.props.history.push("/checkout");
    } else {
      message.error(<span className="didauday-error-input">You must be member to can book a item</span>);
    }
  }
  render() {
    return (
      <>
        <div className="form-book-wrapper relative">
          <div className="loader-wrapper">
            <div className="st-loader" />
          </div>
          <div className="form-head">
            <div className="price">
              <span className="label">from </span>
              <span className="value">
                <span className="text-lg lh1em item "> ${this.props.price || 0}</span>{" "}
              </span>
            </div>
          </div>
          <form
            id="form-booking-inpage"
            method="post"
            action="#booking-request"
            onSubmit = {this.handleClick}
          >
            <input
              type="hidden"
              name="action"
              defaultValue="tours_add_to_cart"
            />
            <input type="hidden" name="item_id" defaultValue={1616} />
            <input type="hidden" name="type_tour" defaultValue="daily_tour" />
            <div
              className="form-group form-date-field form-date-search clearfix "
              data-format="DD/MM/YYYY"
            >
              <div className="date-wrapper clearfix">
                <div className="check-in-wrapper">
                  <label>Date</label>
                  <DatePicker
                    value = { this.props.departure_day ? new moment(this.props.departure_day) : new moment(new Date()) }
                    format = 'DD/MM/YYYY'
                    disabled
                    style = { { width: '100%' } }
                  />
                </div>
              </div>
            </div>
            <div className="form-group form-guest-search clearfix ">
              <div className="guest-wrapper clearfix">
                <div className="check-in-wrapper">
                  <label>Available</label>
                </div>
                <div className="select-wrapper">
                  <div className="st-number-wrapper">
                    <input
                      type="number"
                      name="people_number"
                      className="form-control st-input-number"
                      autoComplete="off"
                      readOnly
                      value = { this.props.available || 0 }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group form-guest-search clearfix ">
              <div className="guest-wrapper clearfix">
                <div className="check-in-wrapper">
                  <label>People</label>
                </div>
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
                      data-max={10}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="submit-group">
              {
                this.props.available && this.props.available > 0 ?
                (
                  <button
                    className="btn btn-green btn-large btn-full upper"
                    type="submit"
                    name="submit"
                    defaultValue="Book Now"
                  >
                    Book now
                  </button>
                ) : 
                (
                  <Button
                    style = {{ width: '100%' }} 
                    type="primary" 
                    disabled
                  >Not available</Button>
                )
              }
            </div>
            <div className="message-wrapper mt30" />
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(FormCheck);
