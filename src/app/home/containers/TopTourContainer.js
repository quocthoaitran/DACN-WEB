import { connect } from 'react-redux'
import * as actions from '../redux/actions/home-actions'
import TopTour from '../components/top/TopTour';

const mapStateToProps = (state, ownProps) => {
  return {
    topTours: state.homeReducer.topTours
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTopToursAPI: () => {
      return actions.getTopToursAPI(dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopTour)