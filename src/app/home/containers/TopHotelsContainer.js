import { connect } from 'react-redux';
import TopHotel from '../components/top/TopHotel';
import * as actions from '../redux/actions/home-actions'

const mapStateToProps = (state, ownProps) => {
  return {
    topHotels: state.homeReducer.topHotels
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTopHotelsAPI: () => {
      return actions.getTopHotelsAPI(dispatch);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopHotel)