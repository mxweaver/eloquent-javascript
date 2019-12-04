const { isEven } = require('../../chapter-3/exercise-2');

describe('isEven', () => {
  it('thinks 0 is even', () => {
    expect.assertions(1);
    expect(isEven(0)).toStrictEqual(true);
  });

  it('thinks 1 is odd', () => {
    expect.assertions(1);
    expect(isEven(1)).toStrictEqual(false);
  });

  it('works for negative numbers', () => {
    expect.assertions(2);
    expect(isEven(-1)).toStrictEqual(false);
    expect(isEven(-2)).toStrictEqual(true);
  });

  [
    [50, true],
    [75, false],
    [-20, true],
  ].forEach(([x, expected]) => {
    it(`isEven(${x}) = ${expected}`, () => {
      expect.assertions(1);
      expect(isEven(x)).toStrictEqual(expected);
    });
  });
});
