import { connect } from 'react-redux';
import SettingItem from '../Content/SettingItem';
import * as actions from '../../redux/actions/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateInfo: (data) => {
      return actions.updateInfo(dispatch, data);
    },
    changePassword: (data) => {
      return actions.changePassword(dispatch, data);
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.AuthReducer.userInfo,
    success: state.profileReducer.success,
    errors: state.profileReducer.errors,
    changeSuccess: state.profileReducer.changeSuccess,
    changeErrors: state.profileReducer.changeErrors,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingItem)