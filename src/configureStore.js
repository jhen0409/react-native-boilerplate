import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middlewares = [ thunk ];

let finalCreateStore;
if (typeof __DEV__ !== 'undefined' && __DEV__) {
  const devTools = require('remote-redux-devtools');
  finalCreateStore = compose(
    applyMiddleware(...middlewares),
    devTools({
      name: 'Counter',
      hostname: 'localhost',
      port: 5678
    })
  )(createStore);
} else {
  finalCreateStore = applyMiddleware(...middlewares)(createStore);
}

export default function configureStore(initialState) {
  return finalCreateStore(reducer, initialState);
}
