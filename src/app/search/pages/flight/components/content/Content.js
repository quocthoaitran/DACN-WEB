import React, { Component } from 'react'
import ListFlightContainer from '../../containers/ListFlightContainer';
import PaginationContainer from '../../containers/PaginationContainer';

export default class Content extends Component {
  render() {
    return (
      <>
        <ListFlightContainer />
        <PaginationContainer 
          currentPage = {this.props.currentPage}
        />
      </>
    )
  }
}
