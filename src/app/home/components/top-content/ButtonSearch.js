import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { message } from 'antd';

class ButtonSearch extends Component {

  handleClick = (event) => {
    event.preventDefault();
    const data= this.props.airports.map(airport => `${airport.name} ( ${airport.acronym} )`);
    if( data.includes(this.props.selectedAirportStart)&& data.includes(this.props.selectedAirportEnd)&&this.props.dateStartFlight){
      let data = this.props.selectedAirportStart.split(" ");
      const acronymStart = data[data.length - 2];
      data = this.props.selectedAirportEnd.split(" ");
      const acronymEnd = data[data.length - 2];
      this.props.history.push(`/search/flight?airportStart=${acronymStart}&&airportEnd=${acronymEnd}&&dateStart=${this.props.dateStartFlight}`);
    }
    else {
      message.error(<span className="didauday-error-input">This data is invalid. Please check your input!!!</span>);
    }
  }

  render() {
    return (
      <>
        <button
          className="btn btn-primary btn-search didayday-home-seach-button"
          type="submit"
          onClick = { this.handleClick }
        >
          Search
        </button>
      </>
    );
  }
}

export default withRouter(ButtonSearch);