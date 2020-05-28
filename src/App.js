import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./app/home/Home";

import "./css/didauday_custom.css";
import "antd/dist/antd.css";

import NotFound from "./app/not-found/NotFound";
import HotelDetailContainer from "./app/detail/pages/hotel/HotelDetailContainer";
import searchHotelContainer from "./app/search/pages/hotel/searchHotelContainer";
import searchTourContainer from "./app/search/pages/tour/searchTourContainer";
import SearchFlightContainer from "./app/search/pages/flight/SearchFlightContainer";
import TourDetailContainer from "./app/detail/pages/tour/TourDetailContainer";
import LoginContainer from "./common/header/page/LoginContainer";
import RegisterContainer from "./common/header/page/RegisterContainer";
import ConfirmEmailSuccess from "./app/confirm-email/ConfirmEmailSuccess";
import ConfirmEmailFailed from "./app/confirm-email/ConfirmEmailFailed";
import CheckoutSuccess from "./app/checkout/pages/checkout-success/CheckoutSuccess";
import CheckoutFailed from "./app/checkout/pages/checkout/checkout-failed/CheckoutFailed";

import { store } from "./store";

import * as APIs from './services/call-api';
import CheckoutContainer from './app/checkout/pages/checkout/CheckoutContainer';
import Profile from "./app/profile/Profile";

import { BackTop } from "antd";
import PrivateRoute from "./hoc/PrivateRoute";

const App = props => {
  const { token } = store.getState().AuthReducer;
  if (token) {
    APIs.setAuthToken(token);
  }
  return (
    <>
      <BackTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search/hotel" component={searchHotelContainer} />
        <Route exact path="/search/tour" component={searchTourContainer} />
        <Route exact path="/search/flight" component={SearchFlightContainer} />
        <Route exact path="/hotels/:hotelId" component={HotelDetailContainer} />
        <Route exact path="/tours/:tourId" component={TourDetailContainer} />
        <PrivateRoute exact path="/checkout" component={CheckoutContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/register" component={RegisterContainer} />
        <PrivateRoute path="/dashboard" component={Profile} />
        <Route exact path="/confirm/success" component={ConfirmEmailSuccess} />
        <Route exact path="/confirm/failed" component={ConfirmEmailFailed} />
        <Route exact path="/checkout/success" component={CheckoutSuccess} />
        <Route exact path="/checkout/failed" component={CheckoutFailed} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
};

export default App;
