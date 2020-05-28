import { connect } from 'react-redux';
import Register from './Register';
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
    registerAPI: (email, password, passwordCon, role, firstname, lastname, history ) => {
      return actions.registerAPI(dispatch, email, password, passwordCon, role, firstname, lastname, history);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)