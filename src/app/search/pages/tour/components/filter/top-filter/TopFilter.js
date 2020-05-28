import React, { Component } from "react";

export default class TopFilter extends Component {
  render() {
    return (
      <div className="toolbar ">
        <div className="dropdown-menu sort-menu sort-menu-mobile">
          <div className="sort-title">
            <h3>
              SORT BY{" "}
              <span className="hidden-lg hidden-md close-filter">
                <i className="input-icon field-icon fa">
                  <svg
                    height="20px"
                    width="20px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                    <title>Ico_close</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Ico_close"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <g id="Group" stroke="#1A2B48" strokeWidth="1.5">
                        <g id="close">
                          <path d="M0.75,23.249 L23.25,0.749" id="Shape" />
                          <path d="M23.25,23.249 L0.75,0.749" id="Shape" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </i>
              </span>
            </h3>
          </div>
          <div className="sort-item st-icheck">
            <div className="st-icheck-item">
              <label>
                {" "}
                New tour
                <input
                  className="service_order"
                  type="radio"
                  name="service_order_m_"
                  data-value="new"
                  defaultChecked
                />
                <span className="checkmark" />
              </label>
            </div>
          </div>
          <div className="sort-item st-icheck">
            <span className="title">Price</span>
            <div className="st-icheck-item">
              <label>
                {" "}
                Low to Hight
                <input
                  className="service_order"
                  type="radio"
                  name="service_order_m_"
                  data-value="price_asc"
                />
                <span className="checkmark" />
              </label>
            </div>
            <div className="st-icheck-item">
              <label>
                {" "}
                Hight to Low
                <input
                  className="service_order"
                  type="radio"
                  name="service_order_m_"
                  data-value="price_desc"
                />
                <span className="checkmark" />
              </label>
            </div>
          </div>
          <div className="sort-item st-icheck">
            <span className="title">Name</span>
            <div className="st-icheck-item">
              <label>
                {" "}
                a - z
                <input
                  className="service_order"
                  type="radio"
                  name="service_order_m_"
                  data-value="name_a_z"
                />
                <span className="checkmark" />
              </label>
            </div>
            <div className="st-icheck-item">
              <label>
                {" "}
                z - a
                <input
                  className="service_order"
                  type="radio"
                  name="service_order_m_"
                  data-value="name_z_a"
                />
                <span className="checkmark" />
              </label>
            </div>
          </div>
        </div>
        <ul className="toolbar-action-mobile hidden-lg hidden-md">
          <li>
            <a href="#" className="btn btn-primary btn-date">
              Date
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-primary btn-sort">
              Sort
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-primary btn-filter">
              Filter
            </a>
          </li>
        </ul>
        <h3
          className="search-string modern-result-string"
          id="modern-result-string"
        >
          {this.props.meta.total_size} tours found
          <div
            id="btn-clear-filter"
            className="btn-clear-filter"
            style={{ display: "none" }}
          >
            Clear filter
          </div>
        </h3>
      </div>
    );
  }
}
