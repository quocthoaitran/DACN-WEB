import React, { Component } from "react";
import { message } from 'antd';

export default class BookingSubmission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.userInfo.email,
      firstname: this.props.userInfo.firstname,
      lastname: this.props.userInfo.lastname,
      phone : '',
      errors: null,
      hasError: false,
    }
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value,
      hasError: false,
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      hasError: false,
    });
    if( !this.props.listBooking || this.props.listBooking.length == 0) {
      return message.error(<span className="didauday-error-input">Please choose a item to book </span>);
    }
    if (this.state.phone == "") {
      return message.error(<span className="didauday-error-input">Please input your phone number</span>);
    }
    if (this.state.email == "") {
      return message.error(<span className="didauday-error-input">Please input your email</span>);
    }
    if (this.state.firstname == "") {
      return message.error(<span className="didauday-error-input">Please input your firstname</span>);
    }
    if (this.state.lastname == "") {
      return message.error(<span className="didauday-error-input">Please input your lastname</span>);
    }
    let data = {
      booking_list: []
    }
    this.props.listBooking.map(item => {
      if( item.type === "tour"){
        let itemBook = {
          type: item.type,
          id: item.id,
          departure_day: item.departure_day,
          price: item.price,
          quantity: 1,
          customers: {
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phone_number : this.state.phone,
          }
        }
        data = {...data, booking_list: [...data.booking_list, itemBook]}
      }
      if( item.type === "room"){
        let itemBook = {
          type: item.type,
          id: item.id,
          checkin: item.checkin,
          checkout: item.checkout,
          price: item.price,
          quantity: 1,
          customers: {
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phone_number : this.state.phone,
          }
        }
        data = {...data, booking_list: [...data.booking_list, itemBook]}
      }
      if( item.type === "flight"){
        let itemBook = {
          type: item.type,
          id: item.id,
          price: item.price,
          quantity: 1,
          customers: {
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phone_number : this.state.phone,
          }
        }
        data = {...data, booking_list: [...data.booking_list, itemBook]}
      }
    });
    this.props.bookItems(data);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.errors !== prevState.errors){
      return { errors: nextProps.errors, hasError: true };
    }
    return null;
  }

  render() {
    return (
      <>
        {
          this.state.hasError && this.state.errors && message.error(<span className="didauday-error-input">{this.state.errors.room}</span>)
        }
        <div className="col-lg-8 col-md-8 col-lg-pull-4 col-md-pull-4">
          <h3 className="title">Booking Submission </h3>
          <div className="check-out-form">
            <div className="entry-content" />
            <form onSubmit={this.handleSubmit}>
              <div className="clearfix">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group form-group-icon-left">
                      <label htmlFor="field-st_first_name">
                        First Name <span className="require">*</span>{" "}
                      </label>
                      <i className="fa fa-user input-icon" />{" "}
                      <input
                        className="form-control required"
                        id="field-st_first_name"
                        defaultValue = {this.state.firstname}
                        name="firstname"
                        placeholder="First Name"
                        type="text"
                        onChange = {this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group form-group-icon-left">
                      <label htmlFor="field-st_last_name">
                        Last Name <span className="require">*</span>{" "}
                      </label>
                      <i className="fa fa-user input-icon" />{" "}
                      <input
                        className="form-control required"
                        id="field-st_last_name"
                        defaultValue = {this.state.lastname}
                        name="lastname"
                        placeholder="Last Name"
                        type="text"
                        onChange = {this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group form-group-icon-left">
                      <label htmlFor="field-st_email">
                        Email <span className="require">*</span>
                      </label>
                      <i className="fa fa-envelope input-icon" />{" "}
                      <input
                        className="form-control required"
                        id="field-st_email"
                        defaultValue ={this.state.email}
                        name="email"
                        placeholder="email@domain.com"
                        type="text"
                        onChange = {this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group form-group-icon-left">
                      <label htmlFor="field-st_phone">
                        Phone <span className="require">*</span>
                      </label>
                      <i className="fa fa-phone input-icon" />{" "}
                      <input
                        className="form-control required"
                        id="field-st_phone"
                        name="phone"
                        placeholder="Your Phone"
                        type="text"
                        onChange = {this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group form-group-icon-left">
                      <label htmlFor="field-st_address">Address Line 1 </label>
                      <i className="fa fa-map-marker input-icon" />{" "}
                      <input
                        className="form-control"
                        id="field-st_address"
                        
                        name="st_address"
                        placeholder="Your Address Line 1"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group form-group-icon-left">
                      <label htmlFor="field-st_address2">Address Line 2 </label>
                      <i className="fa fa-map-marker input-icon" />{" "}
                      <input
                        className="form-control"
                        id="field-st_address2"
                        
                        name="st_address2"
                        placeholder="Your Address Line 2"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-form">
                <h4 className="title">Select Payment Method</h4>
                <div
                  className="payment-item  payment-gateway payment-gateway-st_paypal"
                  id="payment-gateway payment-gateway-st_paypal"
                  data-gateway="st_paypal"
                >
                  <div className="dropdown">
                    <div className="st-icheck">
                      <div className="st-icheck-item">
                        <label>
                          <div className="check-payment">
                            <input
                              type="radio"
                              name="st_payment_gateway"
                              className="payment-item-radio"
                              checked
                            />
                            <span className="checkmark" />
                          </div>
                          <span className="payment-title">Paypal</span>
                          <img
                            src="https://mixmap.travelerwp.com/wp-content/themes/traveler2.5/img/gateway/pp-logo.png"
                            alt="Paypal"
                            className="st_paypal"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="dropdown-menu">
                      <div className="pm-info">
                        <img
                          className="pp-img"
                          src="https://mixmap.travelerwp.com/wp-content/themes/traveler2.5/img/paypal.png"
                          alt="Paypal"
                        />
                        <p>
                          Important: You will be redirected to PayPal's website
                          to securely complete your payment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cond-form">
                <div className="st-icheck accerpt-cond st_check_term_conditions">
                  <div className="st-icheck-item">
                    <label>
                      <span className="payment-title">
                        I have read and accept the
                        <a target="_blank"> terms and conditions</a> and{" "}
                        <a target="_blank">
                          Privacy Policy
                        </a>
                      </span>
                      <input
                        className="i-check"
                        name="term_condition"
                        type="checkbox"
                        checked
                      />
                      <span className="checkmark fcheckbox" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="clearfix">
                <div className="row">
                  <div className="col-sm-6" />
                </div>
              </div>
              <input
                type="hidden"
                name="st_cart"
                defaultValue="YToxOntpOjE2MTY7YTo0OntzOjY6Im51bWJlciI7aToxO3M6NToicHJpY2UiO2Q6MTUwO3M6NDoiZGF0YSI7YTozNDp7czoxMToiYWR1bHRfcHJpY2UiO3M6MzoiMTUwIjtzOjExOiJjaGlsZF9wcmljZSI7czozOiIxMDAiO3M6MTI6ImluZmFudF9wcmljZSI7czoyOiI1MCI7czoxMjoiYWR1bHRfbnVtYmVyIjtpOjE7czoxMjoiY2hpbGRfbnVtYmVyIjtpOjA7czoxMzoiaW5mYW50X251bWJlciI7aTowO3M6OToic3RhcnR0aW1lIjtzOjA6IiI7czo5OiJ0eXBlX3RvdXIiO3M6MTA6ImRhaWx5X3RvdXIiO3M6MTA6InByaWNlX3R5cGUiO3M6NjoicGVyc29uIjtzOjY6ImV4dHJhcyI7YTowOnt9czoxMToiZXh0cmFfcHJpY2UiO2k6MDtzOjExOiJndWVzdF90aXRsZSI7YjowO3M6MTA6Imd1ZXN0X25hbWUiO2I6MDtzOjEzOiJwYWNrYWdlX2hvdGVsIjthOjA6e31zOjE5OiJwYWNrYWdlX2hvdGVsX3ByaWNlIjtpOjA7czoxNjoicGFja2FnZV9hY3Rpdml0eSI7YTowOnt9czoyMjoicGFja2FnZV9hY3Rpdml0eV9wcmljZSI7aTowO3M6MTE6InBhY2thZ2VfY2FyIjthOjA6e31zOjE3OiJwYWNrYWdlX2Nhcl9wcmljZSI7aTowO3M6MTQ6InBhY2thZ2VfZmxpZ2h0IjthOjA6e31zOjIwOiJwYWNrYWdlX2ZsaWdodF9wcmljZSI7aTowO3M6ODoiY2hlY2tfaW4iO3M6MTA6IjA0LzI5LzIwMTkiO3M6OToiY2hlY2tfb3V0IjtzOjEwOiIwNC8yOS8yMDE5IjtzOjk6Im9yaV9wcmljZSI7ZDoxNTA7czoxMDoiY29tbWlzc2lvbiI7ZDoxMDtzOjEwOiJkYXRhX3ByaWNlIjthOjQ6e3M6MTE6ImFkdWx0X3ByaWNlIjtpOjE1MDtzOjExOiJjaGlsZF9wcmljZSI7aTowO3M6MTI6ImluZmFudF9wcmljZSI7ZDowO3M6MTE6InRvdGFsX3ByaWNlIjtkOjE1MDt9czoxMzoiZGlzY291bnRfcmF0ZSI7ZDowO3M6ODoiZHVyYXRpb24iO3M6NjoiNSBkYXlzIjtzOjIwOiJzdF9ib29raW5nX3Bvc3RfdHlwZSI7czo4OiJzdF90b3VycyI7czoxMzoic3RfYm9va2luZ19pZCI7czo0OiIxNjE2IjtzOjc6InNoYXJpbmciO3M6MDoiIjtzOjEzOiJkdXJhdGlvbl91bml0IjtzOjA6IiI7czoxMzoiZGVwb3NpdF9tb25leSI7YToyOntzOjQ6InR5cGUiO3M6MDoiIjtzOjY6ImFtb3VudCI7czowOiIiO31zOjc6InVzZXJfaWQiO2k6MDt9czo1OiJ0aXRsZSI7czozMToiTm9ydGhlcm4gQ2FsaWZvcm5pYSBTdW1tZXIgMjAxOSI7fX0="
              />
              <div className="alert form_alert hidden" />
              <button
                type = 'submit'
                className="btn btn-primary btn-checkout btn-st-checkout-submit btn-st-big "
              >
                Submit
                <i className="fa fa-spinner fa-spin" />
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
