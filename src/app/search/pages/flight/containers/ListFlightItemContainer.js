import { connect } from 'react-redux';
import ListFlightItem from '../components/content/listFlight/ListFlightItem';
import * as actions from '../../../../detail/redux/actions/detail-action';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    bookingFlight: (data) => {
      return dispatch(actions.bookingFlight(data))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.AuthReducer.userInfo
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFlightItem)