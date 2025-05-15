import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import './index.css'
import App from './App'
import rootReducer from './store/reducers';
import rootSagas from './store/sagas';

// import { WindowContextProvider } from 'shared/windowActive';
// import WebSocketProvider from 'containers/socket/webSocket';

const sagaMiddleware = createSagaMiddleware();
const middlewareProd = [sagaMiddleware];

/* prod */
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewareProd) as any,
});

sagaMiddleware.run(rootSagas);

/* disable console log when production build */
let consoleHolder: Console = console;
function debug(bool: boolean) {
  if (!bool) {
    consoleHolder = console;
    console = {} as any;
    Object.keys(consoleHolder).forEach(function (key) {
      console[key as keyof Console] = function () { } as any;
    });
  } else {
    console = consoleHolder;
  }
}

debug(process.env.NODE_ENV !== 'production');

const container = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    {/* <WindowContextProvider>
      <WebSocketProvider store={store}> */}
    <App />
    {/* </WebSocketProvider>
    </WindowContextProvider> */}
  </Provider>,
  container,
);
