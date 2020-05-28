import { connect } from 'react-redux';
import SearchFlight from './searchFlight';
import * as actions from '../../redux/actions/search-action';

const mapStateToProps = (state, ownProps) => {
  return {
    airports: state.homeReducer.airports,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFlightsSearchAPI: (airportStart, airportEnd, dateStart, page) => {
      actions.getFlightsSearchAPI(dispatch, airportStart, airportEnd, dateStart, page)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFlight);