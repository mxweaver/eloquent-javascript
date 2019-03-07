const flatten = (arrays) => arrays.reduce((result, a) => result.concat(a), [])

console.log(flatten([]))
console.log(flatten([[]]))
console.log(flatten([[1]]))
console.log(flatten([[1], [2]]))
console.log(flatten([[1, 2], [3]]))
console.log(flatten([[1, 2], [3], [4]]))
