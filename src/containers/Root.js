import React, { Component, PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';

const { CardStack } = NavigationExperimental;

@connect(
  state => state,
  dispatch => ({ dispatch })
)
export default class Root extends Component {
  static propTypes = {
    reducer: PropTypes.func.isRequired,
    routes: PropTypes.object.isRequired,
    renderScene: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  handleNavigation = (action) => {
    const { dispatch } = this.props;
    dispatch(action);
  }

  render() {
    return (
      <CardStack
        direction="horizontal"
        onNavigate={this.handleNavigation}
        navigationState={this.props.routes}
        renderScene={this.props.renderScene}
      />
    );
  }
}
