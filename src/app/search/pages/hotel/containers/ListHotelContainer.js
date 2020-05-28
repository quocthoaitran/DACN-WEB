import { connect } from 'react-redux';
import ListHotel from '../components/content/list-hotel/ListHotel';

const mapStateToProps = (state, ownProps) => {
  return {
    hotels: state.searchReducer.hotels,
    meta: state.searchReducer.metaHotel
  }
}

export default connect(mapStateToProps)(ListHotel)