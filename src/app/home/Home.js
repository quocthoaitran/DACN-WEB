import React, { Component } from "react";
import Header from "../../common/header/Header";
import TopContent from "./components/top-content/TopContent";
import Top from "./components/top/Top";
import Footer from '../../common/footer/Footer';
import TopDestinationsContainer from "./containers/TopDestinationsContainer";

import './css/didauday-home-custom.css';

export default class Home extends Component {
  render() {
    return (
      <>
        <div
          className="home page-template page-template-template-home-modern page-template-template-home-modern-php page page-id-7414  st-header-2 woocommerce-no-js wide menu_style1 topbar_position_default  enable_nice_scroll search_enable_preload wpb-js-composer js-comp-ver-5.7 vc_responsive"
        >
          <Header />
          <div id="st-content-wrapper" className="search-result-page didauday-content">
            <div className = "didauday_banner-top">
              <img 
                src = '/images/img_banner.jpg'
                className = "didauday_banner-top__img"
                alt = "DiDauDay banner"
              />
            </div>
            <div className="container">
              <TopContent />
              <div className="vc_row-full-width vc_clearfix" />
              <TopDestinationsContainer />
              <div className="vc_row-full-width vc_clearfix" />
              <Top />
              <div className="vc_row-full-width vc_clearfix" />
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
