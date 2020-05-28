import React, { Component } from "react";

import Header from "../../../../common/header/Header";
import TopBanner from './components/top-banner/TopBanner';
import Content from "./components/content/Content";
import Footer from '../../../../common/footer/Footer';
import SidebarFilterContainer from "./containers/SidebarFilterContainer";
import TopFilterContainer from "./containers/TopFilterContainer";

// import './css/didauday_search-hotel_custom.css';
export default class SearchFlight extends Component {

  constructor(props) {
    super(props);
    const urlParams = new URLSearchParams(props.history.location.search);
    this.state = {
      airportStart: urlParams.get('airportStart'),
      airportEnd: urlParams.get('airportEnd'),
      dateStart: urlParams.get('dateStart'),
      currentPage: urlParams.get('page') || 1,
    }
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(this.props.history.location.search);
    this.props.getFlightsSearchAPI(this.state.airportStart, this.state.airportEnd, this.state.dateStart, +urlParams.get('page') || 1);
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
                  <SidebarFilterContainer 
                    airportStart = {this.state.airportStart}
                    airportEnd = {this.state.airportEnd}
                    dateStart = {this.state.dateStart}
                    getFlightsSearchAPI = {this.props.getFlightsSearchAPI}
                  />
                  <div className="col-lg-9 col-md-9">
                    <TopFilterContainer />
                    <Content
                      currentPage = {this.state.currentPage}
                    />
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
