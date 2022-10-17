const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (!Array.isArray(arr) || arr === []) {
    return `Nothing to sort`;
  }

  const newArray = arr.filter(item => item !== -1).sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
// for (let j = 0; j < arr.length; j++)
    if (arr[i] !== -1) {
      arr[i] == newArray.shift();
    }
  }

  return newArray;
}

module.exports = {
  sortByHeight
};
