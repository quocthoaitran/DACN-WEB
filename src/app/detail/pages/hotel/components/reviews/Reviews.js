import React, { Component } from "react";
import { Empty, Rate, message } from 'antd';

import ReviewItem from './ReviewItem';
export default class Reviews extends Component {
  state = {
    hotelId: this.props.id,
    rating: 2,
    title: '',
    comment: '',
    errors: null,
    hasError: false,
  }

  componentDidMount() {
    this.props.getReviewsOfHotelAPI(this.state.hotelId);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.id !== prevState.hotelId) {
      nextProps.getReviewsOfHotelAPI(nextProps.id);
      return {
        hotelId: nextProps.id,
      }
    }
    if (nextProps.errors !== prevState.errors){
      return { errors: nextProps.errors, hasError: true };
    }
    return null;
  }


  roundRate = rate => {
    let tmp = rate - parseInt(rate);
    tmp = tmp * 2;
    if (tmp >= 1.5) return parseInt(rate) + 1;
    else {
      if (tmp >= 0.5) return parseInt(rate) + 0.5;
    }
    return parseInt(rate);
  };

  showReviews = (reviews) => {
    console.log(reviews);
    if (reviews && reviews.length > 0) {
      return reviews.map(review => {
        if(review) {
          return (
            <ReviewItem
              key={review._id}
              review={review}
            />
          );
        }
        
      });
    }
    return (
      <Empty
        imageStyle={{
          height: 60,
        }}
        description={
          <h4>
            No review yet
          </h4>
        }
      >
      </Empty>
    )
  }

  onChangeRating = (value) => {
    this.setState({
      rating: value,
      hasError: false
    });
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name] : value,
      hasError: false
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if( this.state.title == "" ||this.state.comment == "") {
      return message.error(<div className="didauday-error-input">All fields are required</div>)
    }
    if( this.props.token && this.props.token.length > 0) {
      console.log(this.state)
      const data = {
        title: this.state.title,
        content: this.state.comment,
        rate_star: this.state.rating,
      }
      console.log(data);
      this.props.createReviewHotelAPI(this.state.hotelId, data);
    } else {
      return message.error(<div className="didauday-error-input">Please login to review</div>)
    }

  }

  render() {
    console.log(this.props)
    return (
      <>
        {
          this.state.hasError && this.state.errors && message.error(<span className="didauday-error-input">{this.state.errors.error}</span>)
        }
        <h2 className="st-heading-section">
          Reviews{" "}
          <a
            className="pull-right toggle-section"
            data-target="st-reviews"
          >
            <i className="fa fa-angle-up" />
          </a>
        </h2>
        <div id="reviews" data-toggle-section="st-reviews">
          <div className="row">
            <div className="col-xs-12">
              <div className="review-box has-matchHeight">
                <h2 className="heading">Review score</h2>
                <div className="review-box-score">
                  <div className="review-score">
                    {this.roundRate(this.props.rate) || 0}<span className="per-total">/5</span>
                  </div>
                  <div className="review-score-text">Excellent</div>
                  <div className="review-score-base">
                    Based on <span>{this.props.num_review} reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-pagination">
            <div id="reviews" className="review-list">
              {this.showReviews(this.props.reviews)}
            </div>
          </div>
          <div id="write-review">
            <h4 className="heading">
              <a
                href
                className="toggle-section c-main f16"
                data-target="st-review-form"
              >
                Write a review <i className="fa fa-angle-down ml5" />
              </a>
            </h4>
            <div
              id="respond"
              className="comment-respond"
              data-toggle-section="st-review-form"
              style={{ display: "none" }}
            >
              <form
                action="wp-comments-post.php?wpe-comment-post=mixmap"
                method="post"
                id="commentform"
                className="review-form"
                noValidate
                onSubmit = {this.handleSubmit}
              >
                <div className="form-wrapper">
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          placeholder="Title"
                          onChange = {this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-md-4 col-md-push-8">
                      <div className="form-group review-items has-matchHeight">
                        <div className="item">
                          <label>Rating</label>
                          <Rate defaultValue={2.5} onChange={this.onChangeRating}/>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-8 col-md-pull-4">
                      <div className="form-group">
                        <textarea
                          name="comment"
                          className="form-control has-matchHeight"
                          placeholder="Content"
                          defaultValue={""}
                          onChange = {this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <input
                    type="hidden"
                    id="comment_post_ID"
                    name="comment_post_ID"
                    defaultValue={6556}
                  />
                  <input
                    type="hidden"
                    id="comment_parent"
                    name="comment_parent"
                    defaultValue={0}
                  />
                  <input
                    id="submit"
                    type="submit"
                    name="submit"
                    className="btn btn-green upper font-medium"
                    defaultValue="Leave a Review"
                  />
                </div>
              </form>
            </div>
            {/* #respond */}
          </div>
        </div>
      </>
    );
  }
}
