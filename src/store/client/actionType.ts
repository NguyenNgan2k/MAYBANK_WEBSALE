export const CLIENT_UNSET = "CLIENT_UNSET";
export interface ClientUnsetAction {
  type: typeof CLIENT_UNSET;
}

export const SYMBOL_ACTIVE_SET = "SYMBOL_ACTIVE_SET";
export interface SetSymbolActiveAction {
  type: typeof SYMBOL_ACTIVE_SET;
  data: any;
}

export const DBL_PRICE_SET = "DBL_PRICE_SET";
export interface SetDblPriceAction {
  type: typeof DBL_PRICE_SET;
  data: any;
}

export type ClientAction = SetSymbolActiveAction;
