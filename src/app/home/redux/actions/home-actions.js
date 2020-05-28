import * as APIs from "../../../../services/call-api";
import * as types from '../action-type/action-type'
import Axios from "axios";

export const getTopDestinations = (topDestinations) => {
	return {
		type: types.GET_TOP_DESTINATIONS,
		topDestinations
	}
};

export const getTopDestinationsAPI = async (dispatch) => {
	let topDestinations = [];
	try {
		topDestinations = await APIs.callAPI("cities/top", "GET", null);
	}
	catch (e) {
		console.log(e);
		topDestinations = [];
	}
	if (topDestinations) {
		return dispatch(getTopDestinations(topDestinations.data.data.topDestinations));
	}
	
};

export const getTopTours = (topTours) => {
	return {
		type: types.GET_TOP_TOURS,
		topTours
	}
};

export const getTopToursAPI = async (dispatch) => {
	let topTours = [];
	try {
		topTours = await APIs.callAPI("tours/top", "GET", null);
	}
	catch (e) {
		console.log(e);
		topTours = []
	}
	if (topTours) {
		return dispatch(getTopTours(topTours.data.data.tours));
	}
	
};

export const getTopHotels = (topHotels) => {
	return {
		type: types.GET_TOP_HOTELS,
		topHotels
	}
};

export const getTopHotelsAPI = async (dispatch) => {
	let topHotels = [];
	try {
		topHotels = await APIs.callAPI("hotels/top", "GET", null);
	}
	catch (e) {
		console.log(e);
		topHotels = []
	}
	if (topHotels) {
		return dispatch(getTopHotels(topHotels.data.data.hotels));
	}
	
};

export const getAirports = (airports) => {
	return {
		type: types.GET_AIRPORTS,
		airports
	}
};

export const getAirportsAPI = async (dispatch) => {
	let airports = [];
	try {
		airports = await APIs.callAPI("cities/airports", "GET", null);
	}
	catch (e) {
		console.log(e);
		airports = []
	}
	if (airports) {
		return dispatch(getAirports(airports.data.data.airports));
	}

};

export const postSelectedAirport = (selectedAirport, typeSelected) => {
	if (typeSelected === 'start') {
		return {
			type: types.POST_SELECTED_AIRPORT_START,
			selectedAirportStart: selectedAirport
		}
	}
	if (typeSelected === 'end') {
		return {
			type: types.POST_SELECTED_AIRPORT_END,
			selectedAirportEnd: selectedAirport
		}
	}

}

export const postDateStartFlight = (dateStartFlight) => {
	return {
		type: types.POST_DATE_START_FLIGHT,
		dateStartFlight
	}
}

export const postDestination = (address, lng, lat, typeSearch) => {
	if (typeSearch === 'hotel') {
		return {
			type: types.POST_DESTINATION_HOTEL,
			address,
			lng,
			lat
		}
	}
	if (typeSearch === "tour") {
		return {
			type: types.POST_DESTINATION_TOUR,
			address,
			lng,
			lat
		}
	}
}

export const postDate = (dateStart, dateEnd, typeSearch) => {
	if (typeSearch === "hotel") {
		console.log(dateStart, dateEnd);
		return {
			type: types.POST_DATE_HOTEL,
			dateStart,
			dateEnd
		}
	}
	if (typeSearch === "tour") {
		return {
			type: types.POST_DATE_TOUR,
			dateStart,
			dateEnd
		}
	}
}

export const postPrice = (maxPrice, minPrice, typeSearch) => {
	if (typeSearch === "hotel") {
		console.log(maxPrice, minPrice);
		return {
			type: types.POST_PRICE_HOTEL,
			maxPrice,
			minPrice
		}
	}
	if (typeSearch === "tour") {
		return {
			type: types.POST_PRICE_TOUR,
			maxPrice,
			minPrice
		}
	}
}
