const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cats = 0;
  matrix.forEach(function (box) {
    box.forEach(function (cell) {
      if (cell === '^^') {
        cats++;
      }
    });
  });
  return cats;
}

module.exports = {
  countCats
};
