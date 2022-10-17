const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {

  if (date == undefined) {
    let warning = 'Unable to determine the time of year!';
    return warning;
  }

  // * ---- throw Error block ----
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  if (date.hasOwnProperty('toString')) {
    throw new Error('Invalid date!');
  }

  // * ---- determine season block ----
  let season = ['spring', 'summer', 'autumn', 'winter'];

  for (let i = 0; i < season.length; i++) {
    if (date.getMonth() >= 2 && date.getMonth() < 5) {
      return season[i];
    }
    if (date.getMonth() >= 5 && date.getMonth() < 8) {
      return season[i + 1];
    }
    if (date.getMonth() >= 8 && date.getMonth() < 11) {
      return season[i + 2];
    } else {
      return season[i + 3];
    }
  }

  /* if (date == undefined) {
    let warning = 'Unable to detrmine the time of year!';
    return warning;
  }
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  } else {
    let season = '';
    switch (month) {
      case '12':
      case '1':
      case '2':
        season = 'winter';
        break;

      case '3':
      case '4':
      case '5':
        season = 'spring';
        break;

      case '6':
      case '7':
      case '8':
        season = 'summer';
        break;

      case '9':
      case '10':
      case '11':
        season = 'fall';
        break;
    }

    // Math.floor((date.getMonth() / 12 * 4)) % 4;
  }
  return season; */
}
module.exports = {
  getSeason
};
