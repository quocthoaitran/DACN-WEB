import * as APIs from "../../../../services/call-api";
import * as types from '../action-types/action-types';

export const getHotelsSearch = (hotels, meta) => {
  return {
    type: types.GET_HOTELS_SEARCH,
    hotels,
    meta
  }
}

export const getHotelsSearchAPI = async (dispatch, address, lng, lat, dateStart, dateEnd, minPrice, maxPrice, page = 1) => {
  let hotelsSearch = null;
  const data = {
    location: {
      address: {address},
      coordinates: [+lng,+lat]
    },
    dates: [dateStart, dateEnd],
    prices: [+minPrice, +maxPrice],
    guests: {
      rooms: 1,
      peoples: 1
    }
  }

  try{
    hotelsSearch = await APIs.callAPI(`hotels/search?page=${page}`, "POST", data);
  } catch (e) {
      console.log(e);
      hotelsSearch = null;
  }

  if (hotelsSearch) {
    return dispatch(getHotelsSearch(hotelsSearch.data.data.hotels, hotelsSearch.data.meta));
  }
};

export const getToursSearch = (tours, meta) => {
  return {
    type: types.GET_TOURS_SEARCH,
    tours,
    meta
  }
}

export const getToursSearchAPI = async (dispatch, address, lng, lat, dateStart, dateEnd, minPrice, maxPrice, page = 1) => {
  let toursSearch = null;
  const data = {
    location: {
      address: {address},
      coordinates: [+lng,+lat]
    },
    dates: [dateStart, dateEnd],
    prices: [+minPrice, +maxPrice]
  }
  try{
    toursSearch = await APIs.callAPI(`tours/search?page=${page}`, "POST", data);
  } catch (e) {
      toursSearch = null;
  }

  if (toursSearch) {
    return dispatch(getToursSearch(toursSearch.data.data.tours, toursSearch.data.meta));
  }
};

export const getFlightsSearch = (flights, meta) => {
  return {
    type: types.GET_FLIGHTS_SEARCH,
    flights,
    meta
  }
}

export const getFlightsSearchAPI = async (dispatch, airportStart, airportEnd, dateStart, page = 1) => {
  let flightsSearch = null;
  const data = {
    cities: [airportStart, airportEnd],
    dates: [dateStart]
  }
  try{
    flightsSearch = await APIs.callAPI(`flights/search?page=${page}`, "POST", data);
  } catch (e) {
    flightsSearch = null;
  }
  console.log(flightsSearch);
  if (flightsSearch) {
    return dispatch(getFlightsSearch(flightsSearch.data.data.flights, flightsSearch.data.meta));
  }
};