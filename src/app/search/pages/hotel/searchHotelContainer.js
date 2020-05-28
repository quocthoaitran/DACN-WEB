import { connect } from 'react-redux';
import SearchHotel from './SearchHotel';
import * as actions from '../../redux/actions/search-action';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getHotelsSearchAPI: (address, lng, lat, dateStart, dateEnd, minPrice, maxPrice) => {
      return actions.getHotelsSearchAPI(dispatch, address, lng, lat, dateStart, dateEnd, minPrice, maxPrice)
    }
  }
}

export default connect(null,mapDispatchToProps)(SearchHotel)