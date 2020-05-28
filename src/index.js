import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import ScrollTop from './common/scroll-top/ScrollTop';

import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';

import { Spin } from 'antd';

import 'antd/dist/antd.css';


const AppRoute = () => {
  return (
    <Router>
      <ScrollTop>
        <App />
      </ScrollTop>
    </Router>
  )
}

const AppRedux = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Spin size="large" />} persistor={persistor}>
        <AppRoute />
      </PersistGate>
    </Provider>
  )
}

ReactDOM.render(<AppRedux/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
