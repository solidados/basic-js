const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(directMachine = true) {
    this.directMachine = directMachine;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Message and Key are required");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedChars = [];

    let keyCounter = 0;
    for (let i = 0; i < message.length; i++) {
      const messageChar = message.charAt(i);

      if (messageChar.match(/\w/gi)) {
        const keyChar = key.charAt(keyCounter % key.length);
        const encryptedChar = String.fromCharCode(
          ((messageChar.charAt(0) - 65 + keyChar.charAt(0) - 65) % 26) + 65);

        encryptedChars.push(encryptedChar);
        keyCounter++;
      } else {
        encryptedChars.push(messageChar);
      }
    }

    const result = encryptedChars.join("");

    return this.directMachine ? result : result.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Message and Key are required");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let decryptedChars = [];

    let keyCounter = 0;
    for (let i = 0; i < message.length; i++) {
      const messageChar = message.charAt(i);

      if (messageChar.match(/\w/gi)) {
        const keyChar = key.charAt(keyCounter % key.length);
        const decryptedChar = String.fromCharCode(
          ((messageChar.charCodeAt(0) - 65 - (keyChar.charCodeAt(0) - 65) + 26) % 26) + 65);
        decryptedChars.push(decryptedChar);
        keyCounter++;
      } else {
        decryptedChars.push(messageChar);
      }
    }

    const result = decryptedChars.join("");

    return this.directMachine ? result : result.split("").reverse().join("");
  }
}

//   decrypt() {
//     throw new NotImplementedError("Not implemented");
//     // remove line with error and write your code here
//   }
// }

module.exports = {
  VigenereCipheringMachine,
};
