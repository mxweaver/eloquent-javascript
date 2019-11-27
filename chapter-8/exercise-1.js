class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() <= 0.8) {
    throw new MultiplicatorUnitFailure();
  } else {
    return a * b;
  }
}

function retry(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) {
        throw e;
      }
    }
  }
}

module.exports = {
  primitiveMultiply,
  retry,
};
