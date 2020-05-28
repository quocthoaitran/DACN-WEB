import { connect } from 'react-redux';
import Login from './Login';
import * as actions from '../auth/redux/actions/Actions';

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.AuthReducer.token,
    userInfo: state.AuthReducer.userInfo,
    errors: state.AuthReducer.errors,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginAPI: (email, password) => {
      return actions.loginAPI(dispatch, email, password);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)