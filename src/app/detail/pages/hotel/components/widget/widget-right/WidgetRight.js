import React, { Component } from "react";
import Owner from "./Owner";
import FormCheck from "./FormCheck";
import FormCheckContainer from "../../../containers/FormCheckContainer";

export default class WidgetRight extends Component {
  render() {
    return (
      <>
        <div className="widgets">
          <div className="fixed-on-mobile" data-screen="992px">
            <div className="close-icon hide">
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
                  <title>Ico_close</title>
                  <desc>Created with Sketch.</desc>
                  <defs />
                  <g
                    id="Ico_close"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g id="Group" stroke="#1A2B48" strokeWidth="1.5">
                      <g id="close">
                        <path d="M0.75,23.249 L23.25,0.749" id="Shape" />
                        <path d="M23.25,23.249 L0.75,0.749" id="Shape" />
                      </g>
                    </g>
                  </g>
                </svg>
              </i>{" "}
            </div>
            <FormCheckContainer
              price = {this.props.price}
              checkRoomAvailable = {this.props.checkRoomAvailable}
              id = {this.props.id}
            />
            <Owner
              owner = {this.props.owner}
            />
          </div>
        </div>
      </>
    );
  }
}
