import React, { Component } from "react";

import Header from '../../../../common/header/Header';
import Footer from '../../../../common/footer/Footer';
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import DetailHeader from "./components/detail-header/DetailHeader";
import WidgetBottom from "./components/widget/widget-bottom/WidgetBottom";
import Content from "./components/content/Content";
import NearByContainer from "./components/near-by/NearByContainer";

import './css/didauday-nearby-hidden.css';
export default class HotelDetail extends Component {

  constructor(props) {
    super(props);
    const urlId = this.props.match.params.hotelId;
    const arrHotel = urlId.split('-');
    this.hotelId = arrHotel[arrHotel.length - 1];

    this.state = {
      hotelId: this.hotelId,
      availableRoom: null,
    }

  }

  static getDerivedStateFromProps(nextProps, prevState){
    const urlId = nextProps.match.params.hotelId;
    const arrHotel = urlId.split('-');
    const hotelId = arrHotel[arrHotel.length - 1];
    if (prevState.hotelId !== hotelId){
      nextProps.getHotelDetailAPI(hotelId);
      return {
        hotelId,
      }
   }

   return null;
 } 

  componentDidMount() {
    this.props.getHotelDetailAPI(this.state.hotelId);
  }

  minPrice = (rooms) => {
    return rooms.reduce((result, item) => result > item.price ? item.price : result, 1000);
  }

  render() {
    const { hotelDetail } = this.props;
    return (
      <div
        className="st_hotel-template-default single single-st_hotel postid-6556  st-header-2 woocommerce-no-js wide menu_style1 topbar_position_default  enable_nice_scroll search_enable_preload wpb-js-composer js-comp-ver-5.7 vc_responsive"
      >
        <Header />
        <div id="st-content-wrapper" className = "didauday-content">
          <Breadcrumb name = { hotelDetail && hotelDetail.name }/>
          <div className="container">
            <WidgetBottom
              price = { hotelDetail && hotelDetail.rooms && this.minPrice(hotelDetail.rooms)}
            />
            <DetailHeader
              name = { hotelDetail && hotelDetail.name }
              address = { hotelDetail && hotelDetail.address }
              rate = { hotelDetail && hotelDetail.rate }
              num_review = { hotelDetail && hotelDetail.num_review }
              />
            <div className="row">
              <Content 
                images = { hotelDetail && hotelDetail.images }
                description = { hotelDetail && hotelDetail.description }
                facilities = { hotelDetail && hotelDetail.facilities }
                rules = {hotelDetail && hotelDetail.rules }
                rooms = { this.props.availableRooms? this.props.availableRooms :  hotelDetail && hotelDetail.rooms }
                price = { hotelDetail && hotelDetail.rooms && this.minPrice(hotelDetail.rooms)}
                owner = { hotelDetail && hotelDetail.owner }
                rate = { hotelDetail && hotelDetail.rate }
                num_review = { hotelDetail && hotelDetail.num_review }
                id = {this.state.hotelId}
              />
            </div>
            <div className="st-hr x-large" />
            <NearByContainer
              id = {this.state.hotelId}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
