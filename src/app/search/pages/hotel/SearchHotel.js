import React, { Component } from "react";

import Header from "../../../../common/header/Header";
import TopBanner from './components/top-banner/TopBanner';
import SidebarFilter from "./components/filter/sidebar-filter/SidebarFilter";
import Content from "./components/content/Content";
import Footer from '../../../../common/footer/Footer';

import './css/didauday_search-hotel_custom.css';
import TopFilterContainer from "./containers/TopFilterContainer";
export default class SearchHotel extends Component {

  constructor(props) {
    super(props);
    const urlParams = new URLSearchParams(this.props.history.location.search);
    this.state = {
      addressHotel: urlParams.get('address'),
      lngHotel: urlParams.get('lng'),
      latHotel: urlParams.get('lat'),
      dateStartHotel: urlParams.get('dateStart'),
      dateEndHotel: urlParams.get('dateEnd'),
      maxPriceHotel: urlParams.get('maxPrice'),
      minPriceHotel: urlParams.get('minPrice'),
    }
  }

  componentDidMount() {
    this.props.getHotelsSearchAPI(this.state.addressHotel, this.state.lngHotel, this.state.latHotel, this.state.dateStartHotel, this.state.dateEndHotel, this.state.minPriceHotel, this.state.maxPriceHotel);
  }

  render() {
    return (
      <>
        <div
          className="page-template page-template-template-hotel-search page-template-template-hotel-search-php page page-id-7411 logged-in  st-header-2 woocommerce-no-js wide menu_style1 topbar_position_default  enable_nice_scroll search_enable_preload wpb-js-composer js-comp-ver-5.7 vc_responsive"
        >
          <Header />
          <div id="st-content-wrapper" className="search-result-page didauday-content">
            <TopBanner />
            <div className="container">
              <div className="st-hotel-result">
                <div className="row">
                  <SidebarFilter 
                    addressHotel = {this.state.addressHotel}
                    lngHotel = {this.state.lngHotel}
                    latHotel = {this.state.latHotel}
                    dateStartHotel = {this.state.dateStartHotel}
                    dateEndHotel = {this.state.dateEndHotel}
                    maxPriceHotel = {this.state.maxPriceHotel}
                    minPriceHotel = {this.state.minPriceHotel}
                    getHotelsSearchAPI = {this.props.getHotelsSearchAPI}
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
      </>
    );
  }
}
