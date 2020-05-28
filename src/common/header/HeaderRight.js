import React, { Component } from "react";

export default class HeaderRight extends Component {
  render() {
    return (
      <div className="header-right">
        <ul className="st-list">
          <li className="dropdown dropdown-minicart">
            <div
              id="d-minicart"
              className="mini-cart"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="input-icon field-icon fa">
                <svg
                  height="26px"
                  width="26px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                  <title>ico_card</title>
                  <desc>Created with Sketch.</desc>
                  <defs />
                  <g
                    id="ico_card"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      id="Group"
                      transform="translate(1.000000, 0.000000)"
                      stroke="#fff"
                      strokeWidth="1.5"
                    >
                      <g id="shopping-basket-handle">
                        <path
                          d="M17.936,23.25 L4.064,23.25 C3.39535169,23.2378444 2.82280366,22.7675519 2.681,22.114 L0.543,13.114 C0.427046764,12.67736 0.516308028,12.2116791 0.785500181,11.8488633 C1.05469233,11.4860476 1.47449596,11.2656135 1.926,11.25 L20.074,11.25 C20.525504,11.2656135 20.9453077,11.4860476 21.2144998,11.8488633 C21.483692,12.2116791 21.5729532,12.67736 21.457,13.114 L19.319,22.114 C19.1771963,22.7675519 18.6046483,23.2378444 17.936,23.25 Z"
                          id="Shape"
                        />
                        <path d="M6.5,14.25 L6.5,20.25" id="Shape" />
                        <path d="M11,14.25 L11,20.25" id="Shape" />
                        <path d="M15.5,14.25 L15.5,20.25" id="Shape" />
                        <path
                          d="M8,2.006 C5.190705,2.90246789 3.1556158,5.34590097 2.782,8.271"
                          id="Shape"
                        />
                        <path
                          d="M19.221,8.309 C18.8621965,5.36812943 16.822685,2.90594951 14,2.006"
                          id="Shape"
                        />
                        <rect
                          id="Rectangle-path"
                          x={8}
                          y="0.75"
                          width={6}
                          height={3}
                          rx="1.125"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </i>{" "}
            </div>
            <ul className="dropdown-menu" aria-labelledby="d-minicart">
              <li className="heading">
                <h4 className="st-heading-section">Your Cart</h4>
              </li>
              <div className="col-lg-12 cart-text-empty text-warning">
                Your cart is empty
              </div>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
