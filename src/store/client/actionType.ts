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
