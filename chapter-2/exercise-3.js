function printGrid(size = 8) {
  let output = '';

  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      output += (i + j) % 2 === 0 ? ' ' : '#';
    }

    if (i < size - 1) {
      output += '\n';
    }
  }

  console.log(output);
}

module.exports = {
  printGrid,
};
