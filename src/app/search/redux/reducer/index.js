import * as types from '../action-types/action-types';

const searchReducerInitialState = {
  hotels: [],
  metaHotel: {
    page: 0,
    page_size: 0,
    total_page: 0
  },
  tours: [],
  metaTour: {
    page: 0,
    page_size: 0,
    total_page: 0,
  },
  flights: [],
  metaFlight: {
    page: 0,
    page_size: 0,
    total_page: 0,
  },
}

const searchReducer = (state = searchReducerInitialState, action) => {
  switch (action.type) {
    case types.GET_HOTELS_SEARCH:
      return { ...state, hotels: [...action.hotels], metaHotel:{...action.meta} }
    case types.GET_TOURS_SEARCH:
      return { ...state, tours: [...action.tours], metaTour:{...action.meta} }
    case types.GET_FLIGHTS_SEARCH:
      return { ...state, flights: [...action.flights], metaFlight: { ...action.meta }}
    default:
      return state
  }
}

export default searchReducer;