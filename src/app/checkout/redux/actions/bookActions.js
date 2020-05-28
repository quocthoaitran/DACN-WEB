import * as APIs from "../../../../services/call-api";
import * as types from '../action-types/actionType';

export const bookErrors = (errors) => {
  return {
    type: types.BOOK_ERROR,
    errors
  }
}
export const clearAllBookings = () => {
  return {
    type: types.CLEAR_ALL_BOOKINGS,
  }
}

export const bookItems = async (dispatch, data) => {
  let bookReq = null;
  try{
    bookReq = await APIs.callAPI("booking", "POST", data);
  }catch (e) {
    console.log(e);
    bookReq = null;
  }

  if(bookReq && bookReq.data.success){
    dispatch(clearAllBookings())
    window.location = bookReq.data.data.url_redirect;
  }
  return dispatch(bookErrors(bookReq.data.errors))
};
