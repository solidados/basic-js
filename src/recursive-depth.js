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

    let bypass = 0;

    if (Array.isArray(arr)) {
      for (let i in arr) {
        bypass = Math.max(bypass, this.calculateDepth(arr[i]));
      }
      bypass++;
    }
    return bypass;
  }
}

module.exports = {
  DepthCalculator
};
