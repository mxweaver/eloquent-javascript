const { box, withBoxUnlocked } = require('../../chapter-8/exercise-2');

describe('withBoxUnlocked', () => {
  it('runs the given function', () => {
    expect.assertions(1);

    const body = jest.fn();

    withBoxUnlocked(body);

    expect(body).toHaveBeenCalledTimes(1);
  });

  it('supplies the content to the given function', () => {
    expect.assertions(1);

    const body = jest.fn();

    withBoxUnlocked(body);

    // eslint-disable-next-line no-underscore-dangle
    expect(body).toHaveBeenCalledWith(box._content);
  });

  it('does not throw an error when the box is locked', () => {
    expect.assertions(1);

    const body = jest.fn();
    box.lock();

    expect(() => {
      withBoxUnlocked(body);
    }).not.toThrow();
  });

  it('does not throw an error when the box is unlocked', () => {
    expect.assertions(1);

    const body = jest.fn();
    box.unlock();

    expect(() => {
      withBoxUnlocked(body);
    }).not.toThrow();
  });

  it('locks the box when it\'s done and the box was locked', () => {
    expect.assertions(1);

    const body = jest.fn();
    box.lock();

    withBoxUnlocked(body);

    expect(box.locked).toStrictEqual(true);
  });

  it('locks the box when it\'s done and the box was locked, even if the body throws an exception', () => {
    expect.assertions(1);

    const body = jest.fn(() => { throw new Error(); });
    box.lock();

    try {
      withBoxUnlocked(body);
    } catch (e) {
      // swallow e
    }

    expect(box.locked).toStrictEqual(true);
  });

  it('leaves the box unlocked when it\'s done and the box was unlocked', () => {
    expect.assertions(1);

    const body = jest.fn();
    box.unlock();

    withBoxUnlocked(body);

    expect(box.locked).toStrictEqual(false);
  });

  it('leaves the box unlocked when it\'s done and the box was unlocked, even if the body throws an exception', () => {
    expect.assertions(1);

    const body = jest.fn(() => { throw new Error(); });

    box.unlock();

    try {
      withBoxUnlocked(body);
    } catch (e) {
      // swallow e
    }

    expect(box.locked).toStrictEqual(false);
  });
});
