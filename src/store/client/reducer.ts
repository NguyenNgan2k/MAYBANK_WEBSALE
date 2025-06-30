import * as actions from "./actionType";

export interface ClientState {
  symbolActive: any;
  dblPri: any;
}

const initialState = {
  symbolActive: null,
  dblPri: null,
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
    case actions.DBL_PRICE_SET:
      return {
        ...state,
        dblPri: action.data,
      };

    default:
      return state;
  }
}
