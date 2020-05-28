import { combineReducers } from 'redux';
import homeReducer from '../app/home/redux/reducers/homeReducer';
import searchReducer from '../app/search/redux/reducer';
import detailReducer from '../app/detail/redux/reducer';
import AuthReducer from '../common/header/auth/redux/reducer/AuthReducer';
import bookReducer from '../app/checkout/redux/reducer/index';
import profileReducer from '../app/profile/redux/reducer/index';

export default combineReducers(
  {
    homeReducer,
    searchReducer,
    detailReducer,
    AuthReducer,
    bookReducer,
    profileReducer,
  }
);