import { connect } from 'react-redux';
import ListTour from '../components/content/list-tour/ListTour';

const mapStateToProps = (state, ownProps) => {
  return {
    tours: state.searchReducer.tours,
    meta: state.searchReducer.metaTour
  }
}

export default connect(mapStateToProps, null)(ListTour)