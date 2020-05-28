import React, { Component } from "react";
import Gallery from "./gallery/Gallery";
import Description from "./description/Description";
import Facilities from './facilities/Facilities';
import Rules from "./rules/Rules";
import Rooms from "./rooms/Rooms";
import ReviewsContainer from "../reviews/ReviewsContainer";
import WidgetRight from "../widget/widget-right/WidgetRight";

export default class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      availableRooms: null
    }
  }

  checkRoomAvailable = (rooms) => {
    this.setState({
      availableRooms: rooms
    });
  }

  render() {
    return (
      <>
        <div className="col-xs-12 col-md-9">
          <Gallery images = { this.props.images }/>
          <div className="st-hr" />
          <Description description = { this.props.description } />
          <div className="st-hr large" />
          <Facilities facilities = { this.props.facilities }/>
          <div className="st-hr large" />
          <Rules rules = { this.props.rules }/>
          <div className="st-hr large" />
          <Rooms rooms = { this.props.rooms }/>
          <div className="st-hr large" />
          <ReviewsContainer 
            rate = {this.props.rate}
            num_review = {this.props.num_review}
            id = {this.props.id}
          />
        </div>
        <div className="col-xs-12 col-md-3">
          <WidgetRight
            price = { this.props.price }
            owner = { this.props.owner }
            checkRoomAvailable = {this.checkRoomAvailable}
            id = {this.props.id}
          />
        </div>
      </>
    );
  }
}
