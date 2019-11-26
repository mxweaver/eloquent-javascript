function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

console.log(`min(1, 2) = ${min(1, 2)}`);
console.log(`min(0, 23) = ${min(0, 23)}`);
console.log(`min(100, 32) = ${min(100, 32)}`);
console.log(`min(-1, 2) = ${min(-1, 2)}`);
console.log(`min(0, 0) = ${min(0, 0)}`);
