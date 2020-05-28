import { connect } from 'react-redux';
import AutoCompleteAirport from '../components/top-content/AutoCompleteAirport';
import * as actions from '../redux/actions/home-actions'

const mapStateToProps = (state, ownProps) => {
  return {
    airports: state.homeReducer.airports,
    selectedAirportStart: state.homeReducer.selectedAirportStart,
    selectedAirportEnd: state.homeReducer.selectedAirportEnd,

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAirportsAPI: () => {
      return actions.getAirportsAPI(dispatch);
    },
    postSelectedAirport: (selectedAirport, typeSelected) => {
      return dispatch(actions.postSelectedAirport(selectedAirport,typeSelected));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoCompleteAirport)