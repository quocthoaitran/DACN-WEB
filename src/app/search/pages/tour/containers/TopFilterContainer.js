import { connect } from 'react-redux';
import TopFilter from '../components/filter/top-filter/TopFilter';

const mapStateToProps = (state, ownProps) => {
  return {
    meta: state.searchReducer.metaTour
  }
}

export default connect(mapStateToProps, null)(TopFilter);