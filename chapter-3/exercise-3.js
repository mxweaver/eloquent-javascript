function countBs(s) {
  let numBs = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'B') {
      numBs++
    }
  }

  return numBs
}

console.log(`countBs('aaaa') = ${countBs('aaaa')}`)
console.log(`countBs('aBBa') = ${countBs('aBBa')}`)

function countChar(s, target) {
  let numFound = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === target) {
      numFound++
    }
  }

  return numFound
}

console.log(`countChar('foo', 'o') = ${countChar('foo', 'o')}`)
console.log(`countChar('foo', 'f') = ${countChar('foo', 'f')}`)

const countBsRedux = s => countChar(s, 'B')

console.log(`countBsRedux('aaaa') = ${countBsRedux('aaaa')}`)
console.log(`countBsRedux('aBBa') = ${countBsRedux('aBBa')}`)
