import * as types from '../actionsType/ActionsType';

const AuthReducerInitialState = {
  token: null, 
  userInfo:  null,
  errors: null,
}

const AuthReducer = (state = AuthReducerInitialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      console.log(action);
      return {...state, token: action.token, userInfo: action.userInfo, errors: null}
    case types.LOGIN_FAILED:
      return {...state, errors: {...action.errors}}
    case types.REGISTER_FAILED:
      return {...state, errors: {...action.errors}}
    case types.LOGOUT:
      console.log("logged out");
      return {...state, token: null, userInfo: null, errors: null}
    default:
      return state
  }
}

export default AuthReducer;