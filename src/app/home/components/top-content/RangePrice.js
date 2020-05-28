import React, { Component } from 'react';
import { Slider, message } from 'antd';
import { withRouter } from 'react-router-dom';

class RangePrice extends Component {

  marks = {
    10: {
      style: {
        color: '#f50',
      },
      label: <strong>$10</strong>,
    },
    1000: {
      style: {
        color: '#f50',
      },
      label: <strong>$1000</strong>,
    },
  };

  onChangePrice = (value) => {
    this.props.postPrice(value[1], value[0], this.props.typeSearch)
  }

  onClickSearch = (event) => {
    event.preventDefault();
    if (this.props.typeSearch === "hotel") {
      if (this.props.addressHotel !== '' && this.props.lngHotel !== '' && this.props.latHote !== '' && this.props.dateStartHotel !== 'Invalid date' && this.props.dateEndHotel !== 'Invalid date' && this.props.maxPriceHotel !== '' && this.props.minPriceHotel !== '') {
        this.props.history.push(`/search/hotel?address=${this.props.addressHotel}&&lng=${this.props.lngHotel}&&lat=${this.props.latHotel}&&dateStart=${this.props.dateStartHotel}&&dateEnd=${this.props.dateEndHotel}&&maxPrice=${this.props.maxPriceHotel}&&minPrice=${this.props.minPriceHotel}&&rooms=1&&peoples=1`)
      }
      else {
        message.error(<span className="didauday-error-input">This data is invalid. Please check your input!!!</span>);
      }
    }
    if (this.props.typeSearch === "tour") {
      if (this.props.addressTour !== '' && this.props.lngTour !== '' && this.props.latHote !== '' && this.props.dateStartTour !== 'Invalid date' && this.props.dateEndTour !== 'Invalid date' && this.props.maxPriceTour !== '' && this.props.minPriceTour !== '') {
        this.props.history.push(`/search/tour?address=${this.props.addressTour}&&lng=${this.props.lngTour}&&lat=${this.props.latTour}&&dateStart=${this.props.dateStartTour}&&dateEnd=${this.props.dateEndTour}&&maxPrice=${this.props.maxPriceTour}&&minPrice=${this.props.minPriceTour}`)
      }
      else {
        message.error(<span className="didauday-error-input">This data is invalid. Please check your input!!!</span>);
      }
    }

  }
  render() {
    return (
      <>
        <div className="form-button">
          <div className="advance">
            <div className="form-group form-extra-field dropdown clearfix field-advance">
              <div
                className="dropdown"
                data-toggle="dropdown"
                id="dropdown-advance"
              >
                <label className="hidden-xs">
                  Advance
                                          </label>
                <div className="render">
                  <span className="hidden-xs">
                    More <i className="fa fa-caret-down" />
                  </span>
                  <span className="hidden-lg hidden-md hidden-sm">
                    More option{" "}
                    <i className="fa fa-caret-down" />
                  </span>
                </div>
              </div>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdown-advance"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="advance-item range-slider">
                      <div className="item-title">
                        <h4>Filter Price</h4>
                      </div>
                      <div className="item-content">
                        <Slider
                          marks={this.marks}
                          range
                          min={10}
                          max={1000}
                          step={10}
                          defaultValue={[10, 100]}
                          onChange={this.onChangePrice}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary btn-search"
            type="submit"
            onClick={this.onClickSearch}
          >
            Search
          </button>
        </div>

      </>
    );
  }
}

export default withRouter(RangePrice);