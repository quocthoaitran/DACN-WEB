import { connect } from 'react-redux';
import BookingSubmission  from '../components/booking-submission/BookingSubmission';
import * as actions  from '../../../redux/actions/bookActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    bookItems: (data) => {
      actions.bookItems(dispatch, data)
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.bookReducer.errors
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingSubmission)