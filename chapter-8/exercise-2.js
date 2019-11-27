/* eslint-disable no-underscore-dangle */
const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true; },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!');
    return this._content;
  },
};
/* eslint-enable no-underscore-dangle */

function withBoxUnlocked(body) {
  const wasLocked = box.locked;

  box.unlock();

  try {
    body(box.content);
  } finally {
    if (wasLocked) {
      box.lock();
    }
  }
}

module.exports = {
  box,
  withBoxUnlocked,
};
