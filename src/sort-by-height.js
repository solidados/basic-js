const { NotImplementedError } = require("../extensions/index.js");

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
  // if (!Array.isArray(arr) || arr === []) {
  //   return `Nothing to sort`;
  // }

  const sortedElements = arr.filter((elem) => elem !== -1).sort((a, b) => a - b);

  let counter = 0;

  const result = arr.map((elem) => {
    if (elem !== -1) {
      const sortedElement = sortedElements[counter];
      counter++;
      return sortedElement;
    }
    return elem;
  });

  return result;
}
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

module.exports = {
  sortByHeight,
};
