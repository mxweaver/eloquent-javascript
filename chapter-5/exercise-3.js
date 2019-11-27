function everyLoop(values, f) {
  /* eslint-disable no-restricted-syntax */
  for (const value of values) {
    if (!f(value)) {
      return false;
    }
  }
  /* eslint-enable no-restricted-syntax */

  return true;
}

function everySome(values, f) {
  if (values.length === 0) {
    return true;
  }

  return values.some(test) && !values.some((v) => !f(v));
}

[
  [
    [0],
    (x) => x === 0,
    true,
  ],
  [
    [0, 0, 0],
    (x) => x === 0,
    true,
  ],
  [
    [0, 1, 0],
    (x) => x === 0,
    true,
  ],
  [
    [0, 1, 0],
    (x) => x >= 0,
    true,
  ],
  [
    [],
    (x) => x >= 0,
    true,
  ],
].forEach((c) => {
  console.log('----------');
  console.log(c[0], c[1], c[2]);
  console.log(everyLoop(c[0], c[1]));
  console.log(everySome(c[0], c[1]));
});
