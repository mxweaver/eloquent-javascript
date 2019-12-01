const { printGrid } = require('../../chapter-2/exercise-3');

const data = [
  {
    size: 1,
    expected: ' ',
  },
  {
    size: 2,
    expected: ` #
# `,
  },
  {
    size: 3,
    expected: ` # 
# #
 # `,
  },
  {
    size: 4,
    expected: ` # #
# # 
 # #
# # `,
  },
  {
    size: 5,
    expected: ` # # 
# # #
 # # 
# # #
 # # `,
  },
  {
    size: 6,
    expected: ` # # #
# # # 
 # # #
# # # 
 # # #
# # # `,
  },
  {
    size: 7,
    expected: ` # # # 
# # # #
 # # # 
# # # #
 # # # 
# # # #
 # # # `,
  },
  {
    size: 8,
    expected: ` # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # `,
  },
];

describe('printGrid', () => {
  it('prints an 8x8 grid by default', () => {
    expect.assertions(2);

    jest.spyOn(console, 'log').mockImplementation();
    console.log.mockClear();

    printGrid();

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(data.find(({ size }) => size === 8).expected);
  });

  data.forEach(({ size, expected }) => {
    it(`prints a ${size}x${size} grid when size = ${size}`, () => {
      expect.assertions(2);

      jest.spyOn(console, 'log').mockImplementation();
      console.log.mockClear();

      printGrid(size);

      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith(expected);
    });
  });
});
