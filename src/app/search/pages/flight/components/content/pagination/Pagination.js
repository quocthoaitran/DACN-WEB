import React, { Component } from 'react'
import { Pagination } from 'antd';
import { withRouter } from 'react-router-dom';

class PaginationCom extends Component {

  state = {
    currentPage: 1,
  }

  handleChange = (page, pageSize) => {
    let searchUrl = new URLSearchParams(this.props.location.search);
    const airportStart = searchUrl.get('airportStart');
    const airportEnd = searchUrl.get('airportEnd');
    const dateStart = searchUrl.get('dateStart');
    searchUrl.set('page', page);
    this.setState({
      currentPage: page,
    }, () => {
      this.props.getFlightsSearchAPI(airportStart, airportEnd, dateStart, page);
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
        pageSize = {10}
        total={this.props.meta.total_size}
        onChange = { this.handleChange }
        />
    </div>
    )
  }
}

export default withRouter(PaginationCom);
