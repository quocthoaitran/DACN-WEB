import React, { Component } from 'react';
import * as config from '../../../../constants/config';

class ItemTopDestination extends Component {
  render() {
    return (
      <>
        <div className="col-xs-6 col-sm-6 col-md-4 has-matchHeight normal-item">
          <div className="destination-item didauday-custom-destination-item">
            <div className="image">
              <img
                src= {`${config.Url}/${this.props.topDestination.image}`}
                className="img-responsive"
              />
              <div className="content">
                <h4 className="title">{this.props.topDestination.name}</h4>
              </div>
              <div className="desc multi">
                <a href="javascript:void(0)">{this.props.topDestination.total_hotel || 0 } Hotels</a>
                <a href="javascript:void(0)">
                  {this.props.topDestination.total_tour || 0 } Tours
                </a>
              </div>
            </div>
          </div>
        </div>
      </>

    );
  }
}

export default ItemTopDestination;