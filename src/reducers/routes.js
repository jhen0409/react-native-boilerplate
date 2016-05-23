import { NavigationExperimental } from 'react-native';

const { StateUtils } = NavigationExperimental;

const initialState = {
  index: 0,
  key: 'home',
  children: [{ key: 'home' }],
};

const actionsMap = {
  push(state, action) {
    return StateUtils.push(state, { key: action.key });
  },
  back(state/*, action*/) {
    return state.index > 0 ? StateUtils.pop(state) : state;
  },
  pop(state/*, action*/) {
    return state.index > 0 ? StateUtils.pop(state) : state;
  }
};

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};
