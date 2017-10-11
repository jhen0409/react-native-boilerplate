import Immutable from 'immutable';
import * as actions from '../counter';

describe('actions', () => {
  it('increment should create increment action', () => {
    expect(actions.increment()).toMatchSnapshot();
  });

  it('decrement should create decrement action', () => {
    expect(actions.decrement()).toMatchSnapshot();
  });

  it('incrementIfOdd should create increment action', () => {
    const fn = actions.incrementIfOdd();
    expect(fn).toBeInstanceOf(Function);
    const dispatch = jest.fn();
    const getState = () => ({ counter: Immutable.Map({ counter: 1 }) });
    fn(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith({ type: 'increment' });
  });

  it('incrementIfOdd shouldnt create increment action if counter is even', () => {
    const fn = actions.incrementIfOdd();
    const dispatch = jest.fn();
    const getState = () => ({ counter: Immutable.Map({ counter: 2 }) });
    fn(dispatch, getState);
    expect(dispatch).not.toHaveBeenCalled();
  });

  // There's no nice way to test this at the moment...
  it('incrementAsync', (done) => {
    const fn = actions.incrementAsync(1);
    expect(fn).toBeInstanceOf(Function);
    const dispatch = jest.fn();
    fn(dispatch);
    setTimeout(() => {
      expect(dispatch).toHaveBeenCalledWith({ type: 'increment' });
      done();
    }, 5);
  });
});
