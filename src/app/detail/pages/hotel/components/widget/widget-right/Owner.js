import React, { Component } from "react";
import moment from 'moment';

export default class Owner extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="owner-info widget-box">
          <h4 className="heading">Owner</h4>
          <div className="media">
            <div className="media-left">
              <a href="author/travelhotel/">
                <img
                  alt="avatar"
                  width={60}
                  height={60}
                  src= {`http://localhost:8001/${this.props.owner ? this.props.owner.avatar : 'uploads/img_avatar_placeholder.png'}`}
                  className="avatar avatar-96 photo origin round"
                />{" "}
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <a className="author-link">
                  { this.props.owner ? `${this.props.owner.firstname} ${this.props.owner.lastname}` : 'full name' }
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
