import { connect } from 'react-redux';
import Reviews from './Reviews';
import * as actions from '../../../../../redux/actions/detail-action';

const mapStateToProps = (state) => {
  return {
    reviews: state.detailReducer.reviewsTour,
    token: state.AuthReducer.token,
    errors: state.detailReducer.errorsReviewTour,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getReviewsOfTourAPI: (tourId) => {
      return actions.getReviewsOfTourAPI(dispatch, tourId);
    },
    createReviewTourAPI: (id, data) => {
      return actions.createReviewTourAPI(dispatch, id, data)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Reviews);