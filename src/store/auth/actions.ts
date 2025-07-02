import * as actions from "./actionType";

export function loginRequest(
  username: string,
  password: string
): actions.LoginRequestingAction {
  return {
    type: actions.LOGIN_REQUESTING,
    username,
    password,
  };
}

export function loginSuccess(resData: any): actions.LoginSuccessAction {
  return {
    type: actions.LOGIN_SUCCESS,
    resData,
  };
}

export function loginError(error: Error | string): actions.LoginErrorAction {
  return {
    type: actions.LOGIN_ERROR,
    error,
  };
}

export function logout(): actions.LogoutAction {
  return {
    type: actions.LOG_OUT,
  };
}

export function clearLogin(): actions.LoginClearAction {
  return {
    type: actions.CLEAR_LOGIN,
  };
}
