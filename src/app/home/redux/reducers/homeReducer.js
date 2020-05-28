import moment from 'moment';

import * as types from '../action-type/action-type';

const homeReducerInitialState = {
    topDestinations : [],
    topTours: [],
    topHotels: [],
    airports: [],
    selectedAirportStart: '',
    selectedAirportEnd: '',
    dateStartFlight: moment(moment(new Date()).add(1, 'days')).format('DD/MM/YYYY'),
    addressHotel: '',
    lngHotel: 0,
    latHotel: 0,
    dateStartHotel: moment(moment(new Date())).format('DD/MM/YYYY'),
    dateEndHotel: moment(moment(new Date())).format('DD/MM/YYYY'),
    maxPriceHotel: 500,
    minPriceHotel: 10,
    addressTour: '',
    lngTour: 0,
    latTour: 0,
    dateStartTour: moment(moment(new Date())).format('DD/MM/YYYY'),
    dateEndTour: moment(moment(new Date())).format('DD/MM/YYYY'),
    maxPriceTour: 500,
    minPriceTour: 10,
}
const homeReducer = (state = homeReducerInitialState, action) => {
    switch (action.type) {
        case types.GET_TOP_DESTINATIONS:
            return {
                ...state,
                topDestinations: action.topDestinations
            };
        case types.GET_TOP_TOURS:console.log(action);
            return {
                ...state,
                topTours: action.topTours
            };
        case types.GET_TOP_HOTELS:
            return {
                ...state,
                topHotels: action.topHotels
            };
        case types.GET_AIRPORTS:
            return {
                ...state,
                airports: action.airports
            };
        case types.POST_SELECTED_AIRPORT_START:
            return {
                ...state,
                selectedAirportStart: action.selectedAirportStart
            };
        case types.POST_SELECTED_AIRPORT_END:
            return {
                ...state,
                selectedAirportEnd: action.selectedAirportEnd };
        case types.POST_DATE_START_FLIGHT:
            return {
                ...state,
                dateStartFlight: action.dateStartFlight };
        case types.POST_DESTINATION_HOTEL:
            return {
                ...state,
                addressHotel: action.address,
                lngHotel:action.lng,
                latHotel: action.lat
            };
        case types.POST_DATE_HOTEL:
            return {
                ...state,
                dateStartHotel: action.dateStart,
                dateEndHotel:action.dateEnd
            };
        case types.POST_PRICE_HOTEL:
            return {
                ...state,
                maxPriceHotel: action.maxPrice,
                minPriceHotel:action.minPrice
            };
        case types.POST_DESTINATION_TOUR:
            return {
                ...state,
                addressTour: action.address,
                lngTour:action.lng,
                latTour: action.lat
            };
        case types.POST_DATE_TOUR:
            return {
                ...state,
                dateStartTour: action.dateStart,
                dateEndTour:action.dateEnd
            };
        case types.POST_PRICE_TOUR:
            return {
                ...state,
                maxPriceTour: action.maxPrice,
                minPriceTour:action.minPrice
            };
        default:
            return state;
    }
}

export default homeReducer;