import { connect } from 'react-redux';
import RoomItem from '../components/content/rooms/RoomItem';
import * as actions from '../../../redux/actions/detail-action';

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.AuthReducer.userInfo,
    checkInOutRoom: state.detailReducer.checkInOutRoom,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    bookingRoom: (data) => {
      return dispatch(actions.bookingRoom(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomItem);