const o = {
  hasOwnProperty: 'foobar'
}

console.log(o)
console.log(Object.prototype.hasOwnProperty.call(o, 'hasOwnProperty'))
