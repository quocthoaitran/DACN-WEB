import React, { Component } from 'react';
import { AutoComplete } from 'antd';

class AutoCompleteAirport extends Component {

  componentDidMount() {
    this.props.getAirportsAPI();
  }

  onChangeValue = (value, typeSelected) => {
    this.props.postSelectedAirport(value, typeSelected);
  }

  render() {
    let data = []
    if(this.props.type === 'start'){
      data = this.props.airports.filter(airport => `${airport.name} ( ${airport.acronym} )` !== this.props.selectedAirportEnd);
    }
    else if(this.props.type === 'end'){
      data = this.props.airports.filter(airport => `${airport.name} ( ${airport.acronym} )` !== this.props.selectedAirportStart);
    }
  
    const dataSource= data.map(airport => `${airport.name} ( ${airport.acronym} )`);
    return (
      <>
        <div className="form-group form-extra-field dropdown clearfix field-detination has-icon">
          <i className="input-icon field-icon fa">
            <svg
              height="24px"
              width="24px"
              viewBox="0 0 17 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
              <title>ico_maps_search_box</title>
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
                  id="Search_Result_1_Grid"
                  transform="translate(-165.000000, -328.000000)"
                  stroke="#A0A9B2"
                >
                  <g
                    id="form_search_hotel_row"
                    transform="translate(135.000000, 290.000000)"
                  >
                    <g
                      id="input"
                      transform="translate(30.000000, 0.000000)"
                    >
                      <g
                        id="where"
                        transform="translate(0.000000, 26.000000)"
                      >
                        <g
                          id="Group"
                          transform="translate(0.000000, 12.000000)"
                        >
                          <g id="ico_maps_search_box">
                            <path
                              d="M15.75,8.25 C15.75,12.471 12.817,14.899 10.619,17.25 C9.303,18.658 8.25,23.25 8.25,23.25 C8.25,23.25 7.2,18.661 5.887,17.257 C3.687,14.907 0.75,12.475 0.75,8.25 C0.75,4.10786438 4.10786438,0.75 8.25,0.75 C12.3921356,0.75 15.75,4.10786438 15.75,8.25 Z"
                              id="Shape"
                            />
                            <circle
                              id="Oval"
                              cx="8.25"
                              cy="8.25"
                              r={3}
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </i>
          <div
            className="dropdown"
            data-toggle="dropdown"
            id="dropdown-destination"
          >
            <label>Place {this.props.type}</label>
            <br></br>
            <AutoComplete
                name="placeStart"
                onChange = {(value) => this.onChangeValue(value, this.props.type)}
                dataSource={ dataSource }
                placeholder={ 'Airport name' } 
                filterOption={ ( inputValue, option ) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1 }
                />
          </div>
        </div>
      </>
    );
  }
}

export default AutoCompleteAirport;