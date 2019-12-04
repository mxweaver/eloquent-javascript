const { min } = require('../../chapter-3/exercise-1');

describe('min', () => {
  [
    [0, 0, 0],
    [1, 2, 1],
    [0, 23, 0],
    [100, 32, 32],
    [-1, 2, -1],
  ].forEach(([a, b, expected]) => {
    it(`min(${a}, ${b}) = ${expected}`, () => {
      expect.assertions(1);
      expect(min(a, b)).toStrictEqual(expected);
    });
  });
});
