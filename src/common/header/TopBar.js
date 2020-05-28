import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from './auth/redux/actions/Actions';
import { withRouter } from 'react-router-dom'

class TopBar extends Component {

  handleLogout = () => {
    this.props.logout();

  }
  render() {
    return (
      <div id="topbar">
        <div className="topbar-left">
          <ul className="st-list socials">
            <li>
              <a href="https://www.facebook.com/" target = '_blank' rel="noopener noreferrer">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://www.facebook.com/" target = '_blank' rel="noopener noreferrer">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://www.facebook.com/" target = '_blank' rel="noopener noreferrer">
                <i className="fa fa-google-plus" />
              </a>{" "}
            </li>
          </ul>
        </div>
        <div className="topbar-right">
          <ul className="st-list topbar-items">
            {
              this.props.token ?
              (
                <>
                  <li className="login-item">
                      <NavLink
                        to = '/dashboard/booking-history'
                        className="login"
                      >
                        {this.props.userInfo.firstname}
                      </NavLink>
                    </li>
                    <li className="login-item">
                      <a
                        className="login"
                        onClick = {this.handleLogout}
                      >
                        Logout
                      </a>
                    </li>
                </>
              ) : 
              (
                <>
                  <li className="login-item">
                    <NavLink
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="signup-item">
                  <NavLink
                      to="/register"
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.AuthReducer.userInfo,
    token: state.AuthReducer.token,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      actions.logout(dispatch);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopBar))
