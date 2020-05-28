import React, { Component } from "react";
import ItemTopTour from "./ItemTopTour";
import Slider from 'react-slick'

export default class TopTour extends Component {
  
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
    this.props.getTopToursAPI();
  }

  showTopTours = (tours) => {
    if(tours.length > 0){ 
      return tours.map((tour, key) => {
        return (<div className="col-md-3 col-sm-6 col-xs-12" key={key}>
        <ItemTopTour tour = {tour} key={key}/>
      </div>)
      })
    }
  }

  render() {

    return (
      <div className="tab-content st_tours didauday-slide-show">
        <div className="search-result-page st-tours service-slider-wrapper">
          <div className="st-hotel-result">
            <div className="st-service-slider">
              <Slider {...this.settings}>
                {
                  this.showTopTours(this.props.topTours)
                }
                {
                  this.showTopTours(this.props.topTours)
                }
                {
                  this.showTopTours(this.props.topTours)
                }
                {
                  this.showTopTours(this.props.topTours)
                }
                {
                  this.showTopTours(this.props.topTours)
                }
                {
                  this.showTopTours(this.props.topTours)
                }
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
