import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom'

import {
  connect
} from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {

  const Authentication = (props) => {
    const token = props.token;
    return (
      <Route {...rest} render={(props) => (
        token
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />
      )} />      
    )
  }

  const mapStateToProps = (state) => {
    return {
      token: state.AuthReducer.token,
    }
  }

  const NewAuthentication = connect(mapStateToProps)(Authentication);
  return <NewAuthentication />;
}


export default PrivateRoute;