import 'react-native';
import Immutable from 'immutable';
import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../Counter';

it('renders correctly', () => {
  const counter = (
    <Counter
      increment={() => {}}
      incrementIfOdd={() => {}}
      incrementAsync={() => {}}
      decrement={() => {}}
      counter={Immutable.Map({ counter: 1 })}
    />
  );
  const tree = renderer.create(counter).toJSON();
  expect(tree).toMatchSnapshot();
});
