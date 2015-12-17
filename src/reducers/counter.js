import Immutable from 'immutable';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

const initialState = Immutable.Map({ counter: 0 });

const actionsMap = {
  [INCREMENT_COUNTER]: (state, /*action*/) => {
    return state.update('counter', n => n + 1);
  },
  [DECREMENT_COUNTER]: (state, /*action*/) => {
    return state.update('counter', n => n - 1);
  }
};

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};
