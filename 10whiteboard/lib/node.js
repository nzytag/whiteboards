'use strict';

module.exports = class {
  constructor(val) {
    if (!val) return new Error('Value must be an argument');
    this.val = val;
    this.next = null;
  }
};