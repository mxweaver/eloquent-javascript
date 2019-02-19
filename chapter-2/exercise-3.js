const size = 8

for (let i = 0; i < size; i++) {
  let row = ''

  for (let j = 0; j < size; j++) {
    row += (i + j) % 2 === 0 ? ' ' : '#'
  }

  console.log(row)
}
