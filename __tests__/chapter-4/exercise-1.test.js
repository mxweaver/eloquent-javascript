const { range, sum } = require('../../chapter-4/exercise-1');

describe('range', () => {
  [
    [0, 1, [0, 1]],
    [0, 2, [0, 1, 2]],
    [1, 2, [1, 2]],
    [3, 4, [3, 4]],
    [4, 10, [4, 5, 6, 7, 8, 9, 10]],
    [10, 26, [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]],
  ].forEach(([start, end, expected]) => {
    it(`range(${start}, ${end})`, () => {
      expect.assertions(1);
      expect(range(start, end)).toStrictEqual(expected);
    });
  });

  it('takes an optional step argument with a default value of 1', () => {
    expect.assertions(2);
    expect(range(1, 10)).toStrictEqual(range(1, 10, 1));
    expect(range(1, 10, 2)).toStrictEqual([1, 3, 5, 7, 9]);
  });

  it('works with negative step values', () => {
    expect.assertions(1);
    expect(range(5, 2, -1)).toStrictEqual([5, 4, 3, 2]);
  });
});

describe('sum', () => {
  [
    [[], 0],
    [[0], 0],
    [[1], 1],
    [[1, 2, 3], 6],
    [range(1, 10), 55],
  ].forEach(([input, expected]) => {
    it(`sum(${input})`, () => {
      expect.assertions(1);
      expect(sum(input)).toStrictEqual(expected);
    });
  });
});
