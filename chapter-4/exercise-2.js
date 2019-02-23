function reverseArray(values) {
  const reversedValues = []

  for (let i = values.length - 1; i >= 0; i--) {
    reversedValues.push(values[i])
  }

  return reversedValues
}

const reverseArrayTestInputs = [
  [1],
  [1, 2],
  [1, 2, 3],
  ['la', 'di', 'da'],
  ['see', 1, 'you', 55, 'space', undefined, 'cowboy']
]

for (const values of reverseArrayTestInputs) {
  console.log(`reverseArray([${values}]) = [${reverseArray(values)}]`)
}
