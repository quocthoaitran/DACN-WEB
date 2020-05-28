import { connect } from 'react-redux';
import PlaceAutoComplete from '../components/top-content/PlaceAutoComplete';
import * as actions from '../redux/actions/home-actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postDestination: (address, lng, lat, typeSearch) => {
      dispatch(actions.postDestination(address, lng, lat, typeSearch))
    }
  }
}

export default connect(null, mapDispatchToProps)(PlaceAutoComplete)