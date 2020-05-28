import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions';
import ReviewItem from '../Content/ReviewItem';

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.profileReducer.reviews
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getListReviewAPI: () => {
      actions.getListReviewAPI(dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewItem)