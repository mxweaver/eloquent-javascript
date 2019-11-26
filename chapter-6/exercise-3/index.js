const IterableGroup = require('./IterableGroup');

const a = IterableGroup.from([1, 2, 3]);
console.log(a);

/* eslint-disable no-restricted-syntax */
for (const v of a) {
  console.log(v);
}
/* eslint-enable no-restricted-syntax */
