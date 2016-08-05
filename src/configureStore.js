/* eslint global-require: 0 */

import Immutable from 'immutable';
import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import * as actionCreators from './actions/counter';

const middlewares = [thunk];

let enhancer;
let updateStore = f => f;
if (__DEV__) {
  /* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
  const installDevTools = require('immutable-devtools');
  const devTools = global.reduxNativeDevTools || require('remote-redux-devtools');

  installDevTools(Immutable);
  updateStore = devTools.updateStore || updateStore;

  enhancer = compose(
    applyMiddleware(...middlewares),
    devTools({
      name: Platform.OS,
      ...require('../package.json').remotedev,
      actionCreators,
    })
  );
} else {
  enhancer = applyMiddleware(...middlewares);
}

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  updateStore(store);
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducers').default);
    });
  }
  return store;
}
