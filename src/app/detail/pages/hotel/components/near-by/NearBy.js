import React, { Component } from "react";
import { Empty } from 'antd';

import HotelNearByItem from "./HotelNearByItem";

export default class NearBy extends Component {

  state = {
    hotelId: this.props.id
  }

  componentDidMount() {
    this.props.getHotelsNearByAPI(this.state.hotelId);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.id !== prevState.hotelId){
      nextProps.getHotelsNearByAPI(nextProps.id);
      return {
        hotelId: nextProps.id,
      }
   }

   return null;
 } 

  showHotelsNearBy = (hotels) => {
    if (hotels && hotels.length > 0) {
      return hotels.map(hotel => {
        return (
          <HotelNearByItem 
            key = {hotel._id}
            hotel = {hotel}
          />
        )
      })
    }

    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        imageStyle={{
          height: 60,
        }}
      >
      </Empty>
    );
  }

  render() {
    console.log(this.props);
    return (
      <>
        <h2 className="st-heading text-center">Hotel Nearby</h2>
        <div className="services-grid services-nearby hotel-nearby grid mt50">
          <div className="row">
            { this.showHotelsNearBy(this.props.hotelsNearBy) }
          </div>
        </div>
      </>
    );
  }
}
