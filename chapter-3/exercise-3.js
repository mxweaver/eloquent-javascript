function countBs(s) {
  let numBs = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'B') {
      numBs += 1;
    }
  }

  return numBs;
}

function countChar(s, target) {
  let numFound = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === target) {
      numFound += 1;
    }
  }

  return numFound;
}

const countBsRedux = (s) => countChar(s, 'B');

module.exports = {
  countBs,
  countChar,
  countBsRedux,
};
