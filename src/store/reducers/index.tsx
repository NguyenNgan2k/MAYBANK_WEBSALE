import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';


const rootReducer = combineReducers({
  form,
  // login: loginReducer,

});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
