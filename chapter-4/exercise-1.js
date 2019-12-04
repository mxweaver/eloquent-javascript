function range(start, end, step = 1) {
  const values = [];

  if (start < end) {
    for (let i = start; i <= end; i += step) {
      values.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      values.push(i);
    }
  }

  return values;
}

const sum = (values) => values.reduce((total, value) => total + value, 0);

module.exports = {
  range,
  sum,
};
