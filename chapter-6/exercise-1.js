class Vec {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  plus (other) {
    return new Vec(
      this.x + other.x,
      this.y + other.y
    )
  }

  minus (other) {
    return new Vec(
      this.x - other.x,
      this.y - other.y
    )
  }

  length () {
    return Math.sqrt(
      Math.pow(this.x, 2) +
      Math.pow(this.y, 2)
    )
  }
}

const a = new Vec(1, 2)
const b = new Vec(2, 3)

console.log(a)
console.log(a.length())
console.log(b)
console.log(b.length())
console.log(a.plus(b))
console.log(a.minus(b))
console.log(b.plus(a))
console.log(b.minus(a))
