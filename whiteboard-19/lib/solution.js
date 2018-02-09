'use strict';

const kTree = require('../lib/k-ary-tree');
const Sll = require('../lib/sll');


// returns a SLL that has all nodes in kary tree
function karyTreeToSll(tree) {
  if (!(tree instanceof kTree)) throw new Error('Input needs to be tree instance');
  if (tree.root.val === null) return null;

  let sll = new Sll();

  tree.breadthFirst(currentTN => {
    sll.insertEnd(currentTN.val);
  });

  return sll;
}

module.exports = karyTreeToSll;