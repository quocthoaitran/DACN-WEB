import React, { Component } from "react";
import { Alert } from 'antd';

import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";



export default class ConfirmEmailFailed extends Component {
  render() {
    return (
      <div
        className="error404  wide menu_style1 topbar_position_default  enable_nice_scroll search_enable_preload wpb-js-composer js-comp-ver-5.6 vc_responsive"  
      >
        <Header />
        <div className="st-404-page dis">
          <div className="container">
            <div className = 'row'>
              <Alert
                message="Confirm email failed"
                description="Error! An error occurred. Please try again later."
                type="error"
                showIcon
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
