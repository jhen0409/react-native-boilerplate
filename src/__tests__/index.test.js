import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '..';

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
