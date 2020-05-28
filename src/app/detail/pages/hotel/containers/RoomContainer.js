import { connect } from 'react-redux';
import Rooms from '../components/content/rooms/Rooms';

const mapStateToProps = (state, ownProps) => {
  return {
    availableRooms: state.detailReducer.availableRooms
  }
}

export default connect(mapStateToProps, null)(Rooms);