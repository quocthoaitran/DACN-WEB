import { connect } from 'react-redux';
import Reviews from './Reviews';
import * as actions from '../../../../redux/actions/detail-action';

const mapStateToProps = (state) => {
  return {
    reviews: state.detailReducer.reviewsDetail,
    token: state.AuthReducer.token,
    errors: state.detailReducer.errorsReviewHotel,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getReviewsOfHotelAPI: (hotelId) => {
      return actions.getReviewsOfHotelAPI(dispatch, hotelId);
    },
    createReviewHotelAPI: (hotelId, data) => {
      return actions.createReviewHotelAPI(dispatch, hotelId, data)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Reviews);