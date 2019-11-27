function loop(initial, f, update, body) {
  let value = initial;

  while (f(value)) {
    body(value);
    value = update(value);
  }
}

console.log('--- test 1 ---');
loop(1, (i) => i < 10, (i) => i + 1, console.log);

console.log('--- test 2 ---');
loop(1, (i) => i < 1, (i) => i + 1, console.log);

console.log('--- test 3 ---');
loop(1, (i) => i < 2, (i) => i + 1, console.log);
