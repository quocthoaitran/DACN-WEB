import React, { Component } from "react";

export default class Breadcrumb extends Component {
  render() {
    return (
      <>
        <div className="st-breadcrumb hidden-xs">
          <div className="container">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">
                  Viet Nam
                </a>
              </li>
              <li className="active">{ this.props.name }</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
