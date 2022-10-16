const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let address = n.split('-');
  let decHex = /[0-9A-F][0-9A-F]/g;
  let comlience = n.match(decHex);
  for (let i = 0; i < address.length; i++){
    // address[i] == comlience[i] ? true : false;
    if (address[i] !== comlience[i]){
      return false;
    }
    return true;
  }
}
module.exports = {
  isMAC48Address
};
