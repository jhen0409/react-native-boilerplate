import { combineReducers } from 'redux';
import counter from './counter';
import routes from './routes';

export default combineReducers({
  counter,
  routes
});
