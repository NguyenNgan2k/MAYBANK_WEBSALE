import * as actions from "./actionType";

export function setSymbolActive(data: any): actions.SetSymbolActiveAction {
  return {
    type: actions.SYMBOL_ACTIVE_SET,
    data,
  };
}

export function setDblPrice(data: any): actions.SetDblPriceAction {
  return {
    type: actions.DBL_PRICE_SET,
    data,
  };
}
