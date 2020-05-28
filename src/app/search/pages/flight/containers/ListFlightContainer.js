import { connect } from 'react-redux';
import ListFlight from '../components/content/listFlight/ListFlight';

const mapStateToProps = (state, ownProps) => {
  return {
    flights: state.searchReducer.flights
  }
}

export default connect(mapStateToProps, null)(ListFlight);