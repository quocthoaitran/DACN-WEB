import { connect } from 'react-redux';
import BookingItem from '../components/booking-item/BookingItem';

const mapStateToProps = (state, ownProps) => {
  return {
    listBooking: state.detailReducer.listBooking
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingItem)