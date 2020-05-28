import React, { Component } from 'react';
import './searchflight.css';
import ListFlightItemContainer from '../../../containers/ListFlightItemContainer';

class ListFlight extends Component {
	showTopFlights = (flights) => {
		if (flights && flights.length > 0) {
			return flights.map((flight, key) => {
				return (
					<ListFlightItemContainer flight={flight} key={key} />
				)
			})
		}
	}

	render() {
		return (
			<>
				<div className="content-search-flight">
					<div className="list-ticket-flight">
						{
							this.showTopFlights(this.props.flights)
						}
					</div>
				</div>
			</>
		);
	}
}

export default ListFlight;