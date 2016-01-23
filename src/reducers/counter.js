const initialState = Immutable.Map({ counter: 0 });

const actionsMap = {
  increment(state/*, action*/) {
    return state.update('counter', n => n + 1);
  },
  decrement(state/*, action*/) {
    return state.update('counter', n => n - 1);
  }
};

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};
