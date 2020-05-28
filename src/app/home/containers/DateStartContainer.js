import { connect } from 'react-redux';
import DateStart from '../components/top-content/DateStart';
import * as actions from '../redux/actions/home-actions.js';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postDateStartFlight: (dateStartFlight) => {
      //console.log(dateStartFlight)
      return dispatch(actions.postDateStartFlight(dateStartFlight))
    }
  }
}

export default connect(null,mapDispatchToProps)(DateStart);