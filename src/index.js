import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Router from './containers/Router';
import configureStore from './configureStore';

const store = configureStore();

const RNBoilerplate = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

AppRegistry.registerComponent('RNBoilerplate', () => RNBoilerplate);
