import { combineReducers } from 'redux';
import clientReducer from '../client/reducer';
import authReducer from '../auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  client: clientReducer

});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
