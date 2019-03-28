class Group {
  constructor () {
    this.values = []
  }

  static from (values) {
    const group = new Group()

    for (const value of values) {
      group.add(value)
    }

    return group
  }

  add (value) {
    if (!this.has(value)) {
      this.values.push(value)
    }
  }

  has (value) {
    return this.values.indexOf(value) !== -1
  }

  delete (value) {
    if (this.has(value)) {
      this.values.splice(this.values.indexOf(value), 1)
    }
  }
}

const a = new Group()
console.log(a)
a.add(1)
console.log(a)
a.add(1)
console.log(a)
a.delete(1)
console.log(a)
a.add(2)
a.add(3)
console.log(a)
a.delete(3)
console.log(a)

const b = Group.from([1, 2, 3])
console.log(b)
b.delete(2)
console.log(b)
