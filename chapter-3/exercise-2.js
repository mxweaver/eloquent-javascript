function isEven(n) {
  if (n === 0) {
    return true;
  } if (n === 1) {
    return false;
  } if (n < 0) {
    return isEven(n * -1);
  }
  return isEven(n - 2);
}

console.log(`isEven(50) = ${isEven(50)}`);
console.log(`isEven(75) = ${isEven(75)}`);
console.log(`isEven(-1) = ${isEven(-1)}`);
console.log(`isEven(-20) = ${isEven(-20)}`);
