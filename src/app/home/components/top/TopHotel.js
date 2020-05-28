import React, { Component } from "react";
import Slider from 'react-slick'
import ItemTopHotel from "./ItemTopHotel";

export default class TopHotel extends Component {


  settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  componentDidMount() {
    this.props.getTopHotelsAPI();
  }

  showTopHotels = (hotels) => {
    if (hotels.length > 0){ 
      return hotels.map((hotel, key) => {
        return (
          <div className="col-md-3 col-sm-6 col-xs-12" key={key}>
            <ItemTopHotel hotel={ hotel }/>
          </div>
        )
      })
    }
  }


  render() {
    return (
      <div className="tab-content st_hotel didauday-slide-show">
        <div className="search-result-page st-tours service-slider-wrapper">
          <div className="st-hotel-result services-grid">
            <div className="st-service-slider ">
              <Slider {...this.settings}>
                {this.showTopHotels(this.props.topHotels)}
                {this.showTopHotels(this.props.topHotels)}
                {this.showTopHotels(this.props.topHotels)}
                {this.showTopHotels(this.props.topHotels)}
                {this.showTopHotels(this.props.topHotels)}
                {this.showTopHotels(this.props.topHotels)}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
