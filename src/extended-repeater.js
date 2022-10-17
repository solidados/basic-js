const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating stringOfOptions based on the given parameters
 *
 *
 * @param {String} str stringOfOptions to repeat
 *
 * @param {Object} options options object
 * @return {String} repeating stringOfOptions
 *
 *
 *
 * @example
 *
 * repeater('STRING', {
 *    repeatTimes: 3,
 *    separator: '**',
 *    addition: 'PLUS',
 *    additionRepeatTimes: 3,
 *    additionSeparator: '00'
 * })
 *
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
