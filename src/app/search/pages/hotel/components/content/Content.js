import React, { Component } from 'react'
import ListHotelContainer from '../../containers/ListHotelContainer';
import PaginationContainer from '../../containers/PaginationContainer';

export default class Content extends Component {
  render() {
    return (
      <>
        <ListHotelContainer />
        <PaginationContainer />
      </>
    )
  }
}
