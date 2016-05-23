import React, { Component, PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';
import Home from './Home';
import Counter from './Counter';
import Root from './Root';
import routeReducer from '../reducers/routes';

const { CardStack } = NavigationExperimental;

@connect(
  state => ({
    navigation: state.routes
  }),
  dispatch => ({ dispatch })
)
export default class App extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
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
    if (props.scene.key === 'scene_home') {
      return <Home onNavigate={props.onNavigate} />;
    } else if (props.scene.key === 'scene_counter') {
      return <Counter onNavigate={props.onNavigate} />;
    }
    return null;
  }

  render() {
    return (
      <Root
        reducer={routeReducer}
        navigationState={this.props.navigation}
        renderNavigation={this.renderNavigation}
      />
    );
  }
}
