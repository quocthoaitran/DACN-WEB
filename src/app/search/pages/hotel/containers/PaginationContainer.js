import { connect } from 'react-redux';
import PaginationCom from '../components/content/pagination/Pagination';
import * as actions from '../../../redux/actions/search-action';

const mapStateToProps = (state, ownProps) => {
  return {
    meta: state.searchReducer.metaHotel
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getHotelsSearchAPI: (address, lng, lat, dateStart, dateEnd, minPrice, maxPrice, page) => {
      actions.getHotelsSearchAPI(dispatch, address, lng, lat, dateStart, dateEnd, minPrice, maxPrice, page)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationCom);