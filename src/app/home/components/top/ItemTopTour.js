import React from "react";
import { NavLink } from "react-router-dom";

import * as config from "../../../../constants/config";

const ItemTopTour = props => {
  const roundRate = rate => {
    let tmp = rate - parseInt(rate);
    tmp = tmp * 2;
    if (tmp >= 1.5) return parseInt(rate) + 1;
    else {
      if (tmp >= 0.5) return parseInt(rate) + 0.5;
    }
    return parseInt(rate);
  };

  const rating = rate => {
    let num = roundRate(rate);
    const arrRating = [];
    for (let i = 0; i < 5; i++) {
      if (num > 0.5)
        arrRating.push(
          <li key={i}>
            <i className="fa  fa-star" />
          </li>
        );
      else if (num == 0.5)
        arrRating.push(
          <li key={i}>
            <i className="fa  fa-star-half-o" />
          </li>
        );
      else
        arrRating.push(
          <li key={i}>
            <i className="fa  fa-star-o" />
          </li>
        );
      num--;
    }
    return arrRating;
  };

  const transformUrl = (name, id) => {
    return name.toLowerCase().trim().replace(/\s+/g, "-") + "-" + id;
  };

  return (
    <NavLink to = {`/tours/${transformUrl(props.tour.name, props.tour._id)}`}>
      <div className="item-service grid-item has-matchHeight">
        <div className="service-border">
          <div className="thumb">
            <a
              href="#"
              className="login"
              data-toggle="modal"
              data-target="#st-login-form"
            >
              <div className="service-add-wishlist" title="Add to wishlist">
                <i className="fa fa-heart" />
                <div className="lds-dual-ring" />
              </div>
            </a>
            <a href="#"> 
              <img
                width={680}
                height={500}
                src={`${config.Url}/${props.tour.images[0]}`}
                className="img-responsive wp-post-image"
                alt="WordPress Booking Theme"
              />
            </a>
          </div>
          <p className="service-location plr15">
            <i className="input-icon field-icon fa">
              <svg
                height="15px"
                width="15px"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                <title>Ico_maps</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g
                  id="Ico_maps"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    id="Group"
                    transform="translate(4.000000, 0.000000)"
                    stroke="#666666"
                  >
                    <g id="pin-1" transform="translate(-0.000000, 0.000000)">
                      <path
                        d="M15.75,8.25 C15.75,12.471 12.817,14.899 10.619,17.25 C9.303,18.658 8.25,23.25 8.25,23.25 C8.25,23.25 7.2,18.661 5.887,17.257 C3.687,14.907 0.75,12.475 0.75,8.25 C0.75,4.10786438 4.10786438,0.75 8.25,0.75 C12.3921356,0.75 15.75,4.10786438 15.75,8.25 Z"
                        id="Shape"
                      />
                      <circle id="Oval" cx="8.25" cy="8.25" r={3} />
                    </g>
                  </g>
                </g>
              </svg>
            </i>
            {`${props.tour.city.name}, ${props.tour.city.country}`}
          </p>
          <h4 className="service-title plr15">
            <a>
              {props.tour.name}
            </a>
          </h4>
          <div className="service-review plr15">
            <ul className="icon-group text-color booking-item-rating-stars">
              {rating(props.tour.rate)}
            </ul>
            <span className="review">{`${props.tour.num_review} Reviews`}</span>
          </div>
          <div className="section-footer">
            <div className="footer-inner plr15">
              <div className="service-duration">
                <i className="input-icon field-icon fa">
                  <svg
                    height="16px"
                    width="16px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                    style={{
                      enableBackground: "new 0 0 24 24"
                    }}
                    xmlSpace="preserve"
                  >
                    <title>time-clock-circle-1</title>
                    <g fill="#5E6D77">
                      <path
                        d="M12,23.25C5.797,23.25,0.75,18.203,0.75,12C0.75,5.797,5.797,0.75,12,0.75c6.203,0,11.25,5.047,11.25,11.25
  C23.25,18.203,18.203,23.25,12,23.25z M12,2.25c-5.376,0-9.75,4.374-9.75,9.75s4.374,9.75,9.75,9.75s9.75-4.374,9.75-9.75
  S17.376,2.25,12,2.25z"
                      >
                        <path
                          d="M15.75,16.5c-0.2,0-0.389-0.078-0.53-0.22l-2.25-2.25c-0.302,0.145-0.632,0.22-0.969,0.22c-1.241,0-2.25-1.009-2.25-2.25
  c0-0.96,0.615-1.808,1.5-2.121V5.25c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v4.629c0.885,0.314,1.5,1.162,1.5,2.121
  c0,0.338-0.075,0.668-0.22,0.969l2.25,2.25c0.292,0.292,0.292,0.768,0,1.061C16.139,16.422,15.95,16.5,15.75,16.5z M12,11.25
  c-0.414,0-0.75,0.336-0.75,0.75s0.336,0.75,0.75,0.75s0.75-0.336,0.75-0.75S12.414,11.25,12,11.25z"
                        />
                      </path>
                    </g>
                  </svg>
                </i>{" "}
                {props.tour.duration}{" "}
              </div>

              <div className="service-price">
                <span>
                  <i className="input-icon field-icon fa">
                    <svg
                      height="16px"
                      width="10px"
                      viewBox="0 0 11 18"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                      <title>thunder</title>
                      <desc>Created with Sketch.</desc>
                      <defs />
                      <g
                        id="Hotel-layout"
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Room_Only_Detail_1"
                          transform="translate(-135.000000, -4858.000000)"
                          fill="#ffab53"
                          fillRule="nonzero"
                        >
                          <g
                            id="nearby-hotel"
                            transform="translate(130.000000, 4334.000000)"
                          >
                            <g
                              id="h1-g"
                              transform="translate(5.000000, 136.000000)"
                            >
                              <g id="hotel-grid">
                                <g
                                  id="price"
                                  transform="translate(0.000000, 383.000000)"
                                >
                                  <g
                                    id="thunder"
                                    transform="translate(0.000000, 5.000000)"
                                  >
                                    <path
                                      d="M10.0143234,6.99308716 C9.91102517,6.83252576 9.73362166,6.73708716 9.54386728,6.73708716 L5.61404272,6.73708716 L5.61404272,0.561648567 C5.61404272,0.296666111 5.42877956,0.0676134793 5.16941114,0.0125959355 C4.90555149,-0.0435444154 4.64730587,0.0923152337 4.5395164,0.333718743 L0.0482883306,10.4389819 C-0.0291853536,10.6118942 -0.0123432484,10.8139994 0.0909549973,10.9723152 C0.194253243,11.1317538 0.371656752,11.2283152 0.561411138,11.2283152 L4.4912357,11.2283152 L4.4912357,17.4037538 C4.4912357,17.6687363 4.67649886,17.8977889 4.93586728,17.9528065 C4.97516552,17.9606661 5.01446377,17.9651573 5.05263921,17.9651573 C5.27046377,17.9651573 5.47369184,17.8382801 5.56576201,17.6316837 L10.0569901,7.5264205 C10.133341,7.35238541 10.1187445,7.15252576 10.0143234,6.99308716 Z"
                                      id="Shape"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </i>{" "}
                  <span className="fr_text">from</span>
                </span>
                <span className="price">
                  <span className="text-lg lh1em item ">
                    €{props.tour.price}
                  </span>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
export default ItemTopTour;
