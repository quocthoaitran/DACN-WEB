import React, { Component } from 'react';
import { Row, Col, Button, message } from 'antd';
import './searchflight.css';
import { withRouter } from 'react-router-dom'

const brands = {
	"VN": '/images/img_brand_vn.png',
	"VJ": '/images/img_brand_vj.png',
	"BL": '/images/img_brand_jt.png'
}

class ListFlightItem extends Component {

	showDate = (date) => {
		const data = date.split("T");
		return data[0];
	}

	handleClick = (e) => {
		e.preventDefault();
		if (this.props.userInfo == null) {
			return message.error(<span className="didauday-error-input">Please login to book a item</span>);
		}
		const data = {
			type: "flight",
			id: this.props.flight._id,
			name: `${this.props.flight.start_location.acronym} -> ${this.props.flight.end_location.acronym}`,
			price: this.props.flight.price,
			quantity: 1,
		}
		this.props.bookingFlight(data);
		this.props.history.push("/checkout");
	}

	render() {
		return (
			<div className="box-ticket">
				<div className="info-ticket">
					<Row>
						<Col span={5} lg={5} md={6} sm={6} xs={6}>
							<div className="travel-agent" style = {{ marginLeft: 20 }}>
								<div className="_3dU_O _2-YBj">
									<div className="_2HE-b">
                    <div className="_3SBTy _3gn1_" style = {{ display: 'block' }}>
                      <span className="_1KrnW jjGhl _2i_vU">{ this.props.flight.provider.name } </span>
										</div>
										<img className="_1zoV1 _3gn1_" src={brands[this.props.flight.provider.acronym]} alt="image_flight" />
									</div>
								</div>
							</div>
						</Col>
						<div className="time-info-ticket-flight">
							<Col span={5} lg={5} md={6} sm={6} xs={6}>
								<div className="time-start-flight">
									<span className="content-flight-main">{`${this.props.flight.time_start.hour}:${this.props.flight.time_start.minute}`}</span>
									<span className="content-flight-sub">{this.showDate(this.props.flight.date_start)}</span>
									<span className="content-flight-sub">{this.props.flight.start_location.name}</span>
								</div>
							</Col>
							<Col span={5} lg={5} md={6} sm={6} xs={6}>
								<div className="time-start-flight">
									<span className="content-flight-main">{`${this.props.flight.time_end.hour}:${this.props.flight.time_end.minute}`}</span>
									<span className="content-flight-sub">{this.showDate(this.props.flight.date_end)}</span>
									<span className="content-flight-sub">{this.props.flight.end_location.name}</span>
								</div>
							</Col>
							<Col span={5} lg={5} md={6} sm={6} xs={6}>
								<div className="time-start-flight">
									<span className="content-flight-main">Calculating</span>
									<span className="content-flight-sub">direct</span>
								</div>
							</Col>
							<Col span={4} lg={4} md={10} sm={10} xs={10}>
								<div className="time-start-flight">
									<span className="content-flight-price">{`${this.props.flight.price}$`}</span>
									<Button className="content-flight-choose" onClick={this.handleClick}>Book Now</Button>
								</div>
							</Col>
						</div>
					</Row>
				</div>
			</div>
		);
	}
}

export default withRouter(ListFlightItem);