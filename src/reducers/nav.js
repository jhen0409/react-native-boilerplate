import AppNavigator from '../navigator';

const initialState = {
  index: 0,
  routes: [{ key: 'Init', routeName: 'Home' }],
};

export default (state = initialState, action) =>
  AppNavigator.router.getStateForAction(action, state);
