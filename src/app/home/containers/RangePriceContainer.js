import { connect } from 'react-redux';
import RangePrice from '../components/top-content/RangePrice';
import * as actions from '../redux/actions/home-actions';

const mapStateToProps = (state, ownProps) => {
  return {
    addressHotel: state.homeReducer.addressHotel,
    lngHotel: state.homeReducer.lngHotel,
    latHotel: state.homeReducer.latHotel,
    dateStartHotel: state.homeReducer.dateStartHotel,
    dateEndHotel: state.homeReducer.dateEndHotel,
    maxPriceHotel: state.homeReducer.maxPriceHotel,
    minPriceHotel: state.homeReducer.minPriceHotel,
    addressTour: state.homeReducer.addressTour,
    lngTour: state.homeReducer.lngTour,
    latTour: state.homeReducer.latTour,
    dateStartTour: state.homeReducer.dateStartTour,
    dateEndTour: state.homeReducer.dateEndTour,
    maxPriceTour: state.homeReducer.maxPriceTour,
    minPriceTour: state.homeReducer.minPriceTour,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postPrice: (maxPrice, minPrice, typeSearch) => {
      dispatch(actions.postPrice(maxPrice, minPrice, typeSearch))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RangePrice)