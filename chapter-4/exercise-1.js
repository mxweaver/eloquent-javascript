function range(start, end, step = 1) {
  const values = [];

  for (let i = start; i <= end; i += step) {
    values.push(i);
  }

  return values;
}

[
  [0, 1],
  [0, 2],
  [1, 2],
  [3, 4],
  [4, 10],
  [10, 26],
  [26, 100],
  [0, 20, 2],
].forEach(([start, end, step]) => {
  if (step) {
    console.log(`range(${start}, ${end}, ${step}) = ${range(start, end, step)}`);
  } else {
    console.log(`range(${start}, ${end}) = ${range(start, end)}`);
  }
});

const sum = (values) => values.reduce((total, value) => total + value, 0);

console.log(`sum(range(1, 10)) = ${sum(range(1, 10))}`);
