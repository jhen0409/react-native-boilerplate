import sinon from 'sinon';
import { expect } from 'chai';
import * as actions from '../../src/actions/counter';

describe('actions', () => {
  it('increment should create increment action', () => {
    expect(actions.increment()).to.eql({ type: actions.INCREMENT_COUNTER });
  });

  it('decrement should create decrement action', () => {
    expect(actions.decrement()).to.eql({ type: actions.DECREMENT_COUNTER });
  });

  it('incrementIfOdd should create increment action', () => {
    const fn = actions.incrementIfOdd();
    expect(fn).to.be.a('function');
    const dispatch = sinon.spy();
    const getState = () => ({ counter: 1 });
    fn(dispatch, getState);
    expect(dispatch.calledWith({ type: actions.INCREMENT_COUNTER })).to.equal(true);
  });

  it('incrementIfOdd shouldnt create increment action if counter is even', () => {
    const fn = actions.incrementIfOdd();
    const dispatch = sinon.spy();
    const getState = () => ({ counter: 2 });
    fn(dispatch, getState);
    expect(dispatch.callCount).to.equal(0);
  });

  // There's no nice way to test this at the moment...
  it('incrementAsync', (done) => {
    const fn = actions.incrementAsync(1);
    expect(fn).to.be.a('function');
    const dispatch = sinon.spy();
    fn(dispatch);
    setTimeout(() => {
      expect(dispatch.calledWith({ type: actions.INCREMENT_COUNTER })).to.equal(true);
      done();
    }, 5);
  });
});
