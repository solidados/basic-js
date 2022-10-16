const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    /* arr[0] ? Math.max(...arr.map(calculateDepth)) + 1 : 0; */

    let bypass = 0;
    if (Array.isArray(arr)) {
      bypass++;
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          arr = arr.flat();
          getDepth(arr[i]);
        }
      }
      return bypass;
    }
  }
}


module.exports = {
  DepthCalculator
};
