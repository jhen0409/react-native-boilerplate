import { NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';

@connect(
  state => state,
  dispatch => ({ dispatch })
)
export default class Root extends NavigationExperimental.RootContainer {

  handleNavigation(action) {
    const { dispatch } = this.props;
    dispatch(action);
  }

  render() {
    return this.props.renderNavigation(
      this.props.navigationState,
      this.handleNavigation
    );
  }
}
