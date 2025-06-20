import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  // login: loginReducer,

});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
