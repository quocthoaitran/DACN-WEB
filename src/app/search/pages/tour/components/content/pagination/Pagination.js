import React, { Component } from "react";
import { Pagination } from 'antd';
import { withRouter } from 'react-router-dom';

class PaginationCom extends Component {

  state = {
    currentPage: 1,
  }

  handleChange = (page, pageSize) => {
    let searchUrl = new URLSearchParams(this.props.location.search);
    const addressTour = searchUrl.get('address');
    const lngTour = searchUrl.get('lng');
    const latTour = searchUrl.get('lat');
    const dateStartTour = searchUrl.get('dateStart');
    const dateEndTour = searchUrl.get('dateEnd');
    const maxPriceTour = searchUrl.get('maxPrice');
    const minPriceTour = searchUrl.get('minPrice');
    searchUrl.set('page', page);
    this.setState({
      currentPage: page,
    }, () => {
      this.props.getToursSearchAPI(addressTour, lngTour, latTour, dateStartTour, dateEndTour, +minPriceTour, +maxPriceTour, page);
      this.props.history.push(`${this.props.match.path}?${searchUrl.toString()}`)
    })
  }

  componentDidMount() {
    let searchUrl = new URLSearchParams(this.props.location.search);
    const page = +searchUrl.get('page') || 1;
    this.setState({
      currentPage: page,
    })
  }

  render() {
    console.log(this.props);
    return (
      <div
        className="pagination moderm-pagination"
        id="moderm-pagination"
        data-layout="normal"
      >
        <Pagination
          current={this.state.currentPage}
          pageSize = {12}
          total={this.props.meta.total_size}
          onChange = { this.handleChange }
        />
      </div>
    );
  }
}

export default withRouter(PaginationCom);