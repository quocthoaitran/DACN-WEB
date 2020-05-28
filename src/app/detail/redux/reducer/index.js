import * as types from '../action-types/action-types';
import * as typesCheckout from '../../../checkout/redux/action-types/actionType';
import moment from 'moment';


const detailReducerInitialState = {
  hotelDetail: null,
  reviewsDetail: null,
  hotelsNearBy: null,
  tourDetail: null,
  reviewsTour: null,
  toursSimilar: null,
  availableRooms: null,
  errorsReviewHotel: null,
  errorsReviewTour: null,
  listBooking: [],
  checkInOutRoom: null,
}

const detailReducer = (state = detailReducerInitialState, action) => {
  switch (action.type) {
    case types.GET_HOTEL_DETAIL:
      return {
        ...state,
        hotelDetail: {
          ...action.hotelDetail
        }
      };

    case types.GET_ALL_REVIEWS_OF_HOTEL:
      return {
        ...state,
        reviewsDetail: [ ...action.reviews ]
      };

    case types.GET_HOTELS_NEAR_BY:
      return {
        ...state,
        hotelsNearBy: [ ...action.hotels ]
      };

    case types.GET_TOUR_DETAIL:
      return {
        ...state,
        tourDetail: {
          ...action.tourDetail
        }
      };
    
    case types.GET_ALL_REVIEWS_OF_TOUR:
      return {
        ...state,
        reviewsTour: [
          ...action.reviewsTour
        ]
      };

    case types.GET_TOUR_SIMILAR:
      console.log(action);
      return {
        ...state,
        toursSimilar: [
          ...action.toursSimilar
        ]
      };
    case types.AVAILABLE_ROOMS:
      return {
        ...state,
        availableRooms: [
          ...action.availableRooms
        ],
        checkInOutRoom: action.data,
      };
    case types.CREATE_REVIEW_HOTEL:
      return {
        ...state,
        reviewsDetail: [
          ...state.reviewsDetail, action.review
        ],
        errorsReviewHotel: null,
      };
    case types.CREATE_REVIEW_HOTEL_FAILED:
      return {
        ...state,
        errorsReviewHotel: action.errors
      };
    case types.CREATE_REVIEW_TOUR:
      return {
        ...state,
        reviewsTour: [
          ...state.reviewsTour, action.review
        ],
        errorsReviewTour: null,
      };
    case types.CREATE_REVIEW_TOUR_FAILED:
      return {
        ...state,
        errorsReviewTour: action.errors
      };
    case types.BOOKING_TOUR: {
      const listBooking = [...state.listBooking];
      const bookingItem = listBooking.find(bookingItem => bookingItem.id === action.data.id);
      if (bookingItem) {
        return {
          ...state,
        }
      }
      return {
        ...state,
        listBooking: [...listBooking, action.data]
      };
    }
    case types.BOOKING_ROOM: {
      const listBooking = [...state.listBooking];
      const bookingItem = listBooking.find(bookingItem => bookingItem.id === action.data.id);
      if (bookingItem) {
        return {
          ...state,
        }
      }

      const arrCheckIn = action.data.checkin.split('/');
      const checkin = moment(`${arrCheckIn[0]}/${arrCheckIn[1]}/${arrCheckIn[2]}`, 'DD/MM/YYYY');    

      const arrCheckOut = action.data.checkout.split('/');
      const checkout = moment(`${arrCheckOut[0]}/${arrCheckOut[1]}/${arrCheckOut[2]}`, 'DD/MM/YYYY');    


      const num_night = moment.duration(checkout.diff(checkin)).asDays();

      console.log(num_night);

      const price =  num_night * action.data.price;

      console.log(price);

      const item = {
        ...action.data,
        price
      }

      console.log(item);

      return {
        ...state,
        listBooking: [...listBooking, item]
      };
    }
    case types.BOOKING_FLIGHT: {
      const listBooking = [...state.listBooking];
      const bookingItem = listBooking.find(bookingItem => bookingItem.id === action.data.id);
      if (bookingItem) {
        return {
          ...state,
        }
      }
      return {
        ...state,
        listBooking: [...listBooking, action.data]
      };
    }
    case typesCheckout.CLEAR_ALL_BOOKINGS: {
      console.log('chạy vô đây rồi');
      return {
        ...state,
        listBooking: []
      }
    }
    default:
      return state;
  }
}

export default detailReducer;