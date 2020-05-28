import React, { Component } from 'react';
import moment from 'moment';
export default class Item extends Component {
  showItem = (item) => {
    if (item.type === "tour") {
      return (
        <>
          <div className="service-section">
            <div className="service-left">
              <h4 className="title">
                <a href="https://mixmap.travelerwp.com/st_tour/10-days-of-vacation-in-florence-resorts/">
                  {this.props.item.name}
                </a>
              </h4>
            </div>
            <div className="service-right">
              <img
                width={110}
                height={110}
                src={`http://localhost:8001/${this.props.item.image}`}
                className="img-responsive wp-post-image"
                alt="WordPress Booking Theme"
                sizes="(max-width: 110px) 100vw, 110px"
              />{" "}
            </div>
          </div>
          <div className="info-section">
            <ul>
              <li>
                <span className="label">Type </span>
                <span className="value">{this.props.item.type}</span>
              </li>
              <li>
                <span className="label">Departure date</span>
                <span className="value">
                  {"  "}{moment(this.props.item.departure_day).format('DD/MM/YYYY')}
                </span>
              </li>
              <li>
                <span className="label">Price:  </span>
                <span className="value">{this.props.item.price}$</span>
              </li>
              {/*Add Info*/}
              <li className="ad-info">
                <ul>
                  <li>
                    <span className="label">Number of Adult</span>
                    <span className="value">1</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </>
      )
    }
    if (item.type === "room") {
      return (
        <>
          <div className="service-section">
            <div className="service-left">
              <h4 className="title">
                <a href="https://mixmap.travelerwp.com/st_tour/10-days-of-vacation-in-florence-resorts/">
                  {this.props.item.name}
                </a>
              </h4>
            </div>
            <div className="service-right">
              <img
                width={110}
                height={110}
                src={`http://localhost:8001/${this.props.item.image}`}
                className="img-responsive wp-post-image"
                alt="WordPress Booking Theme"
                sizes="(max-width: 110px) 100vw, 110px"
              />{" "}
            </div>
          </div>
          <div className="info-section">
            <ul>
              <li>
                <span className="label">Type </span>
                <span className="value">{this.props.item.type}</span>
              </li>
              <li>
                <span className="label">Checkin</span>
                <span className="value">
                  {" "} {this.props.item.checkin}
                </span>
              </li>
              <li>
                <span className="label">Checkout</span>
                <span className="value"> {" "}{this.props.item.checkout}</span>
              </li>
              <li>
                <span className="label">Price:  </span>
                <span className="value">{this.props.item.price}$</span>
              </li>
              {/*Add Info*/}
              <li className="ad-info">
                <ul>
                  <li>
                    <span className="label">Number of Adult</span>
                    <span className="value">1</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </>
      )
    }
    if (item.type === "flight") {
      return (
        <>
          <div className="service-section">
            <div className="service-left">
              <h4 className="title">
                <a href="https://mixmap.travelerwp.com/st_tour/10-days-of-vacation-in-florence-resorts/">
                  {this.props.item.name}
                </a>
              </h4>
            </div>
          </div>
          <div className="info-section">
            <ul>
              <li>
                <span className="label">Type </span>
                <span className="value">{this.props.item.type}</span>
              </li>
              <li>
                <span className="label">Price:  </span>
                <span className="value">{this.props.item.price}$</span>
              </li>
              {/*Add Info*/}
              <li className="ad-info">
                <ul>
                  <li>
                    <span className="label">Number of Adult</span>
                    <span className="value">1</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </>
      )
    }
  }
  render() {
    return (
      <>
      {
        this.showItem(this.props.item)
      }
      </>
    )
  }
}
