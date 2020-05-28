import * as APIs from "../../../../services/call-api";
import * as types from '../action-types/action-types';
import { Redirect } from 'react-router-dom';
import React from 'react'

export const getHotelDetail = (hotelDetail) => {
  return {
    type: types.GET_HOTEL_DETAIL,
    hotelDetail,
  }
}

export const getHotelDetailAPI = async (dispatch, hotelId) => {
  let hotelDetail = null;

  try{
    hotelDetail = await APIs.callAPI(`hotels/${hotelId}`, "GET", null);
  } catch (e) {
      console.log(e);
      hotelDetail = null;
  }
  
  if (hotelDetail) {
    return dispatch(getHotelDetail(hotelDetail.data.data.hotel));
  }
};

export const getReviewsOfHotel = (reviews) => {
  return {
    type: types.GET_ALL_REVIEWS_OF_HOTEL,
    reviews,
  }
}

export const getReviewsOfHotelAPI = async (dispatch, hotelId) => {
  let reviews = null;

  try{
    reviews = await APIs.callAPI(`hotels/${hotelId}/reviews`, "GET", null);
  } catch (e) {
      console.log(e);
      reviews = null;
  }
  

  if (reviews) {
    return dispatch(getReviewsOfHotel(reviews.data.data.reviews));
  }
};

export const getHotelsNearBy = (hotels) => {
  return {
    type: types.GET_HOTELS_NEAR_BY,
    hotels,
  }
}

export const getHotelsNearByAPI = async (dispatch, hotelId) => {
  let hotels = null;

  try{
    hotels = await APIs.callAPI(`hotels/${hotelId}/near-by`, "GET", null);
  } catch (e) {
      console.log(e);
      hotels = null;
  }
  
  console.log(hotels);
  if (hotels) {
    return dispatch(getHotelsNearBy(hotels.data.data.hotels));
  }
};

export const getTourDetail = (tourDetail) => {
  return {
    type: types.GET_TOUR_DETAIL,
    tourDetail,
  }
}

export const getTourDetailAPI = async (dispatch, tourId) => {
  let tourDetail = null;

  try{
    tourDetail = await APIs.callAPI(`tours/${tourId}`, "GET", null);
  } catch (e) {
      console.log(e);
      tourDetail = null;
  }
  
  if (tourDetail) {
    return dispatch(getTourDetail(tourDetail.data.data.tour));
  }
};

export const getReviewsOfTour = (reviewsTour) => {
  return {
    type: types.GET_ALL_REVIEWS_OF_TOUR,
    reviewsTour,
  }
}

export const getReviewsOfTourAPI = async (dispatch, tourId) => {
  let reviewsTour = null;

  try{
    reviewsTour = await APIs.callAPI(`tours/${tourId}/reviews`, "GET", null);
  } catch (e) {
      console.log(e);
      reviewsTour = null;
  }
  
  if (reviewsTour) {
    return dispatch(getReviewsOfTour(reviewsTour.data.data.reviews));
  }
};

export const getToursSimilar = (toursSimilar) => {
  return {
    type: types.GET_TOUR_SIMILAR,
    toursSimilar,
  }
}

export const getToursSimilarAPI = async (dispatch, tourId) => {
  let toursSimilar = null;

  try{
    toursSimilar = await APIs.callAPI(`tours/${tourId}/similar`, "GET", null);
  } catch (e) {
      console.log(e);
      toursSimilar = null;
  }
  
  // console.log(toursSimilar);

  if (toursSimilar) {
    return dispatch(getToursSimilar(toursSimilar.data.data.tours));
  }
};

export const bookingTour = (data) => {
  console.log(data)
  return {
    type: types.BOOKING_TOUR,
    data,
  }
}

export const bookingRoom = (data) => {
  console.log(data)
  return {
    type: types.BOOKING_ROOM, 
    data,
  }
}

export const bookingFlight = (data) => {
  console.log(data)
  return {
    type: types.BOOKING_FLIGHT, 
    data,
  }
}

export const availableRooms = (rooms, data) => {
  // console.log(rooms)
  return {
    type: types.AVAILABLE_ROOMS,
    availableRooms: rooms,
    data
  }
}

export const checkAvailableRooms = async (dispatch, hotelId, data) => {
  let rooms = null;
  // console.log(data);
  try{
    rooms = await APIs.callAPI(`hotels/${hotelId}/rooms/available`, "POST", data);
  }catch (e) {
    console.log(e);
    rooms = null;
  }

  // console.log(rooms.data);

  if(rooms){
    return dispatch(availableRooms(rooms.data.data.rooms, data));
  }
}

export const createReviewHotel = (review) => {
  console.log(review);
  return {
    type: types.CREATE_REVIEW_HOTEL,
    review
  }
}

export const createReviewHotelFailed = (errors) => {
  // console.log(rooms)
  return {
    type: types.CREATE_REVIEW_HOTEL_FAILED,
    errors
  }
}

export const createReviewHotelAPI = async (dispatch, hotelId, data) => {
  let review = null;
  try{
    review = await APIs.callAPI(`hotels/${hotelId}/reviews`, "POST", data);
  }catch (e) {
    console.log(e);
    review = null;
  }

  console.log(review.data);

  if(review.data.success){
    return dispatch(createReviewHotel(review.data.data.reviewCreated));
  } else {
    dispatch(createReviewHotelFailed(review.data.errors))
  }
}

export const createReviewTour = (review) => {
  console.log(review);
  return {
    type: types.CREATE_REVIEW_TOUR,
    review
  }
}

export const createReviewTourFailed = (errors) => {
  // console.log(rooms)
  return {
    type: types.CREATE_REVIEW_TOUR_FAILED,
    errors
  }
}

export const createReviewTourAPI = async (dispatch, id, data) => {
  let review = null;
  try{
    review = await APIs.callAPI(`tours/${id}/reviews`, "POST", data);
  }catch (e) {
    console.log(e);
    review = null;
  }

  console.log(review.data);

  if(review.data.success){
    return dispatch(createReviewTour(review.data.data.reviewCreated));
  } else {
    dispatch(createReviewTourFailed(review.data.errors))
  }
}