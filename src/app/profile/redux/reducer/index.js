import * as types from '../action-type/actionTypes';

const profileReducerInitialState = {
  bookings: null,
  reviews: null,
  success: '',
  errors: null,
  changeSuccess: '',
  changeErrors: null,
}
const profileReducer = (state = profileReducerInitialState, action) => {
  switch (action.type) {
    case types.GET_LIST_BOOKING_HISTORY:
      return {...state, bookings: action.bookings}
      case types.GET_LIST_REVIEW:
        return {...state, reviews: action.reviews}
      case types.UPDATE_PROFILE_SUCCESS:
        return {...state, success: action.success, errors: null}
      case types.UPDATE_PROFILE_FAILED:
        return {...state, errors: action.errors}
      case types.CHANGE_PASSWORD_SUCCESS:
        return {...state, changeSuccess: action.success, changeErrors: null}
      case types.CHANGE_PASSWORD_FAILED:
        return {...state, changeErrors: action.errors}
    default:
      return state
  }
}

export default profileReducer;