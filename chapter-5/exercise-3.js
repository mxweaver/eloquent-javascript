function everyLoop(values, test) {
  for (const value of values) {
    if (!test(value)) {
      return false
    }
  }

  return true
}

function everySome(values, test) {
  if (values.length === 0) {
    return true
  }

  return values.some(test) && !values.some(v => !test(v))
}

const cases = [
  [
    [0],
    x => x === 0,
    true
  ],
  [
    [0, 0, 0],
    x => x === 0,
    true
  ],
  [
    [0, 1, 0],
    x => x === 0,
    true
  ],
  [
    [0, 1, 0],
    x => x >= 0,
    true
  ],
  [
    [],
    x => x >= 0,
    true
  ]
]

for (const c of cases) {
  console.log('----------')
  console.log(c[0], c[1], c[2])
  console.log(everyLoop(c[0], c[1]))
  console.log(everySome(c[0], c[1]))
}
