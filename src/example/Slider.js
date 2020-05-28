import React from "react";
import Slider from "react-slick";

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    return (
      <div className="st-hotel-result services-grid">
            <div className="st-service-slider">
            <Slider {...settings}>
        <div>
          <div className="item has-matchHeight">
            <div className="featured-image">
              <a href="st_hotel/best-western-plus/">
                <img
                  src="images/2014/12/131385615-450x417.jpg"
                  alt="image"
                  className="img-responsive img-full"
                />
              </a>
              <div className="st-stars ">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
            <h4 className="title">
              <a
                href="st_hotel/best-western-plus/"
                className="st-link c-main"
              >
                Best Western Plus
                    </a>
            </h4>
            <div className="sub-title">
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
                      <g
                        id="pin-1"
                        transform="translate(-0.000000, 0.000000)"
                      >
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
              Ohio, USA
                  </div>
            <div className="section-footer">
              <div className="reviews">
                <span className="rate">3.8 /5 Very Good </span>
                <span className="summary">2 Reviews </span>
              </div>
              <div className="price-wrapper">
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
                from <span className="price">€252,00</span>
                <span className="unit">/night</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="item has-matchHeight">
            <div className="featured-image">
              <a href="st_hotel/dylan-hotel/">
                <img
                  src="images/2014/12/60337007-450x417.jpg"
                  alt="image"
                  className="img-responsive img-full"
                />
              </a>
              <div className="st-stars ">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
            <h4 className="title">
              <a href="st_hotel/dylan-hotel/" className="st-link c-main">
                Dylan Hotel
                    </a>
            </h4>
            <div className="sub-title">
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
                      <g
                        id="pin-1"
                        transform="translate(-0.000000, 0.000000)"
                      >
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
              New York City, NY, USA
                  </div>
            <div className="section-footer">
              <div className="reviews">
                <span className="rate">3.4 /5 Very Good </span>
                <span className="summary">2 Reviews </span>
              </div>
              <div className="price-wrapper">
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
                from <span className="price">€273,00</span>
                <span className="unit">/night</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="item has-matchHeight">
            <div className="featured-image">
              <a href="st_hotel/edwardian-kenilworth/">
                <img
                  src="images/2014/12/137313636-450x417.jpg"
                  alt="image"
                  className="img-responsive img-full"
                />
              </a>
              <div className="st-stars ">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
            <h4 className="title">
              <a
                href="st_hotel/edwardian-kenilworth/"
                className="st-link c-main"
              >
                Edwardian Kenilworth
                    </a>
            </h4>
            <div className="sub-title">
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
                      <g
                        id="pin-1"
                        transform="translate(-0.000000, 0.000000)"
                      >
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
              Virginia Beach, VA, USA
                  </div>
            <div className="section-footer">
              <div className="reviews">
                <span className="rate">2.9 /5 Average </span>
                <span className="summary">2 Reviews </span>
              </div>
              <div className="price-wrapper">
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
                from <span className="price">€128,00</span>
                <span className="unit">/night</span>
              </div>
            </div>
          </div>
        </div>
        <div>
                <div className="item has-matchHeight">
                  <div className="featured-image">
                    <a href="st_hotel/best-western-plus/">
                      <img
                        src="images/2014/12/131385615-450x417.jpg"
                        alt="image"
                        className="img-responsive img-full"
                      />
                    </a>
                    <div className="st-stars ">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <h4 className="title">
                    <a
                      href="st_hotel/best-western-plus/"
                      className="st-link c-main"
                    >
                      Best Western Plus
                    </a>
                  </h4>
                  <div className="sub-title">
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
                            <g
                              id="pin-1"
                              transform="translate(-0.000000, 0.000000)"
                            >
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
                    Ohio, USA
                  </div>
                  <div className="section-footer">
                    <div className="reviews">
                      <span className="rate">3.8 /5 Very Good </span>
                      <span className="summary">2 Reviews </span>
                    </div>
                    <div className="price-wrapper">
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
                      from <span className="price">€252,00</span>
                      <span className="unit">/night</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="item has-matchHeight">
                  <div className="featured-image">
                    <a href="st_hotel/dylan-hotel/">
                      <img
                        src="images/2014/12/60337007-450x417.jpg"
                        alt="image"
                        className="img-responsive img-full"
                      />
                    </a>
                    <div className="st-stars ">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="st_hotel/dylan-hotel/" className="st-link c-main">
                      Dylan Hotel
                    </a>
                  </h4>
                  <div className="sub-title">
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
                            <g
                              id="pin-1"
                              transform="translate(-0.000000, 0.000000)"
                            >
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
                    New York City, NY, USA
                  </div>
                  <div className="section-footer">
                    <div className="reviews">
                      <span className="rate">3.4 /5 Very Good </span>
                      <span className="summary">2 Reviews </span>
                    </div>
                    <div className="price-wrapper">
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
                      from <span className="price">€273,00</span>
                      <span className="unit">/night</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="item has-matchHeight">
                  <div className="featured-image">
                    <a href="st_hotel/edwardian-kenilworth/">
                      <img
                        src="images/2014/12/137313636-450x417.jpg"
                        alt="image"
                        className="img-responsive img-full"
                      />
                    </a>
                    <div className="st-stars ">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <h4 className="title">
                    <a
                      href="st_hotel/edwardian-kenilworth/"
                      className="st-link c-main"
                    >
                      Edwardian Kenilworth
                    </a>
                  </h4>
                  <div className="sub-title">
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
                            <g
                              id="pin-1"
                              transform="translate(-0.000000, 0.000000)"
                            >
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
                    Virginia Beach, VA, USA
                  </div>
                  <div className="section-footer">
                    <div className="reviews">
                      <span className="rate">2.9 /5 Average </span>
                      <span className="summary">2 Reviews </span>
                    </div>
                    <div className="price-wrapper">
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
                      from <span className="price">€128,00</span>
                      <span className="unit">/night</span>
                    </div>
                  </div>
                </div>
              </div>

      </Slider>

            </div>
      </div>
    );
  }
}