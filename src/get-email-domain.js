const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {

  const validEmail = (email) => {
    let emailTemplate = /^\S+@\S+\.\S+$/;
    return emailTemplate.test(email);
  };

  let splitEmail = email.split("@");
  if (validEmail(email) == false) {
    return 'Email is invalid';
  } else {
    return (splitEmail.slice(-1)).join('');
  }
}

module.exports = {
  getEmailDomain
};