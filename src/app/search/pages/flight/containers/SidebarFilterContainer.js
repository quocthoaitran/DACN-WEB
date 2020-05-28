import { connect } from 'react-redux';
import SidebarFilter from '../components/filter/sidebar-filter/SidebarFilter';
import * as actions from '../../../../home/redux/actions/home-actions';

const mapStateToProps = (state, ownProps) => {
  return {
    airports: state.homeReducer.airports,
    selectedAirportStart: state.homeReducer.selectedAirportStart,
    selectedAirportEnd: state.homeReducer.selectedAirportEnd
  }
}



export default connect(mapStateToProps, null)(SidebarFilter)