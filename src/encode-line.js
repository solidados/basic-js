const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodingVersion = String();
  let matches = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      matches++;
    } else {
      if (matches > 1) {
        encodingVersion += matches + str[i];
        matches = 1;
      } else if (matches === 1) {
        encodingVersion += str[i];
      }
    }
  }
  return encodingVersion;
}

module.exports = {
  encodeLine
};
