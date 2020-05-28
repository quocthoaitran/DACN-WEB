import React, { Component } from "react";
import moment from 'moment';
import { Rate } from 'antd';

export default class ReviewItem extends Component {

  roundRate = rate => {
    let tmp = rate - parseInt(rate);
    tmp = tmp * 2;
    if (tmp >= 1.5) return parseInt(rate) + 1;
    else {
      if (tmp >= 0.5) return parseInt(rate) + 0.5;
    }
    return parseInt(rate);
  };

  render() {
    return (
      <div className="comment-item">
        <div className="comment-item-head">
          <div className="media">
            <div className="media-left">
              <img
                alt="Avatar reviewer"
                src= { `http://localhost:8001/${this.props.review.reviewer.avatar}` }
                className="avatar avatar-50 photo avatar-default"
                height={50}
                width={50}
              />{" "}
            </div>
            <div className="media-body">
              <h4 className="media-heading">{ this.props.review ? `${this.props.review.reviewer.firstname} ${this.props.review.reviewer.lastname}` : 'full name' }</h4>
              <div className="date">{ moment(this.props.review.createdAt).format('DD/MM/YYYY') }</div>
            </div>
          </div>
        </div>
        <div className="comment-item-body">
          <h4 className="title st_tours">{ this.props.review.title }</h4>
          <Rate
            disabled
            value={this.roundRate(this.props.review.rate_star) || 0}
            style={{ fontSize: 15 }}
          />
          <div className="detail">
            <div className="st-description" data-show-all="st-description-233">
              { this.props.review.content }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
