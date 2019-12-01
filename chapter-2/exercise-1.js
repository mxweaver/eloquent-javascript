function printTriangle() {
  for (let i = 0; i < 7; i += 1) {
    let buffer = '';

    for (let j = 0; j <= i; j += 1) {
      buffer += '#';
    }

    console.log(buffer);
  }
}

module.exports = {
  printTriangle,
};
