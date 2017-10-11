import { combineReducers } from 'redux';
import counter from './counter';
import nav from './nav';

export default combineReducers({
  counter,
  nav,
});
