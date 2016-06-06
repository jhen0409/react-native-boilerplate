/* eslint global-require: 0 */

import Immutable from 'immutable';
import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middlewares = [thunk];

let enhancer;
if (__DEV__) {
  const installDevTools = require('immutable-devtools');
  installDevTools(Immutable);

  const reduxRemoteDevTools = require('remote-redux-devtools');
  enhancer = compose(
    applyMiddleware(...middlewares),
    global.reduxNativeDevTools ?
      global.reduxNativeDevTools() :
      reduxRemoteDevTools({
        name: Platform.OS,
        host: 'localhost',
        port: 5678
      }),
  );
} else {
  enhancer = applyMiddleware(...middlewares);
}

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducers').default);
    });
  }
  return store;
}
