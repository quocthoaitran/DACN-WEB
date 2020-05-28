import React, { Component } from "react";
import moment from 'moment';

export default class ReviewItem extends Component {
  render() {
    return (
      <div className="comment-item">
        <div className="comment-item-head">
          <div className="media">
            <div className="media-left">
              <img
c
                src= { `http://localhost:8001/${this.props.review.reviewer.avatar}` }
                className="avatar avatar-50 photo"
                height={50}
                width={50}
              />{" "}
            </div>
            <div className="media-body">
              <h4 className="media-heading">{ `${this.props.review.reviewer.firstname} ${this.props.review.reviewer.lastname}` }</h4>
              <div className="date">{ moment(this.props.review.createdAt).format('DD/MM/YYYY') }</div>
            </div>
          </div>
        </div>
        <div className="comment-item-body">
          <h4 className="title">
            <span className="comment-rate">{`${ this.props.review.rate_star }.0`}</span> { this.props.review.title }
          </h4>
          <div className="detail">
            <div className="st-description" data-show-all="st-description-179">
            { this.props.review.content }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
