import { combineReducers } from 'redux';
import clientReducer from '../client/reducer';

const rootReducer = combineReducers({
  // login: loginReducer,
  client: clientReducer

});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
