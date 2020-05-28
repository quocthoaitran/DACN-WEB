import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';

export default class Gallery extends Component {

  showGallery = (images) => {
    if (images && images.length > 0) {
      return images.map((image, key) => {
        return {
          original: `http://localhost:8001/${image}`,
          thumbnail: `http://localhost:8001/${image}`,
        }
      })
    }
    return [];
  }

  render() {
    return (
      <div
        className="st-gallery"
        data-width="100%"
        data-nav="thumbs"
        data-allowfullscreen="true"
      >
        <ImageGallery
          items={this.showGallery(this.props.images)}
          defaultImage = 'http://localhost:8001/uploads/img_placeholder.png'
        />
        <div className="shares dropdown">
          <a href="#" className="share-item social-share">
            <i className="input-icon field-icon fa">
              <svg
                height="20px"
                width="20px"
                viewBox="0 0 18 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
                <title>ico_share</title>
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
                    id="Room_Only_Detail_1"
                    transform="translate(-921.000000, -251.000000)"
                    stroke="#FFFFFF"
                  >
                    <g
                      id="room-detail"
                      transform="translate(0.000000, 211.000000)"
                    >
                      <g id="img">
                        <g
                          id="share"
                          transform="translate(910.000000, 30.000000)"
                        >
                          <g
                            id="ico_share"
                            transform="translate(10.000000, 10.000000)"
                          >
                            <g
                              id="Group"
                              transform="translate(1.666667, 0.000000)"
                            >
                              <g id="share-2" strokeWidth="1.5">
                                <path
                                  d="M16.4583333,4.375 L9.58333333,4.375 C8.20262146,4.375 7.08333333,5.49428813 7.08333333,6.875 L7.08333333,10"
                                  id="Shape"
                                />
                                <polyline
                                  id="Shape"
                                  points="12.7083333 8.125 16.4583333 4.375 12.7083333 0.625"
                                />
                                <path
                                  d="M13.9583333,11.875 L13.9583333,18.125 C13.9583333,18.8153559 13.3986893,19.375 12.7083333,19.375 L1.45833333,19.375 C0.767977396,19.375 0.208333333,18.8153559 0.208333333,18.125 L0.208333333,8.125 C0.208333333,7.43464406 0.767977396,6.875 1.45833333,6.875 L3.33333333,6.875"
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
          </a>
          <ul className="share-wrapper">
            <li>
              <a
                className="facebook"
                href="https://www.facebook.com/sharer/sharer.php?u=st_hotel/hyatt-centric-times-square/&title=Hyatt Centric Times Square"
                target="_blank"
                rel="noopener"
                original-title="Facebook"
              >
                <i className="fa fa-facebook fa-lg" />
              </a>
            </li>
            <li>
              <a
                className="twitter"
                href="https://twitter.com/share?url=st_hotel/hyatt-centric-times-square/&title=Hyatt Centric Times Square"
                target="_blank"
                rel="noopener"
                original-title="Twitter"
              >
                <i className="fa fa-twitter fa-lg" />
              </a>
            </li>
            <li>
              <a
                className="google"
                href="https://plus.google.com/share?url=st_hotel/hyatt-centric-times-square/&title=Hyatt Centric Times Square"
                target="_blank"
                rel="noopener"
                original-title="Google+"
              >
                <i className="fa fa-google-plus fa-lg" />
              </a>
            </li>
            <li>
              <a
                className="no-open pinterest"
                href="javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','https://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)());"
                target="_blank"
                rel="noopener"
                original-title="Pinterest"
              >
                <i className="fa fa-pinterest fa-lg" />
              </a>
            </li>
            <li>
              <a
                className="linkedin"
                href="https://www.linkedin.com/shareArticle?mini=true&url=st_hotel/hyatt-centric-times-square/&title=Hyatt Centric Times Square"
                target="_blank"
                rel="noopener"
                original-title="LinkedIn"
              >
                <i className="fa fa-linkedin fa-lg" />
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="share-item like-it"
            data-toggle="modal"
            data-target="#st-login-form"
            data-type="st_hotel"
            data-id={6556}
          >
            <i className="fa fa-heart-o" />
          </a>
        </div>
      </div>
    );
  }
}
