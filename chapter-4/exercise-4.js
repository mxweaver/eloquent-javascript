function deepEqual(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }

  if (typeof a === 'object') {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) {
      return false;
    }

    return aKeys.find((key) => !bKeys.includes(key) || !deepEqual(a[key], b[key]));
  }
  return a === b;
}

[
  [1, 1, true],
  [1, 0, false],
  [
    [],
    [],
    true,
  ], [
    [1],
    [],
    false,
  ], [
    {},
    [],
    true,
  ], [
    { foo: 'bar' },
    { buzz: 'bang' },
    false,
  ], [
    { a: { b: { c: 'd' } } },
    { a: { b: { c: 'd' } } },
    true,
  ],
].forEach(([a, b, equal]) => {
  console.log(a);
  console.log(b);
  console.log(`Expected ${equal}, got ${deepEqual(a, b)}`);
});
