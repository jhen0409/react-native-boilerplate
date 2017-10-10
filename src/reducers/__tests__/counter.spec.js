import Immutable from 'immutable';
import counter from '../counter';

describe('reducers', () => {
  describe('counter', () => {
    it('should handle initial state', () => {
      expect(counter(undefined, {}).get('counter')).toBe(0);
    });

    it('should handle increment', () => {
      expect(counter(Immutable.Map({ counter: 1 }), { type: 'increment' }).get('counter')).toBe(2);
    });

    it('should handle decrement', () => {
      expect(counter(Immutable.Map({ counter: 1 }), { type: 'decrement' }).get('counter')).toBe(0);
    });

    it('should handle unknown action type', () => {
      expect(counter(1, { type: 'unknown' })).toBe(1);
    });
  });
});
