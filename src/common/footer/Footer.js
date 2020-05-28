import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="container main-footer-sub">
        <div className="st-flex space-between">
          <div className="left mt20">
            <div className="f14">
              Copyright © 2019 by{" "}
              <a href="/" className="st-link">
                didauday.me
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
