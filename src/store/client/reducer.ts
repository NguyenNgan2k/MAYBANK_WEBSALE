import * as actions from "./actionType";

export interface ClientState {
  symbolActive: any;
}

const initialState = {
  symbolActive: null,
};

export default function clientReducer(
  state: ClientState = initialState,
  action: actions.ClientAction | any
): ClientState {
  switch (action.type) {
    case actions.SYMBOL_ACTIVE_SET:
      return {
        ...state,
        symbolActive: action.data,
      };
    default:
      return state;
  }
}
