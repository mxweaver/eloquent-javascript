function reverseArray(values) {
  const reversedValues = [];

  for (let i = values.length - 1; i >= 0; i -= 1) {
    reversedValues.push(values[i]);
  }

  return reversedValues;
}

const inputs = [
  [1],
  [1, 2],
  [1, 2, 3],
  ['la', 'di', 'da'],
  ['see', 1, 'you', 55, 'space', undefined, 'cowboy'],
];

inputs.forEach((values) => {
  console.log(`reverseArray([${values}]) = [${reverseArray(values)}]`);
});

function reverseArrayInPlace(values) {
  const temp = [];

  while (values.length > 0) {
    temp.push(values.pop());
  }

  while (temp.length > 0) {
    values.unshift(temp.pop());
  }
}

inputs.forEach((values) => {
  const copy = [...values];
  reverseArrayInPlace(copy);

  console.log(`reverseArrayInPlace([${values}]) = [${copy}]`);
});
