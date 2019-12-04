const { countBs, countChar, countBsRedux } = require('../../chapter-3/exercise-3');

const countBsTable = [
  ['aaaa', 0],
  ['aBBa', 2],
];

describe('countBs', () => {
  it('thinks an empty string contains no b\'s', () => {
    expect.assertions(1);
    expect(countBs('')).toStrictEqual(0);
  });

  it('thinks the string "B" has one uppercase B', () => {
    expect.assertions(1);
    expect(countBs('B')).toStrictEqual(1);
  });

  countBsTable.forEach(([input, expected]) => {
    it(`countBs(${input}) = ${expected}`, () => {
      expect.assertions(1);
      expect(countBs(input)).toStrictEqual(expected);
    });
  });
});

describe('countChar', () => {
  it('thinks an empty string contains no a\'s', () => {
    expect.assertions(1);
    expect(countChar('', 'a')).toStrictEqual(0);
  });

  [
    ['foo', 'o', 2],
    ['foo', 'f', 1],
  ].forEach(([input, target, expected]) => {
    it(`countChar(${input}, ${target}) = ${expected}`, () => {
      expect.assertions(1);
      expect(countChar(input, target)).toStrictEqual(expected);
    });
  });
});

describe('countBsRedux', () => {
  it('thinks an empty string contains no b\'s', () => {
    expect.assertions(1);
    expect(countBsRedux('')).toStrictEqual(0);
  });

  it('thinks the string "B" has one uppercase B', () => {
    expect.assertions(1);
    expect(countBsRedux('B')).toStrictEqual(1);
  });

  countBsTable.forEach(([input, expected]) => {
    it(`countBs(${input}) = ${expected}`, () => {
      expect.assertions(1);
      expect(countBsRedux(input)).toStrictEqual(expected);
    });
  });
});
