import React, { Component } from "react";

import Header from '../../../../common/header/Header';
import Footer from '../../../../common/footer/Footer';

import './css/didauday_search-tour_custom.css';
import TopBanner from "./components/top-banner/TopBanner";
import SidebarFilter from "./components/filter/sidebar-filter/SidebarFilter";
import Content from "./components/content/Content";
import TopFilterContainer from "./containers/TopFilterContainer";

export default class SearchTour extends Component {
  constructor(props) {
    super(props);
    const urlParams = new URLSearchParams(this.props.history.location.search);
    this.state = {
      addressTour: urlParams.get('address'),
      lngTour: urlParams.get('lng'),
      latTour: urlParams.get('lat'),
      dateStartTour: urlParams.get('dateStart'),
      dateEndTour: urlParams.get('dateEnd'),
      maxPriceTour: urlParams.get('maxPrice'),
      minPriceTour: urlParams.get('minPrice'),
    }
  }

  componentDidMount() {
    this.props.getToursSearchAPI(this.state.addressTour, this.state.lngTour, this.state.latTour, this.state.dateStartTour, this.state.dateEndTour, this.state.minPriceTour, this.state.maxPriceTour);
  }

  render() {
    return (
      <div
        className="page-template page-template-template-tour-search page-template-template-tour-search-php page page-id-9100  st-header-2 woocommerce-no-js wide menu_style1 topbar_position_default  enable_nice_scroll search_enable_preload wpb-js-composer js-comp-ver-5.7 vc_responsive"
      >
        <Header />
        <div id="st-content-wrapper" className="search-result-page st-tours didauday-content">
          <TopBanner />
          <div className="container">
            <div className="st-hotel-result">
              <div className="row">
                <SidebarFilter
                  addressTour={this.state.addressTour}
                  lngTour={this.state.lngTour}
                  latTour={this.state.latTour}
                  dateStartTour={this.state.dateStartTour}
                  dateEndTour={this.state.dateEndTour}
                  maxPriceTour={this.state.maxPriceTour}
                  minPriceTour={this.state.minPriceTour}
                  getToursSearchAPI={this.props.getToursSearchAPI}
                />
                <div className="col-lg-9 col-md-9">
                  <TopFilterContainer />
                  <Content />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
