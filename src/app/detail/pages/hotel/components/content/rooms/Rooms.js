import React, { Component } from "react";
import RoomItem from "./RoomItem";
import { Empty } from 'antd';
import RoomItemContainer from "../../../containers/RoomItemContainer";


export default class RoomList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      availableRooms: null,
    }
  }
  

  showRooms = (rooms) => {
    if (rooms && rooms.length > 0) {
      return rooms.map(room => {
        return <RoomItemContainer
          key = {room._id}
          room = {room}
        />
      })
    }
    return (
      <Empty
        image="/images/icons/ic_face_sad.png"
        imageStyle={{
          height: 60,
        }}
        description={
          <h4>
            Don't have room available
          </h4>
        }
      >
      </Empty>
    );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('dfdfdffd');
    if(nextProps.availableRooms && nextProps.availableRooms.length != prevState.availableRooms.length) {
      console.log("available");
      return {
        availableRooms: nextProps.availableRooms
      }
    }
  }

  render() {
    console.log(this.props.availableRooms);
    return (
      <>
        <h2 className="st-heading-section">
          Rooms{" "}
          <a
            href="#"
            className="pull-right toggle-section"
            data-target="st-list-rooms"
          >
            <i className="fa fa-angle-up" />
          </a>
        </h2>
        <div
          className="st-list-rooms relative stoped-scroll-section"
          data-toggle-section="st-list-rooms"
        >
          <div className="loader-wrapper">
            <div className="st-loader" />
          </div>
          <div className="fetch">
            {this.showRooms(this.props.availableRooms || this.props.rooms)}
          </div>
        </div>
      </>
    );
  }
}
