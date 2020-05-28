import { connect } from 'react-redux';
import NearBy from './NearBy';
import * as actions from '../../../../redux/actions/detail-action';

const mapStateToProps = (state) => {
  return {
    hotelsNearBy: state.detailReducer.hotelsNearBy,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getHotelsNearByAPI: (hotelId) => {
      return actions.getHotelsNearByAPI(dispatch, hotelId);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NearBy);