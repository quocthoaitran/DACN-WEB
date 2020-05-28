import { connect } from 'react-redux';
import Similar from './Similar';
import * as actions from '../../../../redux/actions/detail-action';

const mapStateToProps = (state) => {
  return {
    toursSimilar: state.detailReducer.toursSimilar,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getToursSimilarAPI: (tourId) => {
      return actions.getToursSimilarAPI(dispatch, tourId);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Similar);