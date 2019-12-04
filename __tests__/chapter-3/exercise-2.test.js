const { isEven } = require('../../chapter-3/exercise-2');

describe('isEven', () => {
  [
    [50, true],
    [75, false],
    [-1, false],
    [-20, true],
  ].forEach(([x, expected]) => {
    it(`isEven(${x}) = ${expected}`, () => {
      expect.assertions(1);
      expect(isEven(x)).toStrictEqual(expected);
    });
  });
});
