import React, { Component } from 'react'
import ListTourContainer from '../../containers/ListTourContainer';
import PaginationContainer from '../../containers/PaginationContainer';

export default class Content extends Component {
  render() {
    return (
      <>
        <ListTourContainer />
        <PaginationContainer />
      </>
    )
  }
}
