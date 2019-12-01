const { printTriangle } = require('../../chapter-2/exercise-1');

describe('printTriangle', () => {
  jest.spyOn(console, 'log').mockImplementation();

  it('prints a triangle', () => {
    expect.assertions(8);

    printTriangle();

    expect(console.log).toHaveBeenCalledTimes(7);
    expect(console.log).toHaveBeenNthCalledWith(1, '#');
    expect(console.log).toHaveBeenNthCalledWith(2, '##');
    expect(console.log).toHaveBeenNthCalledWith(3, '###');
    expect(console.log).toHaveBeenNthCalledWith(4, '####');
    expect(console.log).toHaveBeenNthCalledWith(5, '#####');
    expect(console.log).toHaveBeenNthCalledWith(6, '######');
    expect(console.log).toHaveBeenNthCalledWith(7, '#######');
  });
});
