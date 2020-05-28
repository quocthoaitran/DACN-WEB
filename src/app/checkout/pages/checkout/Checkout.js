import React, { Component } from "react";

import Header from "../../../../common/header/Header";
import Footer from "../../../../common/footer/Footer";
import BookingSubmission from "./components/booking-submission/BookingSubmission";
import BookingItemContainer from "./containers/BookingItemContainer";
import BookingItem from "./components/booking-item/BookingItem";
import BookingSubmissionContainer from "./containers/BookingSubmissionContainer";
import { withRouter } from 'react-router-dom'

class Checkout extends Component {
  showContent = (userInfo) => {
    if (userInfo == null) {
      this.props.history.push("/login")
    } else {
      return (
        <div className="page-template page-template-template-checkout page-template-template-checkout-php page page-id-8093  st-header-2 woocommerce-no-js wide menu_style1 topbar_position_default  enable_nice_scroll search_enable_preload wpb-js-composer js-comp-ver-5.7 vc_responsive">
          <Header />
          <div id="st-content-wrapper didauday-content">
            <div className="container">
              <div className="st-checkout-page">
                <div className="row">
                  <BookingItem listBooking={this.props.listBooking} />
                  <BookingSubmissionContainer listBooking={this.props.listBooking} userInfo={this.props.userInfo} />
                </div>
              </div>
            </div>
          </div>
          <span className="hidden st_template_checkout" />
          <Footer />
        </div>
      )
    }
  }
  render() {
    return (
      <>
        {
          this.showContent(this.props.userInfo)
        }
      </>
    );
  }
}

export default withRouter(Checkout);
