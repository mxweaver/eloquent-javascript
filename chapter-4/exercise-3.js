function arrayToList(values) {
  if (values.length < 1) {
    return undefined;
  }

  const list = {
    value: values[0],
  };

  let current = list;

  for (let i = 1; i < values.length; i += 1) {
    current.rest = {
      value: values[i],
    };

    current = current.rest;
  }

  return list;
}

console.log('arrayToList tests:');
const arrayToListInputs = [
  [0, 1, 2],
  [],
  [1],
  [1, undefined],
  [undefined],
];

arrayToListInputs.forEach((values) => {
  console.log(values);
  console.log(arrayToList(values));
  console.log();
});

function listToArray(list) {
  const values = [];
  let workingList = list;

  while (list) {
    values.push(list.value);
    workingList = workingList.rest;
  }

  return values;
}

console.log('listToArray tests:');
arrayToListInputs.forEach((values) => {
  const list = arrayToList(values);
  console.log(values);
  console.log(list);
  console.log(listToArray(list));
  console.log();
});

function prepend(rest, value) {
  return { value, rest };
}

(function testPrepend() {
  let list = prepend(undefined, 1);
  console.log(list);
  list = prepend(list, 2);
  console.log(list);
  list = prepend(list, undefined);
  console.log(list);
  list = prepend(list, 3);
  console.log(list);
}());

function nth(list, n) {
  if (!list || n < 0) {
    return undefined;
  }

  if (n > 0) {
    return nth(list.rest, n - 1);
  }
  return list.value;
}

(function testNth() {
  const list = arrayToList([1, 2, 3]);
  console.log(nth(list, 0));
  console.log(nth(list, 1));
  console.log(nth(list, 2));
  console.log(nth(list, 3));
  console.log(nth(list, -1));
}());
