function reverseArray(values) {
  const reversedValues = [];

  for (let i = values.length - 1; i >= 0; i -= 1) {
    reversedValues.push(values[i]);
  }

  return reversedValues;
}

function reverseArrayInPlace(values) {
  const temp = [];

  while (values.length > 0) {
    temp.push(values.pop());
  }

  while (temp.length > 0) {
    values.unshift(temp.pop());
  }
}

module.exports = {
  reverseArray,
  reverseArrayInPlace,
};
