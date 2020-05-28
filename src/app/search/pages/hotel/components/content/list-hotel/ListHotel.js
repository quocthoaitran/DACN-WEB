import React, { Component } from 'react'
import ListHotelItem from './ListHotelItem';

export default class ListHotel extends Component {
  showTopHotels = (hotels) => {
    if (hotels.length > 0) {
      return hotels.map((hotel, key) => {
        return (
          <ListHotelItem hotel={hotel} key = {key} />
        )
      })
    }
  }

  render() {
    return (
      <div
        id="modern-search-result"
        className="modern-search-result"
        data-layout={3}
      >
        <div className="row row-wrapper">
          {this.showTopHotels(this.props.hotels)}
        </div>
      </div>
    )
  }
}
