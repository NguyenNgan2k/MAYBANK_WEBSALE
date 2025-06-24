export const SYMBOL_ACTIVE_SET = "SYMBOL_ACTIVE_SET";
export interface SetSymbolActiveAction {
  type: typeof SYMBOL_ACTIVE_SET;
  data: any;
}

export type ClientAction = SetSymbolActiveAction;
