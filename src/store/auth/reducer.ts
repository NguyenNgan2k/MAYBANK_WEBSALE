import * as actions from "./actionType";

export interface LoginState {
  successful: any;
}

const initialState = {
  successful: null,
};

export default function loginReducer(
  state: LoginState = initialState,
  action: actions.LoginAction
): LoginState {
  switch (action.type) {
    case actions.CLEAR_LOGIN:
      return {
        ...state,
        successful: false,
      };
    case actions.LOGIN_REQUESTING:
    case actions.LOGIN_ERROR:
      return {
        ...state,
        successful: null,
      };

    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        successful: action.resData,
      };

    default:
      return state;
  }
}
