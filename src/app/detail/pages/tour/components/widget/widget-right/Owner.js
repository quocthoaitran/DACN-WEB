import React, { Component } from "react";
import moment from 'moment';
export default class Owner extends Component {
  render() {
    return (
      <>
        <div className="owner-info widget-box">
          <h4 className="heading">Organized by</h4>
          <div className="media">
            <div className="media-left">
              <a href="author/travelhotel/">
                <img
                  alt="avatar"
                  width={60}
                  height={60}
                  src="/images/bfi_thumb/people_8-1-37yw9ynws0j5ruttqepfcw.jpg"
                  className="avatar avatar-96 photo origin round"
                />{" "}
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <a className="author-link">
                  { `${ this.props.owner && this.props.owner.firstname } ${ this.props.owner && this.props.owner.lastname }` || 'full name' }
                </a>
              </h4>
              <p>Member since { this.props.owner ? moment(this.props.owner.createdAt).fromNow() : 'year' }</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
