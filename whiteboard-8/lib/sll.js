'use strict';

const Nd = require('./nd.js');


class SLL {
  constructor() {
    this.head = null;
  }

  insertEnd(val) { //Big O is O(1) if just one Node, or O(n) if it has to iterates to find end.
    if (!val) return null;
    let nd = new Nd(val);
    if (!this.head) {
      this.head = nd;
      return this;
    }
    for (var iterates = this.head; iterates.next; iterates = iterates.next);
    iterates.next = nd;
    return this;
  }
}

module.exports = SLL;