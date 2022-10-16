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

    for (let i = 0; i < arr.length; [i++]) {
      if (Array.isArray(arr[i])) {
        let arr2 = arr.reduce((e, i) => e.concat(i), []);
        return bypass + this.calculateDepth(arr2);
      }
    }
    // 1 - arr[0] ? Math.max(...arr.map(f)) + bypass : 0;

    // 2 -
    /* if (Array.isArray(arr)) {
      bypass++;
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          arr = arr.flat();
          calculateDepth(arr[i]);
        }
      }
      return bypass;
    } */
  }
}


module.exports = {
  DepthCalculator
};
