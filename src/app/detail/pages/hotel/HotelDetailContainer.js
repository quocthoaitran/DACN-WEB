import { connect } from 'react-redux';
import HotelDetail from './HotelDetail';
import * as actions from '../../redux/actions/detail-action';

const mapStateToProps = (state) => {
  return {
    hotelDetail: state.detailReducer.hotelDetail,
    availableRooms: state.detailReducer.availableRooms,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getHotelDetailAPI: (hotelId) => {
      return actions.getHotelDetailAPI(dispatch, hotelId);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HotelDetail);