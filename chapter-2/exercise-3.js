const size = 8;

for (let i = 0; i < size; i += 1) {
  let row = '';

  for (let j = 0; j < size; j += 1) {
    row += (i + j) % 2 === 0 ? ' ' : '#';
  }

  console.log(row);
}
