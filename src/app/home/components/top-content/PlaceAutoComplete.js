import React, { Component } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { Input } from 'antd';
class PlaceAutoComplete extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: '',
      isShowAutoComplete: false,
     };
  }

  handleChange = address => {
    this.setState({ address },  () => {
      if (this.state.address.length > 0) {
        this.setState({
          isShowAutoComplete: true,
        })
      } else {
        this.setState({
          isShowAutoComplete: false,
        })
      }
    });
  };

  handleSelect = address => {
    this.setState({
      isShowAutoComplete: false,
    })
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);
        console.log(address);
        this.setState({ address });
        this.props.postDestination(address, latLng.lng, latLng.lat, this.props.typeSearch)
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <div>
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
              <label>Destination</label>
              <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <Input
                      {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input',
                      })}
                    />
                    { this.state.isShowAutoComplete && 
                      <div className="autocomplete-dropdown-container didauday-autocomplete">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                          const className = suggestion.active
                            ? 'suggestion-item--active'
                            : 'suggestion-item';
                          // inline style for demonstration purpose
                          const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                              })}
                            >
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    }
                  </div>
                )}
              </PlacesAutocomplete>
              <input
                type="hidden"
                name="location_name"
                defaultValue
              />
              <input
                type="hidden"
                name="location_id"
                defaultValue
              />
            </div>
          </div>

        </>
      </div>
    );
  }
}

export default PlaceAutoComplete;