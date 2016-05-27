import React, { Component } from 'react';

import Root from './Root';
import Home from './Home';
import Counter from './Counter';

import routeReducer from '../reducers/routes';

export default class App extends Component {
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
        renderScene={this.renderScene}
      />
    );
  }
}
