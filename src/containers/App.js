import React, { Component, PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';

import Root from './Root';
import Home from './Home';
import Counter from './Counter';

import routeReducer from '../reducers/routes';

const { CardStack } = NavigationExperimental;

@connect(
  state => state,
  dispatch => ({ dispatch })
)
export default class App extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired
  };

  renderNavigation = (navigationState, onNavigate) => (
    <CardStack
      direction="horizontal"
      navigationState={navigationState}
      onNavigate={onNavigate}
      renderScene={this.renderScene}
    />
  );

  renderScene = props => {
    switch (props.scene.key) {
      case 'scene_home':
        return <Home onNavigate={props.onNavigate} />;
      case 'scene_counter':
        return <Counter onNavigate={props.onNavigate} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <Root
        reducer={routeReducer}
        navigationState={this.props.routes}
        renderNavigation={this.renderNavigation}
      />
    );
  }
}
