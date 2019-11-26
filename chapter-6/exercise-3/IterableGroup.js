const Group = require('../Group');
const GroupIterator = require('./GroupIterator');

class IterableGroup extends Group {
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }

  static from(values) {
    const group = new IterableGroup();

    const parent = super.from(values);
    group.values = parent.values;

    return group;
  }
}

module.exports = IterableGroup;
