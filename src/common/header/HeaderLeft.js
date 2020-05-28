import React, { Component } from "react";
import { NavLink } from 'react-router-dom';


export default class HeaderLeft extends Component {
  render() {
    return (
      <div className="header-left">
        <NavLink to = '/' className="logo hidden-xs">
          <img className="didauday-custom-logo"
            src="/images/2018/11/mix_logo-2.svg"
            alt="DiDauDay.me logo"
          />
        </NavLink>
        <NavLink to = '/' className="logo hidden-lg hidden-md hidden-sm">
          <img className="didauday-custom-logo"
            src="/images/2018/11/mix_logo_mb.svg"
            alt="DiDauDay.me logo"
          />
        </NavLink>
        <nav id="st-main-menu">
          <a className="back-menu">
            <i className="fa fa-angle-left" />
          </a>
          <ul id="main-menu" className="menu main-menu">
            <li
              id="menu-item-9135"
              className="didauday-custom-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-9135 menu-item-has-children has-mega-menu"
            >
              <a>
                Hotel 
              </a>
            </li>
            <li
              id="menu-item-9109"
              className="didauday-custom-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-9109 menu-item-has-children has-mega-menu"
            >
              <a>
                Tour 
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
