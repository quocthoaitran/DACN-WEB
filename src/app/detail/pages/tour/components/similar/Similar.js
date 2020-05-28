import React, { Component } from "react";
import SimilarItem from "./SimilarItem";
import { Empty } from "antd";

export default class Similar extends Component {

  state = {
    tourId: this.props.id
  }

  componentDidMount() {
    this.props.getToursSimilarAPI(this.state.tourId);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.id !== prevState.tourId){
      return {
        tourId: nextProps.id,
      }
    }
    return null;
  } 

  showToursSimilar = (tours) => {
    if ( tours && tours.length > 0) { 
      return tours.map( (tour, key) => {
        return <SimilarItem tour = {tour} key={ key } ></SimilarItem>
      })
    } 
    return Empty ( <h5>No data to display</h5> )
  }

  render() {

    console.log(this.props);

    return (
      <>
        <h2 className="heading text-center f28 mt50">You might also like</h2>
        <div className="st-list-tour-related row mt50">
          {
            this.showToursSimilar(this.props.toursSimilar)
          }
        </div>
      </>
    );
  }
}
