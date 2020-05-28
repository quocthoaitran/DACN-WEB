import React, { Component } from 'react'

import TopBar from './TopBar';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

export default class Header extends Component {
  render() {
    return (
      <header id="header">
      <TopBar />
      <div className="header didauday-custom-header">
        <a href="#menu" className="toggle-menu">
          <i className="input-icon field-icon fa">
            <svg
              height="24px"
              width="24px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
              <title>Ico_off_menu</title>
              <desc>Created with Sketch.</desc>
              <defs />
              <g
                id="Ico_off_menu"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g id="Group" stroke="#fff" strokeWidth="1.5">
                  <g id="navigation-menu-4">
                    <rect
                      id="Rectangle-path"
                      x="0.75"
                      y="0.753"
                      width="22.5"
                      height="22.5"
                      rx="1.5"
                    />
                    <path d="M6.75,7.503 L17.25,7.503" id="Shape" />
                    <path d="M6.75,12.003 L17.25,12.003" id="Shape" />
                    <path d="M6.75,16.503 L17.25,16.503" id="Shape" />
                  </g>
                </g>
              </g>
            </svg>
          </i>{" "}
        </a>
        <HeaderLeft />
        <HeaderRight />
      </div>
    </header>
    )
  }
}
