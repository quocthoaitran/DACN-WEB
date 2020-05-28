import * as types from '../actionsType/ActionsType';
import * as APIs from '../../../../../services/call-api';
import axios from 'axios';

export const loginSuccess = (token, userInfo) => {
  return {
    type: types.LOGIN_SUCCESS,
    token,
    userInfo,
  }
}

export const loginFail = (errors) => {
  console.log(errors);
  return {
    type: types.LOGIN_FAILED,
    errors,
  }
}

export const loginAPI = async (dispatch, email, password) => {
  
  let accountReq = null;

  let data = {
    email: email,
    password: password
  };

  try {
    accountReq = await APIs.callAPI("auth/login", "POST", data);
    console.log(accountReq);
  } catch (e) {
    console.log(e);
  }

  console.log(accountReq);

  if (accountReq) {
    if (accountReq.data.success){
      APIs.setAuthToken(accountReq.data.data.token);
      return dispatch(loginSuccess(accountReq.data.data.token, accountReq.data.data.userInfo));
    }
    return dispatch(loginFail(accountReq.data.errors))
  }
};

export const registerSuccess = (token, userInfo) => {
  return {
    type: types.REGISTER_SUCCESS,
    token,
    userInfo,
  }
}

export const registerFail = (errors) => {
  console.log(errors);
  return {
    type: types.REGISTER_FAILED,
    errors,
  }
}

export const registerAPI = async (dispatch, email, password, passwordCon, role, firstname, lastname, history) => {
  
  let accountReq = null;

  let data = {
    email: email,
    password: password,
    password2: passwordCon,
    role: +role,
    firstname: firstname,
    lastname: lastname
  };

  try {
      accountReq = await APIs.callAPI("auth/register", "POST", data);
  }
  catch (e) {
      console.log(e);
      accountReq = null;
  }

  console.log(accountReq);

  if (accountReq) {
    if (accountReq.data.success){
      history.push('/login')
    }
    return dispatch(registerFail(accountReq.data.errors))
  }
};

export const logout = (dispatch) => {
  APIs.setAuthToken(false);
  return dispatch({
    type: types.LOGOUT
  })
}
