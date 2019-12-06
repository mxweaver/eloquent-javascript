const { reverseArray, reverseArrayInPlace } = require('../../chapter-4/exercise-2');

const tests = [
  [
    [1],
    [1],
  ], [
    [1, 2],
    [2, 1],
  ], [
    [1, 2, 3, 4],
    [4, 3, 2, 1],
  ], [
    ['la', 'di', 'da'],
    ['da', 'di', 'la'],
  ], [
    ['see', 1, 'you', 55, 'space', undefined, 'cowboy'],
    ['cowboy', undefined, 'space', 55, 'you', 1, 'see'],
  ],
];

describe('reverseArray', () => {
  it('returns an empty array when given an empty array', () => {
    expect.assertions(1);
    expect(reverseArray([])).toStrictEqual([]);
  });

  tests.forEach(([input, expected]) => {
    it(`reverses ${input} properly`, () => {
      expect.assertions(1);
      expect(reverseArray(input)).toStrictEqual(expected);
    });
  });
});

describe('reverseArrayInPlace', () => {
  it('does not alter an empty array', () => {
    expect.assertions(1);
    const input = [];
    reverseArrayInPlace(input);
    expect(input).toStrictEqual([]);
  });

  tests.forEach(([input, expected]) => {
    it(`reverses ${input} properly`, () => {
      expect.assertions(1);
      const copy = [...input];
      reverseArrayInPlace(copy);
      expect(copy).toStrictEqual(expected);
    });
  });
});
