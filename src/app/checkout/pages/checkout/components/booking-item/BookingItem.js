import React, { Component } from "react";
import Item from "./Item";

export default class BookingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total_price : 0
    }
  }
  
  showItem = (list) => {
    if( list && list.length > 0) {
      return list.map((item, key) => {
        return <Item item={item} key={key}/>
      })
    }
  }

calTotalPrice = (list) => {
    let total_price = 0;
    if( list && list.length > 0) {
      list.map( list => {
        total_price += list.price
      })
    }
    this.setState({
      total_price: total_price,
    });
  }

  componentDidMount() {
    this.calTotalPrice(this.props.listBooking);
  }
  
  render() {
    console.log(this.props.listBooking);
    console.log(this.state);
    return (
      <>
        <div className="col-lg-4 col-md-4 col-lg-push-8 col-md-push-8">
          <h3 className="title">Your Booking </h3>
          <div className="cart-info" id="cart-info">
            {
              this.showItem(this.props.listBooking)
            }
            <div className="coupon-section">
              <h5>Coupon Code</h5>
              <form
              >
                <div className="form-group">
                  <input
                    id="field-coupon_code"
                    type="text"
                    name="coupon_code"
                  />
                  <button type="submit" className="btn btn-primary">
                    APPLY
                  </button>
                </div>
              </form>
            </div>
            <div className="total-section">
              <ul>
                <li>
                  <span className="label">Total Price </span>
                  <span className="value">{this.state.total_price}$</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
