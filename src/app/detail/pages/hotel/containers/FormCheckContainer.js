import { connect } from 'react-redux';
import FormCheck from '../components/widget/widget-right/FormCheck';
import * as actions from '../../../redux/actions/detail-action';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    checkAvailableRooms: (hotelId, data) => {
      return actions.checkAvailableRooms(dispatch, hotelId, data);
    }
  }
}

export default connect(null, mapDispatchToProps)(FormCheck)