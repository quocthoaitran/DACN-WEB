import React, { Component } from "react";
import { message } from "antd";
import { withRouter } from 'react-router-dom'

class RoomItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInOutRoom : null,
    }
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.checkInOutRoom !== prevState.checkInOutRoom) {
      return {
        checkInOutRoom: nextProps.checkInOutRoom,
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.userInfo == null) {
      return message.error(<span className="didauday-error-input">Please login to book a item</span>);
    }
    if (this.state.checkInOutRoom == null) {
      return message.error(<span className="didauday-error-input">Please choose date checkin and checkout and check room available</span>);
    }
    if (this.props.userInfo.role == 2) {
      const data = {
        type: "room",
        id: this.props.room._id,
        name: this.props.room.name,
        image: this.props.room.images[0],
        checkin: this.state.checkInOutRoom.checkin,
        checkout: this.state.checkInOutRoom.checkout,
        price: this.props.room.price,
        quantity: 1,

      }
      console.log(data)
      this.props.bookingRoom(data);
      this.props.history.push("/checkout");
    } else {
      message.error(<span className="didauday-error-input">You must be member to can book a item</span>);
    }

  }

  render() {
    return (
      <div className="item">
        <form className="form-booking-inpage" method="POST">
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className="image">
                <img
                  src={`http://localhost:8001/${this.props.room.images[0]}`}
                  alt
                  className="img-responsive img-full"
                />
              </div>
            </div>
            <div className="col-xs-12 col-md-8">
              <h2 className="heading">
                <a
                  href="hotel_room/room-kerama-islands-2/"
                  className="st-link c-main"
                >
                  {this.props.room.name}
                </a>
              </h2>
              <div className="row">
                <div className="col-xs-12 col-md-8">
                  <div className="facilities">
                    <p
                      className="item"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Room Footage"
                    >
                      <i className="input-icon field-icon fa">
                        <svg
                          height="24px"
                          width="24px"
                          viewBox="0 0 23 23"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                          <title>ico_square</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Hotel-layout"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <g
                              id="Detail_Hotel_mobile"
                              transform="translate(-64.000000, -2258.000000)"
                              stroke="#768090"
                            >
                              <g
                                id="room"
                                transform="translate(25.000000, 1810.000000)"
                              >
                                <g
                                  id={1}
                                  transform="translate(0.000000, 101.000000)"
                                >
                                  <g
                                    id="Group-3"
                                    transform="translate(30.000000, 339.000000)"
                                  >
                                    <g id="Group">
                                      <g
                                        id="ico_square"
                                        transform="translate(9.000000, 8.000000)"
                                      >
                                        <g id="Regular">
                                          <path
                                            d="M2.25,22.32 L2.25,7.2"
                                            id="Shape"
                                          />
                                          <polyline
                                            id="Shape"
                                            points="0 20.16 2.25 22.32 4.5 20.16"
                                          />
                                          <polyline
                                            id="Shape"
                                            points="4.5 9.36 2.25 7.2 0 9.36"
                                          />
                                          <path
                                            d="M6.75,2.88 L22.5,2.88"
                                            id="Shape"
                                          />
                                          <polyline
                                            id="Shape"
                                            points="9 0.72 6.75 2.88 9 5.04"
                                          />
                                          <polyline
                                            id="Shape"
                                            points="20.25 5.04 22.5 2.88 20.25 0.72"
                                          />
                                          <path
                                            d="M9.5,14.4 L15.25,14.4 C15.5261424,14.4 15.75,14.6149033 15.75,14.88 L15.75,22.32 L9,22.32 L9,14.88 C9,14.6149033 9.22385763,14.4 9.5,14.4 Z"
                                            id="Shape"
                                          />
                                          <path
                                            d="M15.75,22.32 L21,22.32 L21,9.36 C21,8.96235498 20.6642136,8.64 20.25,8.64 L13.5,8.64 C13.0857864,8.64 12.75,8.96235498 12.75,9.36 L12.75,14.4"
                                            id="Shape"
                                          />
                                          <path
                                            d="M9,22.32 L7.5,22.32"
                                            id="Shape"
                                          />
                                          <path
                                            d="M22.5,22.32 L21,22.32"
                                            id="Shape"
                                          />
                                          <path
                                            d="M12.75,17.28 L15.75,17.28"
                                            id="Shape"
                                          />
                                          <path
                                            d="M18.75,11.52 L21,11.52"
                                            id="Shape"
                                          />
                                          <path
                                            d="M18.75,14.4 L21,14.4"
                                            id="Shape"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </i>
                      <br />
                      <span>
                        {this.props.room.square} m<sup>2</sup>
                      </span>
                    </p>
                    <p
                      className="item"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="No. Beds"
                    >
                      <i className="input-icon field-icon fa">
                        <svg
                          height="24px"
                          width="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                          <title>ico_beds</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Hotel-layout"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <g
                              id="Detail_Hotel_mobile"
                              transform="translate(-123.000000, -2258.000000)"
                              stroke="#768090"
                            >
                              <g
                                id="room"
                                transform="translate(25.000000, 1810.000000)"
                              >
                                <g
                                  id={1}
                                  transform="translate(0.000000, 101.000000)"
                                >
                                  <g
                                    id="Group-3"
                                    transform="translate(30.000000, 339.000000)"
                                  >
                                    <g
                                      id="Group"
                                      transform="translate(60.000000, 0.000000)"
                                    >
                                      <g
                                        id="ico_beds"
                                        transform="translate(8.000000, 8.000000)"
                                      >
                                        <g id="hotel-double-bed-2">
                                          <polyline
                                            id="Shape"
                                            points="19.473 4.5 21.5 4.5 23.5 16.5 0.5 16.5 2.5 4.5 4.778 4.5"
                                          />
                                          <path
                                            d="M23.5,16.5 L23.5,21 C23.5,21.8284271 22.8284271,22.5 22,22.5 L2,22.5 C1.17157288,22.5 0.5,21.8284271 0.5,21 L0.5,16.5"
                                            id="Shape"
                                          />
                                          <path
                                            d="M1.833,8.5 L22.167,8.5"
                                            id="Shape"
                                          />
                                          <path
                                            d="M10.552,6.01 C10.5465543,6.28222935 10.3242838,6.50005446 10.052,6.5 L5.074,6.5 C4.92852283,6.50139289 4.78965327,6.43935417 4.69362055,6.33006893 C4.59758783,6.2207837 4.55391656,6.07509095 4.574,5.931 L4.852,3.931 C4.88666911,3.68209419 5.10070281,3.49759714 5.352,3.5 L10.094,3.5 C10.2283592,3.49997313 10.3570754,3.55402204 10.4511364,3.64996428 C10.5451975,3.74590653 10.5966872,3.87566769 10.594,4.01 L10.552,6.01 Z"
                                            id="Shape"
                                          />
                                          <path
                                            d="M13.7,6.01 C13.7054457,6.28222935 13.9277162,6.50005446 14.2,6.5 L19.177,6.5 C19.3224772,6.50139289 19.4613467,6.43935417 19.5573794,6.33006893 C19.6534122,6.2207837 19.6970834,6.07509095 19.677,5.931 L19.399,3.931 C19.3643795,3.6824746 19.150918,3.49810206 18.9,3.5 L14.157,3.5 C14.0226408,3.49997313 13.8939246,3.55402204 13.7998636,3.64996428 C13.7058025,3.74590653 13.6543128,3.87566769 13.657,4.01 L13.7,6.01 Z"
                                            id="Shape"
                                          />
                                          <path
                                            d="M2.5,4.5 L2.5,2 C2.5,1.17157288 3.17157288,0.5 4,0.5 L20,0.5 C20.8284271,0.5 21.5,1.17157288 21.5,2 L21.5,4.5"
                                            id="Shape"
                                          />
                                          <path
                                            d="M3.5,22.5 L3.5,23.5"
                                            id="Shape"
                                          />
                                          <path
                                            d="M20.5,22.5 L20.5,23.5"
                                            id="Shape"
                                          />
                                          <path
                                            d="M10.605,4.614 L13.647,4.614"
                                            id="Shape"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </i>
                      <br />
                      <span>x{this.props.room.beds}</span>
                    </p>
                    <p
                      className="item"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="No. Adults"
                    >
                      <i className="input-icon field-icon fa">
                        <svg
                          height="24px"
                          width="24px"
                          viewBox="0 0 26 26"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                          <title>ico_adults</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Hotel-layout"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <g
                              id="Detail_Hotel_mobile"
                              transform="translate(-182.000000, -2257.000000)"
                              stroke="#768090"
                            >
                              <g
                                id="room"
                                transform="translate(25.000000, 1810.000000)"
                              >
                                <g
                                  id={1}
                                  transform="translate(0.000000, 101.000000)"
                                >
                                  <g
                                    id="Group-3"
                                    transform="translate(30.000000, 339.000000)"
                                  >
                                    <g
                                      id="Group"
                                      transform="translate(120.000000, 0.000000)"
                                    >
                                      <g
                                        id="ico_adults"
                                        transform="translate(8.000000, 8.000000)"
                                      >
                                        <g id="Regular">
                                          <circle
                                            id="Oval"
                                            cx="5.6"
                                            cy="3.2"
                                            r="3.2"
                                          />
                                          <path
                                            d="M11.2,13.6 C11.2,10.5072054 8.6927946,8 5.6,8 C2.5072054,8 3.55271368e-16,10.5072054 0,13.6 L0,16 L2.4,16 L3.2,24 L8,24 L8.8,16 L11.2,16 L11.2,13.6 Z"
                                            id="Shape"
                                          />
                                          <path
                                            d="M12.8,19.2 L14.4,19.2 L15.2,24 L20,24 L20.8,19.2 L24,19.2 L21.6,12 C20.8,9.6 19.8090667,8 17.6,8 C16.0812765,8.00148675 14.7301489,8.96474312 14.2336,10.4"
                                            id="Shape"
                                          />
                                          <circle
                                            id="Oval"
                                            cx="17.6"
                                            cy="3.2"
                                            r="3.2"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </i>
                      <br />
                      <span>x{this.props.room.adults}</span>
                    </p>
                    <p
                      className="item"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="No. Children"
                    >
                      <i className="input-icon field-icon fa">
                        <svg
                          height="24px"
                          width="24px"
                          viewBox="0 0 26 25"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                          <title>ico_child</title>
                          <desc>Created with Sketch.</desc>
                          <defs />
                          <g
                            id="Hotel-layout"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <g
                              id="Detail_Hotel_mobile"
                              transform="translate(-242.000000, -2258.000000)"
                              stroke="#768090"
                            >
                              <g
                                id="room"
                                transform="translate(25.000000, 1810.000000)"
                              >
                                <g
                                  id={1}
                                  transform="translate(0.000000, 101.000000)"
                                >
                                  <g
                                    id="Group-3"
                                    transform="translate(30.000000, 339.000000)"
                                  >
                                    <g
                                      id="gruop"
                                      transform="translate(180.000000, 0.000000)"
                                    >
                                      <g
                                        id="ico_child"
                                        transform="translate(8.000000, 8.000000)"
                                      >
                                        <g id="baby-boy">
                                          <path
                                            d="M8.4,12.5333333 C8.6209139,12.5333333 8.8,12.7124194 8.8,12.9333333"
                                            id="Shape"
                                          />
                                          <path
                                            d="M8,12.9333333 C8,12.7124194 8.1790861,12.5333333 8.4,12.5333333"
                                            id="Shape"
                                          />
                                          <path
                                            d="M8.4,13.3333333 C8.1790861,13.3333333 8,13.1542472 8,12.9333333"
                                            id="Shape"
                                          />
                                          <path
                                            d="M8.8,12.9333333 C8.8,13.1542472 8.6209139,13.3333333 8.4,13.3333333"
                                            id="Shape"
                                          />
                                          <path
                                            d="M15.6,12.5333333 C15.8209139,12.5333333 16,12.7124194 16,12.9333333"
                                            id="Shape"
                                          />
                                          <path
                                            d="M15.2,12.9333333 C15.2,12.7124194 15.3790861,12.5333333 15.6,12.5333333"
                                            id="Shape"
                                          />
                                          <path
                                            d="M15.6,13.3333333 C15.3790861,13.3333333 15.2,13.1542472 15.2,12.9333333"
                                            id="Shape"
                                          />
                                          <path
                                            d="M16,12.9333333 C16,13.1542472 15.8209139,13.3333333 15.6,13.3333333"
                                            id="Shape"
                                          />
                                          <path
                                            d="M21.2,11.3333333 L21.1850667,11.3333333 C19.9558975,7.28945159 16.2265632,4.52520552 12,4.52520552 C7.7734368,4.52520552 4.04410253,7.28945159 2.81493333,11.3333333 L2.8,11.3333333 C1.2536027,11.3333333 1.18423789e-16,12.586936 0,14.1333333 C-1.18423789e-16,15.6797306 1.2536027,16.9333333 2.8,16.9333333 L2.81493333,16.9333333 C4.04410253,20.9772151 7.7734368,23.7414611 12,23.7414611 C16.2265632,23.7414611 19.9558975,20.9772151 21.1850667,16.9333333 L21.2,16.9333333 C22.7463973,16.9333333 24,15.6797306 24,14.1333333 C24,12.586936 22.7463973,11.3333333 21.2,11.3333333 Z"
                                            id="Shape"
                                          />
                                          <path
                                            d="M15.5776,18.1333333 C14.6670038,19.1513412 13.3658424,19.7332117 12,19.7332117 C10.6341576,19.7332117 9.33299623,19.1513412 8.4224,18.1333333"
                                            id="Shape"
                                          />
                                          <path
                                            d="M14.6538667,0.533333333 C16.4374519,1.71739481 17.221295,3.93947192 16.5753836,5.98054428 C15.9294721,8.02161665 14.0099719,9.38820208 11.8699112,9.33059866 C9.72985052,9.27299524 7.88664446,7.80513008 7.35146667,5.73226667"
                                            id="Shape"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </i>{" "}
                      <br />
                      <span>x{this.props.room.children}</span>
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-md-4">
                  <div className="price-wrapper">
                    <span className="price">${this.props.room.price} </span>
                    <span className="unit">/1 night</span>
                  </div>
                  <button
                    href="#"
                    className="btn-show-price btn btn-primary upper mt5"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(RoomItem);