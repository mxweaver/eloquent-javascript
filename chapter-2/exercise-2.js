for (let i = 1; i <= 100; i++) {
  let buffer = ''

  if (i % 3 === 0) {
    buffer += 'Fizz'
  }

  if (i % 5 === 0) {
    buffer += 'Buzz'
  }

  console.log(buffer === '' ? i : buffer)
}
