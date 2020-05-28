import { connect } from 'react-redux';
import PaginationCom from '../components/content/pagination/Pagination';
import * as actions from '../../../redux/actions/search-action';

const mapStateToProps = (state, ownProps) => {
  return {
    meta: state.searchReducer.metaFlight
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFlightsSearchAPI: (airportStart, airportEnd, dateStart, page) => {
      actions.getFlightsSearchAPI(dispatch, airportStart, airportEnd, dateStart, page)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationCom);