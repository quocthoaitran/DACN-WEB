import { connect } from 'react-redux';
import TopDestinations from "../components/top-destinations/TopDestinations";
import * as actions from '../redux/actions/home-actions'

const mapStateToProps = (state) => {
  return {
    topDestinations: state.homeReducer.topDestinations,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTopDestinationsAPI: () => {
      return actions.getTopDestinationsAPI(dispatch);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopDestinations)