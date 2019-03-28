const Group = require('./group')

class GroupIterator {
  constructor (group) {
    this.group = group
    this.i = 0
  }

  next () {
    if (this.i >= this.group.values.length) {
      return { done: true }
    } else {
      return {
        value: this.group.values[this.i++],
        done: false
      }
    }
  }
}

class IterableGroup extends Group {
  [Symbol.iterator] () {
    return new GroupIterator(this)
  }

  static from (values) {
    const group = new IterableGroup()

    const parent = super.from(values)
    group.values = parent.values

    return group
  }
}

const a = IterableGroup.from([1, 2, 3])
console.log(a)
for (const v of a) {
  console.log(v)
}
