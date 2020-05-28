import { connect } from 'react-redux';
import BookingHistoryItem from '../Content/BookingHistoryItem';
import * as actions from '../../redux/actions/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    bookings: state.profileReducer.bookings
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getListBookingHistoryAPI: () => {
      actions.getListBookingHistoryAPI(dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingHistoryItem)