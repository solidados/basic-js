const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  // getLength returns the current chain length as a number;
  getLength() {
    return this.chain.length;
  },

  // addLink(value) adds a link containing a string representation of the value to the chain;
  // ! If addLink is called with no arguments, it adds an empty link ('( )') to the chain
  addLink(value = '') {
    // value = '';
    // value = String(value);
    this.chain.push(`( ${value} )`);
    return this;
  },

  // removeLink(position) removes a chain link in the specified position;
  // ! If removeLink accepts invalid position (e.g. not a number, or a fractional number, or corresponding to a nonexistent link), it must throw an Error with message You can't remove incorrect link!
  removeLink(position) {
    if (this.chain[position - 1] == undefined) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },

  // reverseChain reverses the chain;
  reverseChain() {
    this.chain.reverse();
    return this;
  },

  // finishChain ends the chain and returns it
  // ! After calling the finishChain method, the existing chain must be deleted, as if an Error was thrown
  finishChain() {
    let linkNext = this.chain.join('~~');
    this.chain = [];
    return linkNext;
  }
};

module.exports = {
  chainMaker
};
