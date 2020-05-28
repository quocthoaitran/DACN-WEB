import { connect } from 'react-redux';
import * as actions from '../../redux/actions/search-action';
import SearchTour from './SearchTour';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getToursSearchAPI: (address, lng, lat, dateStart, dateEnd, minPrice, maxPrice) => {
      return actions.getToursSearchAPI(dispatch, address, lng, lat, dateStart, dateEnd, minPrice, maxPrice)
    }
  }
}

export default connect(null,mapDispatchToProps)(SearchTour)