export const PAGE_LOGIN = "login/LOGIN";
export interface PageLoginAction {
  type: typeof PAGE_LOGIN;
  token: any;
}

export const LOGIN_REQUESTING = "login/LOGIN_REQUESTING";
export interface LoginRequestingAction {
  type: typeof LOGIN_REQUESTING;
  username: string;
  password: string;
}

export const LOGIN_SUCCESS = "login/LOGIN_SUCCESS";
export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  resData: any;
}

export const LOGIN_ERROR = "login/LOGIN_ERROR";
export interface LoginErrorAction {
  type: typeof LOGIN_ERROR;
  error: Error | string;
}

export const LOG_OUT = "login/LOG_OUT";
export interface LogoutAction {
  type: typeof LOG_OUT;
}

export const CLEAR_LOGIN = "login/CLEAR";
export interface LoginClearAction {
  type: typeof CLEAR_LOGIN;
}

export type LoginAction =
  | PageLoginAction
  | LoginRequestingAction
  | LoginSuccessAction
  | LoginErrorAction
  | LoginClearAction;
