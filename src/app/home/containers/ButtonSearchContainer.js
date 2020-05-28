import { connect } from 'react-redux';
import ButtonSearch from '../components/top-content/ButtonSearch';

const mapStateToProps = (state, ownProps) => {
  return {
    selectedAirportStart: state.homeReducer.selectedAirportStart,
    selectedAirportEnd: state.homeReducer.selectedAirportEnd,
    airports: state.homeReducer.airports,
    dateStartFlight: state.homeReducer.dateStartFlight
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch()
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonSearch)