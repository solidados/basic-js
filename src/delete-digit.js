const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString();

  let arr = [...n].map(function (value, i) {
    return parseInt(n.slice(0, i) + n.slice(i + 1));
  });

  return Math.max(...arr);
}


module.exports = {
  deleteDigit
};
