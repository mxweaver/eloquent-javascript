const { primitiveMultiply, retry } = require('../../chapter-8/exercise-1');

describe('primitiveMultiply', () => {
  it('fails 80% of the time', () => {
    expect.assertions(4);
    const total = 1000;
    let failures = 0;
    let successes = 0;

    for (let i = 0; i < total; i += 1) {
      try {
        primitiveMultiply(0, 0);
        successes += 1;
      } catch (e) {
        failures += 1;
      }
    }

    expect(failures).toBeGreaterThanOrEqual(total * 0.75);
    expect(failures).toBeLessThanOrEqual(total * 0.85);

    expect(successes).toBeGreaterThanOrEqual(total * 0.15);
    expect(successes).toBeLessThanOrEqual(total * 0.25);
  });
});

describe('retry', () => {
  it('eventually succeeds', () => {
    expect.assertions(10000);
    for (let i = 0; i < 10000; i += 1) {
      expect(retry(i, i)).toStrictEqual(i * i);
    }
  });
});
