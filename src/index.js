import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './configureStore';

const store = configureStore();

const RNBoilerplate = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('RNBoilerplate', () => RNBoilerplate);
