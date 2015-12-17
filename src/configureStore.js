import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middlewares = [ thunk ];
if (__DEV__) {
  const logger = require('redux-logger');
  middlewares.push(logger({ level: 'info' }));
}

const finalCreateStore = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(reducer, initialState);
};