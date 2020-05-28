import { connect } from 'react-redux';
import Checkout from './Checkout';

const mapStateToProps = (state, ownProps) => {
  return {
    listBooking: state.detailReducer.listBooking,
    userInfo: state.AuthReducer.userInfo,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)