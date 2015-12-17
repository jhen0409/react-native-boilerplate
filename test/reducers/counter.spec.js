import Immutable from 'immutable';
import { expect } from 'chai';
import counter from '../../src/reducers/counter';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../../src/actions/counter';

describe('reducers', () => {
  describe('counter', () => {

    it('should handle initial state', () => {
      expect(counter(undefined, {}).get('counter')).to.equal(0);
    });

    it('should handle INCREMENT_COUNTER', () => {
      expect(
        counter(Immutable.Map({ counter: 1}), { type: INCREMENT_COUNTER }).get('counter')
      ).to.equal(2);
    });

    it('should handle DECREMENT_COUNTER', () => {
      expect(
        counter(Immutable.Map({ counter: 1}), { type: DECREMENT_COUNTER }).get('counter')
      ).to.equal(0);
    });

    it('should handle unknown action type', () => {
      expect(counter(1, { type: 'unknown' })).to.equal(1);
    });
  });
});