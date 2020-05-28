import { connect } from 'react-redux';
import TourDetail from './TourDetail';
import * as actions from '../../redux/actions/detail-action';

const mapStateToProps = (state) => {
  return {
    tourDetail: state.detailReducer.tourDetail,
    userInfo: state.AuthReducer.userInfo,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTourDetailAPI: (tourId) => {
      return actions.getTourDetailAPI(dispatch, tourId);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TourDetail);