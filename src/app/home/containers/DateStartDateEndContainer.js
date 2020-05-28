import { connect } from 'react-redux';
import DateStartDateEnd from '../components/top-content/DateStartDateEnd';
import * as actions from '../redux/actions/home-actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postDate: (dateStart, dateEnd, type) => {
      dispatch(actions.postDate(dateStart, dateEnd, type))
    }
  }
}

export default connect(null, mapDispatchToProps)(DateStartDateEnd);