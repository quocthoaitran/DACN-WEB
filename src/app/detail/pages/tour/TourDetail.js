import React, { Component } from "react";

import Header from "../../../../common/header/Header";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import WidgetBottom from "./components/widget/widget-bottom/WidgetBottom";
import Similar from "./components/similar/Similar";
import Footer from "../../../../common/footer/Footer";
import DetailHeader from "./components/detail-header/DetailHeader";
import TourInfo from "./components/content/tour-info/TourInfo";
import Gallery from "./components/content/gallery/Gallery";
import Overview from "./components/content/overview/Overview";
import Itinerary from "./components/content/itinerary/Itinerary";
import WidgetRight from "./components/widget/widget-right/WidgetRight";
import ReviewsContainer from "./components/content/reviews/ReviewsContainer";
import SimilarContainer from "./components/similar/SimilarContainer";

export default class TourDetail extends Component {
  constructor(props) {
    super(props);
    const urlId = this.props.match.params.tourId;
    const arrTour = urlId.split("-");
    this.tourId = arrTour[arrTour.length - 1];

    this.state = {
      tourId: this.tourId
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const urlId = nextProps.match.params.tourId;
    const arrTour = urlId.split("-");
    const tourId = arrTour[arrTour.length - 1];
    if (prevState.tourId !== tourId) {
      nextProps.getTourDetailAPI(tourId);
      return {
        tourId
      };
    }

    return null;
  }

  componentDidMount() {
    this.props.getTourDetailAPI(this.state.tourId);
  }

  render() {
    const { tourDetail } = this.props;
    console.log(tourDetail);
    return (
      <div className="st_tours-template-default single single-st_tours postid-1616  st-header-2 woocommerce-no-js wide menu_style1 topbar_position_default  enable_nice_scroll search_enable_preload wpb-js-composer js-comp-ver-5.7 vc_responsive">
        <Header />
        <div id="st-content-wrapper" className="st-single-tour style-2">
          <Breadcrumb name={tourDetail && tourDetail.name} />
          <WidgetBottom 
            price = { tourDetail && tourDetail.price }
            available = { tourDetail && tourDetail.available }
            departure_day = { tourDetail && tourDetail.departure_day }
          />
          <div className="st-tour-content">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-9">
                  <DetailHeader
                    name={tourDetail && tourDetail.name}
                    city={tourDetail && tourDetail.city}
                    rate={tourDetail && tourDetail.rate}
                    num_review={tourDetail && tourDetail.num_review}
                  />
                  <TourInfo
                    duration = { tourDetail && tourDetail.duration }
                    tour_type = { tourDetail && tourDetail.tour_type }
                    group_size = { tourDetail && tourDetail.group_size }
                    language_tour = { tourDetail && tourDetail.language_tour }
                  />
                  <Gallery 
                    images = { tourDetail && tourDetail.images }
                  />
                  <Overview 
                    overview = { tourDetail && tourDetail.description }
                  />
                  <Itinerary 
                    itineraries = { tourDetail && tourDetail.itineraries }
                  />
                  <div className="st-hr large st-height2 st-hr-comment" />
                  <ReviewsContainer 
                    id = { this.state.tourId }
                    rate={tourDetail && tourDetail.rate}
                    num_review={tourDetail && tourDetail.num_review}
                  />
                </div>
                <WidgetRight 
                  available = { tourDetail && tourDetail.available }
                  departure_day = { tourDetail && tourDetail.departure_day }
                  price = { tourDetail && tourDetail.price }
                  owner = { tourDetail && tourDetail.owner }
                  tourId = {this.state.tourId}
                  userInfo = {this.props.userInfo}
                  name = { tourDetail && tourDetail.name }
                  image = { tourDetail && tourDetail.images[0] }
                />
              </div>
              <div className="st-hr large" />
              <SimilarContainer 
                id = {this.state.tourId}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
