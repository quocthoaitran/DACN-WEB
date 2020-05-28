import * as types from '../action-type/actionTypes';
import * as APIs from '../../../../services/call-api';

export const getListBookingHistory = (bookings) => {
  console.log(bookings);
  return {
    type: types.GET_LIST_BOOKING_HISTORY,
    bookings,
  }
}

export const getListBookingHistoryAPI = async (dispatch) => {
  let bookHistory = null;

  try {
    bookHistory = await APIs.callAPI("booking/member", "GET", null);
  }
  catch (e) {
      console.log(e);
      bookHistory = null;
  }

  console.log(bookHistory);

  if (bookHistory) {
    if (bookHistory.data.success){
      return dispatch(getListBookingHistory(bookHistory.data.data.bookings))
    }
  }
}

export const getListReview = (reviews) => {
  console.log(reviews);
  return {
    type: types.GET_LIST_REVIEW,
    reviews,
  }
}

export const getListReviewAPI = async (dispatch) => {
  let reviewHistory = null;

  try {
    reviewHistory = await APIs.callAPI("reviews/member", "GET", null);
  }
  catch (e) {
      console.log(e);
      reviewHistory = null;
  }

  console.log(reviewHistory);

  if (reviewHistory) {
    if (reviewHistory.data.success){
      return dispatch(getListReview(reviewHistory.data.data.reviews))
    }
  }
}

export const updateInfoSuccess = (success) => {
  return {
    type: types.UPDATE_PROFILE_SUCCESS,
    success,
  }
}

export const updateInfoFailed = (errors) => {
  return {
    type: types.UPDATE_PROFILE_FAILED,
    errors,
  }
}

export const updateInfo = async (dispatch, data) => {
  let userReq = null;

  try {
    userReq = await APIs.callAPI("users", "PATCH", data);
  }
  catch (e) {
      console.log(e);
      userReq = null;
  }

  console.log(userReq);

  if (userReq) {
    if (userReq.data.success){
      return dispatch(updateInfoSuccess("Update success"));
    }
    return dispatch(updateInfoFailed(userReq.data.errors));
  }
}

export const changePasswordSuccess = (success) => {
  return {
    type: types.CHANGE_PASSWORD_SUCCESS,
    success,
  }
}

export const changePasswordFailed = (errors) => {
  return {
    type: types.CHANGE_PASSWORD_FAILED,
    errors,
  }
}

export const changePassword = async (dispatch, data) => {
  let userReq = null;

  try {
    userReq = await APIs.callAPI("auth/change-password", "POST", data);
  }
  catch (e) {
      console.log(e);
      userReq = null;
  }

  console.log(userReq);

  if (userReq) {
    if (userReq.data.success){
      return dispatch(changePasswordSuccess(userReq.data.data.notify));
    }
    return dispatch(changePasswordFailed(userReq.data.errors));
  }
}