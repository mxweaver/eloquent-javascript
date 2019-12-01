const { printGrid } = require('../../chapter-2/exercise-3');

describe('printGrid', () => {
  it('prints an 8x8 grid by default', () => {
    expect.assertions(2);

    jest.spyOn(console, 'log').mockImplementation();
    console.log.mockClear();

    printGrid();

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(` # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # `);
  });

  it('prints a 1x1 grid when size = 1', () => {
    expect.assertions(2);

    jest.spyOn(console, 'log').mockImplementation();
    console.log.mockClear();

    printGrid(1);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(' ');
  });

  it('prints a 2x2 grid when size = 2', () => {
    expect.assertions(2);

    jest.spyOn(console, 'log').mockImplementation();
    console.log.mockClear();

    printGrid(2);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(` #
# `);
  });

  it('prints a 3x3 grid when size = 3', () => {
    expect.assertions(2);

    jest.spyOn(console, 'log').mockImplementation();
    console.log.mockClear();

    printGrid(3);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(` # 
# #
 # `);
  });

  it('prints a 4x4 grid when size = 4', () => {
    expect.assertions(2);

    jest.spyOn(console, 'log').mockImplementation();
    console.log.mockClear();

    printGrid(4);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(` # #
# # 
 # #
# # `);
  });

  it('prints a 5x5 grid when size = 5', () => {
    expect.assertions(2);

    jest.spyOn(console, 'log').mockImplementation();
    console.log.mockClear();

    printGrid(5);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(` # # 
# # #
 # # 
# # #
 # # `);
  });

  it('prints a 6x6 grid when size = 6', () => {
    expect.assertions(2);

    jest.spyOn(console, 'log').mockImplementation();
    console.log.mockClear();

    printGrid(6);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(` # # #
# # # 
 # # #
# # # 
 # # #
# # # `);
  });

  it('prints a 6x6 grid when size = 7', () => {
    expect.assertions(2);

    jest.spyOn(console, 'log').mockImplementation();
    console.log.mockClear();

    printGrid(7);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(` # # # 
# # # #
 # # # 
# # # #
 # # # 
# # # #
 # # # `);
  });
});
