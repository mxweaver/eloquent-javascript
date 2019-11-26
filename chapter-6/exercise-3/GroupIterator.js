class GroupIterator {
  constructor(group) {
    this.group = group;
    this.i = 0;
  }

  next() {
    if (this.i >= this.group.values.length) {
      return { done: true };
    }

    this.i += 1;

    return {
      value: this.group.values[this.i],
      done: false,
    };
  }
}

module.exports = GroupIterator;
