function deepEqual(a, b) {
  if (typeof a !== typeof b) {
    return false
  }

  if (typeof a === 'object') {
    const aKeys = Object.keys(a)
    const bKeys = Object.keys(b)

    if (aKeys.length !== bKeys.length) {
      return false
    }

    for (const key of aKeys) {
      if (!bKeys.includes(key) || !deepEqual(a[key], b[key])) {
        return false
      }
    }

    return true
  } else {
    return a === b
  }
}

const tests = [
  [1, 1, true],
  [1, 0, false],
  [
    [],
    [],
    true
  ], [
    [1],
    [],
    false
  ], [
    {},
    [],
    true
  ], [
    { foo: 'bar' },
    { buzz: 'bang' },
    false
  ], [
    { a: { b: { c: 'd' } } },
    { a: { b: { c: 'd' } } },
    true
  ]
]

for (const [a, b, equal] of tests) {
  console.log(a)
  console.log(b)
  console.log(`Expected ${equal}, got ${deepEqual(a, b)}`)
}
