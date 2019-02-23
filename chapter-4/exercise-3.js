function arrayToList(values) {
  if (values.length < 1) {
    return
  }

  const list = {
    value: values[0]
  }

  let current = list

  for (let i = 1; i < values.length; i++) {
    current.rest = {
      value: values[i]
    }

    current = current.rest
  }

  return list
}

const arrayToListInputs = [
  [0, 1, 2],
  [],
  [1],
  [1, undefined],
  [undefined]
]

console.log('arrayToList tests:')
for (const values of arrayToListInputs) {
  console.log(values)
  console.log(arrayToList(values))
  console.log()
}

function listToArray(list) {
  const values = []

  while (list) {
    values.push(list.value)
    list = list.rest
  }

  return values
}

console.log('listToArray tests:')
for (const values of arrayToListInputs) {
  const list = arrayToList(values)
  console.log(values)
  console.log(list)
  console.log(listToArray(list))
  console.log()
}
