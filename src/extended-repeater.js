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
  let string = String(str);

  /*   let rules = {
      repeatTimes: this.repeatTimes || 0,
      separator: this.separator || '+',
      addition: this.addition || '',
      additionRepeatTimes: this.additionRepeatTimes || 1,
      additionSeparator: this.additionSeparator || '|'
    };
   */

  let repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator;

  if (options.repeatTimes) {
    repeatTimes = options.repeatTimes;
  } else {
    repeatTimes = 1;
  }

  if (options.separator) {
    separator = options.separator;
  } else {
    separator = '+';
  }

  if (options.addition !== undefined) {
    addition = String(options.addition);
  } else {
    addition = '';
  }

  if (options.additionRepeatTimes) {
    additionRepeatTimes = options.additionRepeatTimes;
  } else {
    additionRepeatTimes = 1;
  }

  if (options.additionSeparator) {
    additionSeparator = options.additionSeparator;
  } else {
    additionSeparator = '|';
  }


  let nextString = String(),
    result = [];

  if (addition) {
    let additionArray = [];
    for (let i = 1; i <= additionRepeatTimes; i++) {
      additionArray.push(addition);
      additionArray.push(additionSeparator);
    }
    additionArray.pop();
    nextString = [...additionArray].join('');
  }

  for (let i = 1; i <= repeatTimes; i++) {
    result.push(string);
    result.push(nextString);
    result.push(separator);
  }
  result.pop();
  result = [...result];

  return result.join('');
}

module.exports = {
  repeater
};
