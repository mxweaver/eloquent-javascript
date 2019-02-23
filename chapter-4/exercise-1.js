function range(start, end) {
  const values = []

  for (let i = start; i <= end; i++) {
    values.push(i)
  }

  return values
}

const rangeTestInputs = [
  [0, 1],
  [0, 2],
  [1, 2],
  [3, 4],
  [4, 10],
  [10, 26],
  [26, 100]
]

for (const [start, end] of rangeTestInputs) {
  console.log(`range(${start}, ${end}) = ${range(start, end)}`)
}
