import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middlewares = [ thunk ];
if (typeof __DEV__ !== 'undefined' && __DEV__) {
  const logger = require('redux-logger');
  middlewares.push(logger({ level: 'info' }));
}

let finalCreateStore;
if (typeof __DEV__ !== 'undefined' && __DEV__) {
  const devTools = require('remote-redux-devtools').default;
  finalCreateStore = compose(
    applyMiddleware(...middlewares),
    devTools()
  )(createStore);
} else {
  finalCreateStore = applyMiddleware(...middlewares)(createStore);
}

export default function configureStore(initialState) {
  return finalCreateStore(reducer, initialState);
}
